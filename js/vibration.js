document.addEventListener('DOMContentLoaded', function() {
  if (!('vibrate' in navigator)) return;

  const hapticLinks = document.querySelectorAll('.haptic-link');
  if (!hapticLinks.length) return;

  const vibrate = () => {
    try {
      navigator.vibrate([15, 3, 15]);
    } catch (e) {
      console.warn('Haptic feedback unavailable');
    }
  };

  hapticLinks.forEach(link => {

    link.addEventListener('touchstart', vibrate, { passive: true });

    // Mouse clicks
    link.addEventListener('mousedown', vibrate);

    // For click events (delayed slightly to not block navigation)
    link.addEventListener('click', (e) => {
      if (e.screenX !== 0) { // Filter out synthetic clicks
        setTimeout(vibrate, 10);
      }
    });

    // For long press (contextmenu)
    link.addEventListener('contextmenu', vibrate);
  });

  // Optional: Prevent vibration on scroll
  let lastTouchTime = 0;
  document.addEventListener('touchmove', () => {
    lastTouchTime = Date.now();
  }, { passive: true });
});
