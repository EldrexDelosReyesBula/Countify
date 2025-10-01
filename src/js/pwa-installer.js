// PWA Installation Manager
class PWAInstaller {
    constructor() {
        this.deferredPrompt = null;
        this.bottomSheet = null;
        this.hasShownPrompt = localStorage.getItem('pwaPromptShown') === 'true';
        this.init();
    }

    init() {
        // Check if running on HTTPS (required for PWA installation)
        if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
            console.warn('PWA installation requires HTTPS');
            return;
        }

        // Event listeners
        window.addEventListener('beforeinstallprompt', this.handleInstallPrompt.bind(this));
        window.addEventListener('appinstalled', this.handleAppInstalled.bind(this));
        document.addEventListener('DOMContentLoaded', this.checkPWAStatus.bind(this));

        // Register Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('Service Worker registered:', reg))
                .catch(err => console.error('Service Worker registration failed:', err));
        } else {
            console.warn('Service Worker not supported in this browser');
        }
    }

    handleInstallPrompt(e) {
        e.preventDefault();
        this.deferredPrompt = e;

        // Show bottom sheet only if not already installed and not dismissed
        if (!this.isRunningAsPWA() && !this.hasShownPrompt) {
            this.showBottomSheet();
        }
    }

    handleAppInstalled() {
        console.log('PWA successfully installed');
        this.hideBottomSheet();
        localStorage.setItem('pwaPromptShown', 'true');
        this.deferredPrompt = null;
    }

    showBottomSheet() {
        if (this.bottomSheet) return;

        // Create bottom sheet
        this.bottomSheet = document.createElement('div');
        this.bottomSheet.id = 'pwaBottomSheet';
        this.bottomSheet.className = 'pwa-bottom-sheet';
        this.bottomSheet.setAttribute('role', 'dialog');
        this.bottomSheet.setAttribute('aria-label', 'Install App Prompt');
        this.bottomSheet.innerHTML = `
            <div class="pwa-bottom-sheet-content">
                <h2>Install Our App</h2>
                <p>Enjoy a better experience by adding our app to your home screen.</p>
                ${this.isIOS() ? `
                    <p class="ios-instructions">
                        To install, tap the <span class="material-icons">ios_share</span> Share button in Safari and select <strong>Add to Home Screen</strong>.
                    </p>
                ` : ''}
                <div class="pwa-bottom-sheet-actions">
                    ${!this.isIOS() ? `
                        <button id="installButton" class="pwa-install-btn">
                            <span class="material-icons">download</span>
                            Install App
                        </button>
                    ` : ''}
                    <button id="notNowButton" class="pwa-not-now-btn">Not Now</button>
                </div>
            </div>
        `;

        document.body.appendChild(this.bottomSheet);

        // Add event listeners for buttons
        if (!this.isIOS()) {
            const installButton = this.bottomSheet.querySelector('#installButton');
            installButton.addEventListener('click', this.triggerInstall.bind(this));
            installButton.focus(); // Auto-focus for accessibility
        }

        const notNowButton = this.bottomSheet.querySelector('#notNowButton');
        notNowButton.addEventListener('click', this.handleNotNow.bind(this));

        // Add keyboard navigation
        this.addKeyboardNavigation();
    }

    async triggerInstall() {
        if (!this.deferredPrompt) return;

        try {
            const installButton = this.bottomSheet.querySelector('#installButton');
            installButton.disabled = true;
            this.deferredPrompt.prompt();

            const {
                outcome
            } = await this.deferredPrompt.userChoice;
            console.log(`User ${outcome} the install prompt`);
        } catch (err) {
            console.error('Error during PWA installation:', err);
        } finally {
            this.deferredPrompt = null;
            this.hideBottomSheet();
        }
    }

    handleNotNow() {
        localStorage.setItem('pwaPromptShown', 'true');
        this.hasShownPrompt = true;
        this.hideBottomSheet();
    }

    hideBottomSheet() {
        if (this.bottomSheet) {
            this.bottomSheet.classList.add('hide');
            setTimeout(() => {
                this.bottomSheet.remove();
                this.bottomSheet = null;
            }, 300); // Match CSS transition duration
        }
    }

    isRunningAsPWA() {
        return window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone === true;
    }

    isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    checkPWAStatus() {
        if (this.isRunningAsPWA()) {
            console.log('App is running in standalone mode');
            localStorage.setItem('pwaPromptShown', 'true');
            this.hasShownPrompt = true;
        } else if (!this.hasShownPrompt && !this.isIOS()) {
            // Wait a moment to ensure beforeinstallprompt has a chance to fire
            setTimeout(() => {
                if (this.deferredPrompt) {
                    this.showBottomSheet();
                }
            }, 1000);
        }
    }

    addKeyboardNavigation() {
        this.bottomSheet.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.handleNotNow();
            }
        });
    }

    destroy() {
        // Cleanup event listeners
        window.removeEventListener('beforeinstallprompt', this.handleInstallPrompt.bind(this));
        window.removeEventListener('appinstalled', this.handleAppInstalled.bind(this));
        document.removeEventListener('DOMContentLoaded', this.checkPWAStatus.bind(this));
        this.hideBottomSheet();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const installer = new PWAInstaller();

    // Optional: Cleanup on page unload
    window.addEventListener('unload', () => {
        installer.destroy();
    });
});