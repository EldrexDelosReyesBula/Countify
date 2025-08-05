// cloudflare-security.js
(async () => {
  if (typeof config === 'undefined') {
    console.error('Cloudflare config not found. Make sure config.js is loaded.');
    return;
  }

  const { CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_ZONE_ID } = config;

  const headers = {
    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    'Content-Type': 'application/json',
  };

  // IP Reputation & Bot Detection
  async function detectThreats() {
    try {
      const userIP = await getUserIP();

      if (!userIP) {
        console.warn('Could not determine user IP');
        return;
      }

      const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/intel/ip-list/subscriptions`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        console.warn('Unable to query Cloudflare Intel API');
        return;
      }

      const intelData = await response.json();
      const matched = intelData.result.some(entry => entry.ip === userIP);

      if (matched) {
        alert('⚠️ Suspicious activity detected from this IP. Your access may be restricted.');
        // Optional: redirect, block action, etc.
      }
    } catch (err) {
      console.error('Error during Cloudflare threat detection:', err);
    }
  }

  // Helper to get user IP via external service
  async function getUserIP() {
    try {
      const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
      const text = await res.text();
      const ipLine = text.split('\n').find(line => line.startsWith('ip='));
      return ipLine ? ipLine.split('=')[1] : null;
    } catch {
      return null;
    }
  }

  // Inject security headers (can be expanded)
  function applySecurityHeaders() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'";
    document.head.appendChild(meta);
  }

  // Initialize security routines
  function initSecurity() {
    applySecurityHeaders();
    detectThreats();
    console.log('Cloudflare security layer initialized.');
  }

  // Start
  window.addEventListener('load', initSecurity);
})();