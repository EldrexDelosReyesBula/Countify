// Check if onboarding has been completed
if (localStorage.getItem('countify-onboarding-completed') === 'true') {
    window.location.href = 'main.html';
}

// Disable text selection and image dragging
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
        e.preventDefault();
        return false;
    }
});

// Anti-inspection techniques (basic)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('keydown', function(e) {
    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

let currentSlide = 1;
const totalSlides = 4;

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    const target = e.target.closest('.btn');
    if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        target.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
});

function nextSlide() {
    if (currentSlide >= totalSlides) return;
    navigateToSlide(currentSlide + 1);
}

function prevSlide() {
    if (currentSlide <= 1) return;
    navigateToSlide(currentSlide - 1);
}

function navigateToSlide(slideNumber) {
    const currentSlideElement = document.getElementById(`slide${currentSlide}`);
    const targetSlideElement = document.getElementById(`slide${slideNumber}`);

    if (!currentSlideElement || !targetSlideElement) return;

    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach(dot => dot.classList.remove('active'));
    document.querySelectorAll(`#slide${slideNumber} .progress-dot`)[slideNumber - 1].classList.add('active');

    // Animate transition
    currentSlideElement.classList.remove('active');
    targetSlideElement.classList.add('active');

    // Set direction class for animation
    if (slideNumber > currentSlide) {
        currentSlideElement.classList.add('previous');
        targetSlideElement.classList.remove('next');
    } else {
        currentSlideElement.classList.add('next');
        targetSlideElement.classList.remove('previous');
    }

    currentSlide = slideNumber;

    // Reset animation for features
    const features = targetSlideElement.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
        feature.style.animation = 'none';
        setTimeout(() => {
            feature.style.animation = `fadeIn 0.6s ease-out ${index * 0.2 + 0.2}s forwards`;
        }, 10);
    });
}

function completeOnboarding() {
    localStorage.setItem('countify-onboarding-completed', 'true');
    window.location.href = 'main.html';
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'Enter' && currentSlide === totalSlides) {
        completeOnboarding();
    }
});

// Add swipe support for touch devices
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    // Prevent scrolling during horizontal swipes
    if (Math.abs(e.changedTouches[0].screenX - touchStartX) >
        Math.abs(e.changedTouches[0].screenY - touchStartY)) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const xDiff = touchStartX - touchEndX;
    const yDiff = touchStartY - touchEndY;

    // Only consider horizontal swipes
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 50) { // Swipe left
            nextSlide();
        } else if (xDiff < -50) { // Swipe right
            prevSlide();
        }
    }
}

// Make functions available globally
window.nextSlide = nextSlide;
window.completeOnboarding = completeOnboarding;