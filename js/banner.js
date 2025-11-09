document.addEventListener('DOMContentLoaded', function() {
    const dismissed = localStorage.getItem('banner-v2.0.29-dismissed');
    if (dismissed) return; // Don't show if already dismissed

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'banner-overlay';
    document.body.appendChild(overlay);

    // Create banner container
    const banner = document.createElement('div');
    banner.className = 'banner-container banner';
    banner.innerHTML = `
        <div class="banner-content">
            <div class="banner-icon">
                <i class="mdui-icon material-icons" style="font-size: 15vw;">new_releases</i>
            </div>
            <div class="banner-text">
                <h3>NEW RELEASE: v2.0.29</h3>
                <p>
                    We’re excited to introduce <strong>v2.0.29</strong>, released on <strong>November 8, 2025, 2:20 PM Philippines</strong>. This update includes a refreshed UI/UX and new features. Some features are still in beta, so you might encounter minor issues or unexpected behavior. Your feedback is welcome as we continue refining the platform.
                </p>
            </div>
            <div class="banner-actions">
                <button class="btn-primary">I Understand</button>
                <a href="learn.html" class="btn-secondary">Learn More</a>
            </div>
            <button class="close-btn" aria-label="Close banner">
                <i class="mdui-icon material-icons">close</i>
            </button>
        </div>
    `;
    document.body.appendChild(banner);

    // Show overlay
    overlay.style.display = 'block';

    // Banner dismiss function
    function dismissBanner() {
        localStorage.setItem('banner-v2.0.29-dismissed', 'true');
        banner.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            banner.remove();
            overlay.remove();
        }, 300);
    }

    // Add event listeners for dismissal
    banner.querySelector('.btn-primary').addEventListener('click', dismissBanner);
    banner.querySelector('.close-btn').addEventListener('click', dismissBanner);

    // ===== Styles =====
    const style = document.createElement('style');
    style.innerHTML = `
        .banner-container {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 900px;
            background: var(--surface, #fff);
            border: 1px solid var(--border, #ddd);
            border-radius: 40px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            z-index: 1000;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            opacity: 0.95;
            transition: all 0.3s ease;
            overflow: hidden;
            animation: slideUp 0.3s ease-out forwards;
        }
        .banner-container:hover {
            opacity: 1;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3), 0 0 0 2px #BF2EFF;
        }
        .banner-content {
            display: flex;
            align-items: flex-start;
            padding: 20px;
            gap: 16px;
            position: relative;
        }
        .banner-icon {
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #BF2EFF;
            font-size: 8rem;
            animation: iconPulse 2s infinite alternate;
        }
        @keyframes iconPulse {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
            100% { transform: scale(1) rotate(-5deg); }
        }
        .banner-text { flex: 1; }
        .banner-text h3 {
            margin: 0 0 8px 0;
            font-size: 22px;
            font-weight: 600;
            color: #333;
        }
        .banner-text p {
            margin: 0;
            font-size: 15px;
            line-height: 1.5;
            color: #555;
        }
        .banner-text strong { color: #BF2EFF; }
        .banner-actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex-shrink: 0;
        }
        .btn-primary, .btn-secondary {
            padding: 10px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            text-align: center;
            white-space: nowrap;
        }
        .btn-primary {
            background: #BF2EFF;
            color: white;
            border: none;
        }
        .btn-primary:hover { background: #BF2EFF; transform: translateY(-1px); }
        .btn-secondary {
            background: transparent;
            color: #BF2EFF;
            border: 1px solid #64B5F6;
        }
        .btn-secondary:hover { background: #E3F2FD; transform: translateY(-1px); }
        .close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            background: transparent;
            border: none;
            color: #999;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
        .close-btn:hover { background: #f0f0f0; color: #333; }
        @media (max-width: 768px) {
            .banner-content { flex-direction: column; align-items: stretch; gap: 12px; }
            .banner-actions { flex-direction: row; justify-content: flex-end; }
            .banner-container { width: 95%; bottom: 10px; }
            .banner-icon { font-size: 6rem; width: 60px; height: 60px; }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 0.95; transform: translate(-50%, 0); }
        }
        .banner-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 999;
            display: block;
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});