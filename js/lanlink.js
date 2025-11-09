// LanLink Integration for Countify+ - Safe Implementation
class LanLink {
    constructor() {
        this.version = '1.0';
        this.storagePrefix = 'lanlink-';
        this.transferTimeout = 5 * 60 * 1000; // 5 minutes
    }

    // Initialize LanLink - call this from CountifyApp
    init(app) {
        this.app = app;
        console.log('LanLink initialized');
    }

    // Transfer content to LanWord
    transferToLanWord(content, title) {
        if (!content || !content.trim()) {
            this.app.showAlert('No Content', 'Please add some text before editing in LanWord.');
            return false;
        }

        // Generate unique share ID
        const shareId = this.generateShareId();
        
        // Create transfer payload
        const payload = {
            id: shareId,
            origin: 'countify+',
            content: content,
            title: title || 'Untitled',
            timestamp: new Date().toISOString(),
            signature: this.generateSignature(content),
            version: this.version
        };

        // Store in localStorage
        const storageKey = this.storagePrefix + shareId;
        try {
            localStorage.setItem(storageKey, JSON.stringify(payload));
            
            // Set cleanup timer
            setTimeout(function() {
                localStorage.removeItem(storageKey);
            }, this.transferTimeout);

            // Show processing
            this.showProcessing();

            // Open LanWord
            setTimeout(() => {
                const lanwordUrl = 'https://lanword.landecs.org/new?share=' + shareId;
                window.open(lanwordUrl, '_blank');
                this.trackTransfer('sent', shareId);
            }, 1500);

            return true;
        } catch (error) {
            console.error('LanLink transfer failed:', error);
            this.app.showAlert('Transfer Error', 'Could not transfer content to LanWord.');
            return false;
        }
    }

    // Generate unique share ID
    generateShareId() {
        return 'lanlink-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }

    // Generate content signature
    generateSignature(content) {
        let hash = 0;
        if (!content) return hash.toString(36);
        
        for (let i = 0; i < content.length; i++) {
            const char = content.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    }

    // Show processing overlay
    showProcessing() {
        const overlay = document.createElement('div');
        overlay.className = 'lanlink-processing-overlay';
        overlay.innerHTML = this.getProcessingHTML();
        document.body.appendChild(overlay);

        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 2000);
    }

    // Get processing HTML
    getProcessingHTML() {
        return `
            <div class="lanlink-processing-content glass">
                <div class="processing-animation">
                    <span class="material-icons">sync</span>
                </div>
                <h3>Processing...</h3>
                <p>Preparing to open in LanWord</p>
            </div>
        `;
    }

    // Track transfer (for analytics)
    trackTransfer(type, shareId) {
        console.log('LanLink ' + type + ': ' + shareId);
    }

    // Check if LanLink is available
    isAvailable() {
        return typeof Storage !== 'undefined' && !!localStorage;
    }

    // Get transfer status
    getStatus() {
        return {
            available: this.isAvailable(),
            version: this.version
        };
    }
}

// Global LanLink instance
const lanLink = new LanLink();

// CSS for LanLink (dynamically inject if needed)
const lanLinkStyles = `
.lanlink-processing-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
}

.lanlink-processing-content {
    text-align: center;
    padding: 2rem;
    border-radius: 12px;
    max-width: 300px;
    background: var(--background);
    border: 1px solid var(--border);
}

.processing-animation {
    animation: lanlink-spin 1.5s linear infinite;
    margin-bottom: 1rem;
}

.processing-animation .material-icons {
    font-size: 3rem;
    color: var(--primary);
}

@keyframes lanlink-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.more-options-item[data-action="editInLanWord"] {
    background: linear-gradient(145deg, var(--primary-400), var(--primary-600)) !important;
    color: white !important;
    font-weight: 600 !important;
    border: none !important;
}

.more-options-item[data-action="editInLanWord"]:hover {
    background: linear-gradient(145deg, var(--primary-500), var(--primary-700)) !important;
    transform: translateY(-1px);
}
`;

// Inject styles if not already present
if (!document.querySelector('#lanlink-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'lanlink-styles';
    styleSheet.textContent = lanLinkStyles;
    document.head.appendChild(styleSheet);
}