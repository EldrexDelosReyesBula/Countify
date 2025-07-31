// config.js (in gitignored folder)
window.appConfig = (function() {
  // Private configuration
  const secrets = {
    firebase: {
      apiKey: "AIzaSyCEBkAxkrm95b4LN-iNHmwXcpoLtwpQVlg",
      authDomain: "countify-eb9dd.firebaseapp.com",
      projectId: "countify-eb9dd",
      storageBucket: "countify-eb9dd.appspot.com",
      messagingSenderId: "112900990389",
      appId: "1:112900990389:web:b2adbd5edbb658a27725fc",
      measurementId: "G-LDBWQNNWG9"
    },
    paypal: {
      clientId: "AYG_Ze1ITfxBvEb3QwW4F5BgdXThYisLcu_ZQTzgPeFRBsxp_yOGrjCGBxrqzvK4mKBZSK-VkhIMooPu",
      currency: "PHP"
    }
  };

  // Public interface
  return {
    getFirebaseConfig: () => ({ ...secrets.firebase }),
    getPayPalConfig: () => ({ ...secrets.paypal }),
    
    // Safe methods
    getPayPalClientId: () => secrets.paypal.clientId,
    getCurrency: () => secrets.paypal.currency
  };
})();