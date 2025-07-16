        // Main App Class
        class CountifyApp {
            constructor() {
                this.state = {
                    activities: [],
                    currentActivityId: null,
                    isEditing: false,
                    pendingAction: null,
                    activeView: 'dashboard',
                    searchQuery: '',
                    selectedFolder: 'all',
                    theme: 'system',
                    font: 'Poppins',
                    textSize: 'normal',
                    encryptionEnabled: true,
                    encryptionKey: null,
                    isSearching: false,
                    showSearchResults: false,
                    wattConsent: localStorage.getItem('watt-consent') === 'true',
                    wattAsked: localStorage.getItem('watt-asked') === 'true'
                };

                this.views = ['dashboard', 'yesterday', 'deleted', 'archived'];
                this.tutorialActivities = [{
                        id: 'tutorial-1',
                        title: 'Welcome to Countify - Your Writing Companion',
                        content: 'Countify is your writing productivity tool, designed to help you track, manage, and analyze your writing activities with ease and accuracy.\n\nKEY FEATURES:\n1. Word Count Tracking: Monitor your writing progress in real-time as you type.\n2. Activity Organization: Efficiently categorize and manage your different writing projects.\n3. Historical Analysis: Review your writing habits and patterns over time.\n4. Secure Storage: Optionally encrypt your content for added privacy and security.\n\nGETTING STARTED:\n- Tap the "+" button to create your first writing activity.\n- Assign a clear and descriptive title to each activity.\n- Your word count updates automatically as you write.\n- Save your work regularly to avoid losing any progress.\n\nBEST PRACTICES:\n• Create separate activities for different writing projects.\n• Use the archive feature for storing completed works.\n• Check your dashboard regularly to track your writing habits and productivity.\n• Customize your experience through the available settings.\n\nCountify is built to be simple, clean, and powerful. Its distraction-free interface helps you stay focused on your content while the system handles the tracking, organization, and progress monitoring for you.\n\nReady to get started? Create your first activity now!',
                        wordCount: 178,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        deleted: false,
                        archived: false,
                        encrypted: false,
                        isTutorial: false
                    },
                    {
                        id: 'tutorial-2',
                        title: 'Mastering the Editor',
                        content: 'The editor is your primary creative workspace for writing, organizing, and managing your activities. Here are important features and guidelines to help you use it effectively:\n\n1. Real-time Writing:\nAs you type in the content area, your word count updates instantly, allowing you to track your progress in real time.\n\n2. Title Importance:\nAlways name your documents clearly. This makes it easier to identify, organize, and search for them later, especially when handling multiple files.\n\n3. Save Frequently:\nClick the Save button or press Ctrl+S regularly. Any unsaved changes will be lost if you close the editor or navigate away from the page.\n\n4. Danger Zones:\n- Delete: Permanently removes a document. Always check your trash or archive before deleting important files.\n- Clear Text: Instantly erases all content from the editor with no option to undo.\n- Voice Input: This feature requires microphone permission from your device or browser.\n\n5. Safety Features:\n- The Back button safely returns you to your dashboard.\n- The word count feature helps you monitor your writing progress.\n- Red buttons indicate destructive actions like delete and clear.\n- Green buttons indicate safe actions such as voice input.\n\n6. Best Practices:\n- Draft long content in a separate application first to prevent accidental loss.\n- Use descriptive and consistent titles for easier searching.\n- Archive documents when possible instead of deleting them, so you can recover them later if needed.',
                        wordCount: 145,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                        deleted: false,
                        archived: false,
                        encrypted: false,
                        isTutorial: false
                    }
                ];

                this.init();
            }

            async init() {
                // Initialize the app
                this.renderAppShell();
                this.setupEventListeners();

                // Load settings
                await this.loadSettings();

                // Load activities
                await this.loadActivities();

                // Add tutorial activities if they don't exist
                this.ensureTutorialActivities();

                // Render initial view
                this.renderView();

                // Check for system theme changes
                this.watchSystemTheme();

                // Add ripple effect to buttons
                this.setupRippleEffects();

                // Check if we need to show WATT banner
                if (!this.state.wattAsked) {
                    setTimeout(() => this.showWATTBanner(), 2000);
                }

                // Register service worker for PWA
                this.registerServiceWorker();
            }

            registerServiceWorker() {
                if ('serviceWorker' in navigator) {
                    window.addEventListener('load', () => {
                        navigator.serviceWorker.register('/sw.js').then(registration => {
                            console.log('ServiceWorker registration successful');
                        }).catch(err => {
                            console.log('ServiceWorker registration failed: ', err);
                        });
                    });
                }
            }

            ensureTutorialActivities() {
                const hasTutorial1 = this.state.activities.some(a => a.id === 'tutorial-1');
                const hasTutorial2 = this.state.activities.some(a => a.id === 'tutorial-2');

                if (!hasTutorial1) {
                    this.state.activities.unshift(this.tutorialActivities[0]);
                }

                if (!hasTutorial2) {
                    this.state.activities.unshift(this.tutorialActivities[1]);
                }
            }

            renderAppShell() {
                // Render the basic app structure
                document.querySelector('.app').innerHTML = `
                    <!-- Header -->
                    <header class="header">
                        <button id="drawerToggle" class="btn-icon" aria-label="Open menu" style="border: none;">
                            <span class="material-icons">menu</span>
                        </button>
                        <h1 class="header-title">
                            Countify+
                        </h1>
                        <div class="header-actions">
                            <button id="newActivityBtn" class="btn btn-primary">
                                <span class="material-icons">add</span>
                                <span class="desktop-only">New</span>
                            </button>
                        </div>
                    </header>

                    <div class="layout-container">
                        <div id="drawerOverlay" class="drawer-overlay"></div>
                        <aside id="drawer" class="drawer">
                            ${this.renderDrawerContent()}
                        </aside>
                        <main class="main-content" id="mainContent">
                        </main>
                    </div>

                    <div id="editorContainer" class="editor-container">
                        ${this.renderEditorContent()}
                    </div>
                    <div id="confirmModal" class="modal">
                        ${this.renderModal('confirm')}
                    </div>

                    <div id="alertModal" class="modal">
                        ${this.renderModal('alert')}
                    </div>
                    <div id="contextMenu" class="context-menu">
                    </div>
                    <button id="fab" class="fab" aria-label="Create new activity" style="border: none;">
                        <span class="material-icons">add</span>
                    </button>

                    <div id="wattBanner" class="watt-banner">
                        <div class="watt-content">
<div class="watt-title">Privacy & Tracking</div>  
<div class="watt-description">
  Countify+ processes your writing and voice locally on your device to provide real-time calculations and analysis.  
  No data is ever sent to external servers — we do not collect or store any personal information.  
  <a href="/privacy" class="learn-more" style="color: #0081FF; text-decoration: none;">Learn more</a>
</div>
                        </div>
                        <div class="watt-actions">
                            <button id="wattDecline" class="btn btn-outline">Decline</button>
                            <button id="wattAccept" class="btn btn-primary">Accept</button>
                        </div>
                    </div>
                `;
            }

            renderDrawerContent() {
                return `
                    <div class="drawer-header">
                        <h2 class="drawer-title">Countify+</h2>
                        <button id="drawerClose" class="drawer-close" aria-label="Close menu">
                            <span class="material-icons">close</span>
                        </button>
                    </div>

                    <div class="drawer-search" style="position: relative;">
                        <div class="drawer-item">
                            <span class="material-icons drawer-item-icon">search</span>
                            <input type="text" placeholder="Search activities..." 
                                   style="border: none; background: none; width: 100%; color: var(--text-primary);" 
                                   id="searchInput" aria-label="Search activities">
                        </div>
                        <div id="drawerSearchResults" class="drawer-search-results">
                        </div>
                    </div>

                    <div class="drawer-section">
                        <div class="drawer-section-title">VIEWS</div>
                        <div class="drawer-item ${this.state.activeView === 'dashboard' ? 'active' : ''}" id="dashboardView">
                            <span class="material-icons drawer-item-icon">dashboard</span>
                            Dashboard
                        </div>
                        <div class="drawer-item ${this.state.activeView === 'today' ? 'active' : ''}" id="todaysActivities">
                            <span class="material-icons drawer-item-icon">today</span>
                            Today's Activities
                        </div>
                        <div class="drawer-item ${this.state.activeView === 'yesterday' ? 'active' : ''}" id="yesterdaysActivities">
                            <span class="material-icons drawer-item-icon">event</span>
                            Yesterday's Activities
                        </div>
                    </div>

                    <div class="drawer-section">
                        <div class="drawer-section-title">MANAGE</div>
                        <div class="drawer-item ${this.state.activeView === 'deleted' ? 'active' : ''}" id="deletedActivities">
                            <span class="material-icons drawer-item-icon">delete</span>
                            Deleted Activities
                        </div>
                        <div class="drawer-item ${this.state.activeView === 'archived' ? 'active' : ''}" id="archivedActivities">
                            <span class="material-icons drawer-item-icon">archive</span>
                            Archived Activities
                        </div>
                    </div>

                    <div class="drawer-section">
                        <div class="drawer-section-title">SETTINGS</div>
                        <div class="drawer-item" id="fontSelector">
                            <span class="material-icons drawer-item-icon">font_download</span>
                            App Font
                            <select id="fontSelect" style="margin-left: auto; border: none; background: none; color: var(--text-primary);" aria-label="Select font">
                                <option value="Poppins" ${this.state.font === 'Poppins' ? 'selected' : ''}>Poppins</option>
                                <option value="Arial" ${this.state.font === 'Arial' ? 'selected' : ''}>Arial</option>
                                <option value="Helvetica" ${this.state.font === 'Helvetica' ? 'selected' : ''}>Helvetica</option>
                                <option value="Georgia" ${this.state.font === 'Georgia' ? 'selected' : ''}>Georgia</option>
                            </select>
                        </div>
                        <div class="drawer-item" id="encryptionToggle" >
                            <span class="material-icons drawer-item-icon">lock</span>
                            Data Encryption
                            <label class="switch" style="margin-left: auto;">
                                <input type="checkbox" id="encryptionCheckbox" ${this.state.encryptionEnabled ? 'checked' : ''} aria-label="Toggle encryption" disabled>
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="drawer-item" id="themeToggle">
                            <span class="material-icons drawer-item-icon">palette</span>
                            App Theme
                            <select id="themeSelect" style="margin-left: auto; border: none; background: none; color: var(--text-primary);" aria-label="Select theme">
                                <option value="light" ${this.state.theme === 'light' ? 'selected' : ''}>Light</option>
                                <option value="dark" ${this.state.theme === 'dark' ? 'selected' : ''}>Dark</option>
                                <option value="system" ${this.state.theme === 'system' ? 'selected' : ''}>System</option>
                            </select>
                        </div>
                    </div>

<div class="drawer-section" style="text-decoration: none;">
    <div class="drawer-section-title">ABOUT</div>

    <a style="text-decoration: none; color: var(--text-secondary);" class="drawer-item" href="https://yourdomain.com/help" target="_blank" rel="noopener noreferrer">
        <span class="material-icons drawer-item-icon">error</span>
        Help & Support Center
    </a>

    <a style="text-decoration: none; color: var(--text-secondary); " class="drawer-item" href="https://yourdomain.com/privacy" target="_blank" rel="noopener noreferrer">
        <span class="material-icons drawer-item-icon">lock</span>
        Privacy Policy
    </a>

    <a style="text-decoration: none; color: var(--text-secondary);" class="drawer-item" href="https://yourdomain.com/terms" target="_blank" rel="noopener noreferrer">
        <span class="material-icons drawer-item-icon">description</span>
        Terms of Service
    </a>

    <div class="drawer-item">
        <span class="material-icons drawer-item-icon">info</span>
        Version 2.0.1.25
    </div>
</div>
                `;
            }

            renderEditorContent() {
                return `
                    <div class="editor-header">
                        <div class="editor-header-left">
                            <button id="editorBack" class="editor-back-btn" style="border: 2px solid #919191; border-radius: 20px;">
                                <span class="material-icons">arrow_back</span>
                                Back
                            </button>
                        </div>

                        <div class="editor-header-right">
                            <div class="editor-actions">
                                <button id="editorSave" class="btn btn-primary" aria-label="Save activity" style="border-radius: 20px;">
                                    <span class="material-icons">save</span>
                                    <span class="desktop-only">Save</span>
                                </button>
                                <button id="editorDelete" class="btn btn-icon" aria-label="Delete activity" 
                                        style="background-color: rgba(255, 46, 69, 0.1); 
                                               border: 1px solid #FF8B8B; 
                                               color: #FF2E45;">
                                    <span class="material-icons">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="editor-header-center" style="margin: 20px;">
                        <input type="text" id="editorTitle" class="editor-title" placeholder="Untitled" aria-label="Activity title" style="margin: 10px;">
                    </div>
                    <div class="editor-content-container">
                        <div class="editor-analytics glass">
                            <div class="analytics-item">
                                <div class="analytics-value" id="wordCount">0</div>
                                <div class="analytics-label">Words</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="charCount">0</div>
                                <div class="analytics-label">Characters</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="charNoSpacesCount">0</div>
                                <div class="analytics-label">Chars (no spaces)</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="sentenceCount">0</div>
                                <div class="analytics-label">Sentences</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="paragraphCount">0</div>
                                <div class="analytics-label">Paragraphs</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="readingTime">0</div>
                                <div class="analytics-label">Reading Time</div>
                            </div>
                            <div class="analytics-item">
                                <div class="analytics-value" id="speakingTime">0</div>
                                <div class="analytics-label">Speaking Time</div>
                            </div>
                        </div>
                        <textarea id="editorContent" class="editor-content glass" placeholder="Start typing here..." aria-label="Activity content"></textarea>
                    </div>

                    <div class="editor-footer">
                        <button id="voiceInputBtn" class="btn btn-icon" title="Voice input" aria-label="Voice input" 
                                style="background-color: rgba(76, 175, 80, 0.2); border: 1px solid rgba(76, 175, 80, 0.3);">
                            <span class="material-icons">mic</span>
                        </button>
<p style="margin: 40px; font-size: 12px; text-align: center; .editor-footer  color: #e53935;">Some results are predictive and for reference only. <a href="/disclaimer" class="learn-more" style="text-decoration: none; font-weight: bold; color: #0081FF;">Learn more</a></p>
                        <button id="clearEditorBtn" class="btn btn-icon" title="Clear text" aria-label="Clear text"
                                style="background-color: rgba(244, 67, 54, 0.2); border: 1px solid rgba(244, 67, 54, 0.3);">
                            <span class="material-icons">clear</span>
                        </button>
<style>

.editor-footer .btn {
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
</style>
                    </div>
                `;
            }

            renderModal(type) {
                if (type === 'confirm') {
                    return `
                        <div class="modal-content glass">
                            <h3 class="modal-title" id="confirmModalTitle">Confirm Action</h3>
                            <p class="modal-message" id="confirmModalMessage">Are you sure you want to perform this action?</p>
                            <div class="modal-actions">
                                <button id="confirmModalCancel" class="btn btn-outline">Cancel</button>
                                <button id="confirmModalConfirm" class="btn btn-primary">Confirm</button>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="modal-content glass">
                            <h3 class="modal-title" id="alertModalTitle">Alert</h3>
                            <p class="modal-message" id="alertModalMessage">This is an alert message.</p>
                            <div class="modal-actions">
                                <button id="alertModalOk" class="btn btn-primary">OK</button>
                            </div>
                        </div>
                    `;
                }
            }

            renderView() {
                const mainContent = document.getElementById('mainContent');

                if (this.state.isSearching) {
                    mainContent.innerHTML = this.renderSearchResults();
                    return;
                }

                switch (this.state.activeView) {
                    case 'dashboard':
                        mainContent.innerHTML = this.renderDashboard();
                        break;
                    case 'today':
                        mainContent.innerHTML = this.renderActivitiesView('today');
                        break;
                    case 'yesterday':
                        mainContent.innerHTML = this.renderActivitiesView('yesterday');
                        break;
                    case 'deleted':
                        mainContent.innerHTML = this.renderActivitiesView('deleted');
                        break;
                    case 'archived':
                        mainContent.innerHTML = this.renderActivitiesView('archived');
                        break;
                    default:
                        mainContent.innerHTML = this.renderDashboard();
                }
            }

            renderDashboard() {
                const filteredActivities = this.filterActivities();
                const activitiesToShow = filteredActivities.slice(0, 5); // Show only 5 most recent

                if (activitiesToShow.length === 0) {
                    return `
                        <h2 class="page-title">Dashboard</h2>
                        <div class="empty-state">
                            <div class="empty-state-icon">
                                <span class="material-icons" style="font-size: 4rem;">calculate</span>
                            </div>
                            <h3 class="empty-state-title">No Activities Yet</h3>
                            <p class="empty-state-description">Click the "+" button to create your first word count activity.</p>
                            <button id="createFirstActivity" class="btn btn-primary">
                                <span class="material-icons">add</span>
                                Create Activity
                            </button>
                        </div>
                    `;
                }

                let cardsHTML = '';
                activitiesToShow.forEach((activity, index) => {
                    const previewText = activity.content.length > 100 ?
                        activity.content.substring(0, 100) + '...' :
                        activity.content;

                    const cardColorClass = `card-color-${(index % 5) + 1}`;
                    const animationDelay = `delay-${index * 100}`;

                    cardsHTML += `
                        <div class="activity-card glass ${cardColorClass} animate-slide ${animationDelay}" data-id="${activity.id}" tabindex="0" aria-label="${activity.title}, ${this.countWords(activity.content)} words, last updated ${this.formatDate(activity.updatedAt)}">
                            <div>
                                <h3 class="activity-card-title">${activity.title}</h3>
                                <p class="activity-card-preview">${previewText}</p>
                            </div>
                            <div class="activity-card-meta">
                                <span>${this.formatDate(activity.updatedAt)}</span>
                                <span class="activity-card-wordcount">${this.countWords(activity.content)} words</span>
                            </div>
                        </div>
                    `;
                });

                return `
                    <h2 class="page-title">Dashboard</h2>
                    <div class="dashboard-grid">
                        ${cardsHTML}
                    </div>
                `;
            }

            renderActivitiesView(viewType) {
                let title = '';
                let activities = [];

                switch (viewType) {
                    case 'today':
                        title = "Today's Activities";
                        activities = this.getTodaysActivities();
                        break;
                    case 'yesterday':
                        title = "Yesterday's Activities";
                        activities = this.getYesterdaysActivities();
                        break;
                    case 'deleted':
                        title = "Deleted Activities";
                        activities = this.state.activities.filter(a => a.deleted);
                        break;
                    case 'archived':
                        title = "Archived Activities";
                        activities = this.state.activities.filter(a => a.archived);
                        break;
                }

                if (activities.length === 0) {
                    let message = '';
                    let icon = 'info';

                    if (viewType === 'today') {
                        message = "You haven't created any activities today.";
                        icon = "today";
                    } else if (viewType === 'yesterday') {
                        message = "You didn't create any activities yesterday.";
                        icon = "event";
                    } else if (viewType === 'deleted') {
                        message = "Your deleted activities will appear here.";
                        icon = "delete";
                    } else if (viewType === 'archived') {
                        message = "Your archived activities will appear here.";
                        icon = "archive";
                    }

                    return `
                        <h2 class="page-title">${title}</h2>
                        <div class="empty-state">
                            <div class="empty-state-icon">
                                <span class="material-icons" style="font-size: 4rem;">${icon}</span>
                            </div>
                            <h3 class="empty-state-title">No Activities Found</h3>
                            <p class="empty-state-description">${message}</p>
                            ${viewType === 'today' ? `
                                <button id="createTodayActivity" class="btn btn-primary">
                                    <span class="material-icons">add</span>
                                    Create Activity
                                </button>
                            ` : ''}
                        </div>
                    `;
                }

                let cardsHTML = '';
                activities.forEach((activity, index) => {
                    const previewText = activity.content.length > 100 ?
                        activity.content.substring(0, 100) + '...' :
                        activity.content;

                    const cardColorClass = `card-color-${(index % 5) + 1}`;
                    const animationDelay = `delay-${index * 100}`;

                    cardsHTML += `
                        <div class="activity-card glass ${cardColorClass} animate-slide ${animationDelay}" data-id="${activity.id}" tabindex="0" aria-label="${activity.title}, ${this.countWords(activity.content)} words, last updated ${this.formatDate(activity.updatedAt)}">
                            <div>
                                <h3 class="activity-card-title">${activity.title}</h3>
                                <p class="activity-card-preview">${previewText}</p>
                            </div>
                            <div class="activity-card-meta">
                                <span>${this.formatDate(activity.updatedAt)}</span>
                                <span class="activity-card-wordcount">${this.countWords(activity.content)} words</span>
                            </div>
                        </div>
                    `;
                });

                return `
                    <h2 class="page-title">${title}</h2>
                    <div class="dashboard-grid">
                        ${cardsHTML}
                    </div>
                `;
            }

            renderSearchResults() {
                const filteredActivities = this.filterActivities();

                if (filteredActivities.length === 0) {
                    return `
                        <div class="search-results-header">
                            <h2 class="page-title">Search Results</h2>
                        </div>
                        <div class="empty-state">
                            <div class="empty-state-icon">
                                <span class="material-icons">search_off</span>
                            </div>
                            <h3 class="empty-state-title">No Results Found</h3>
                            <p class="empty-state-description">No activities match your search for "${this.state.searchQuery}"</p>
                        </div>
                    `;
                }

                let cardsHTML = '';
                filteredActivities.forEach((activity, index) => {
                    const previewText = activity.content.length > 100 ?
                        activity.content.substring(0, 100) + '...' :
                        activity.content;

                    const cardColorClass = `card-color-${(index % 5) + 1}`;
                    const animationDelay = `delay-${index * 100}`;

                    cardsHTML += `
                        <div class="activity-card glass ${cardColorClass} animate-slide ${animationDelay}" data-id="${activity.id}" tabindex="0" aria-label="${activity.title}, ${this.countWords(activity.content)} words, last updated ${this.formatDate(activity.updatedAt)}">
                            <div>
                                <h3 class="activity-card-title">${activity.title}</h3>
                                <p class="activity-card-preview">${previewText}</p>
                            </div>
                            <div class="activity-card-meta">
                                <span>${this.formatDate(activity.updatedAt)}</span>
                                <span class="activity-card-wordcount">${this.countWords(activity.content)} words</span>
                            </div>
                        </div>
                    `;
                });

                return `
                    <div class="search-results-header">
                        <h2 class="page-title">Search Results</h2>
                        <div class="search-results-count">${filteredActivities.length} results for <span class="search-query">"${this.state.searchQuery}"</span></div>
                    </div>
                    <div class="dashboard-grid">
                        ${cardsHTML}
                    </div>
                `;
            }

            renderSearchResultsInDrawer() {
                const filteredActivities = this.filterActivities();
                const resultsContainer = document.getElementById('drawerSearchResults');

                if (filteredActivities.length === 0) {
                    resultsContainer.innerHTML = `
                        <div class="drawer-search-result-item">
                            No results found for "${this.state.searchQuery}"
                        </div>
                    `;
                    resultsContainer.classList.add('show');
                    return;
                }

                let resultsHTML = '';
                filteredActivities.slice(0, 5).forEach(activity => {
                    const previewText = activity.content.length > 50 ?
                        activity.content.substring(0, 50) + '...' :
                        activity.content;

                    resultsHTML += `
                        <div class="drawer-search-result-item" data-id="${activity.id}">
                            <div class="drawer-search-result-title">${activity.title}</div>
                            <div class="drawer-search-result-preview">${previewText}</div>
                        </div>
                    `;
                });

                resultsContainer.innerHTML = resultsHTML;
                resultsContainer.classList.add('show');

                // Add click handlers to search result items
                resultsContainer.querySelectorAll('.drawer-search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        this.openEditor(item.dataset.id);
                        this.toggleDrawer();
                        resultsContainer.classList.remove('show');
                        document.getElementById('searchInput').value = '';
                        this.state.searchQuery = '';
                    });
                });
            }

            setupEventListeners() {
                // Drawer toggle
                document.getElementById('drawerToggle').addEventListener('click', () => this.toggleDrawer());
                document.getElementById('drawerClose').addEventListener('click', () => this.toggleDrawer());
                document.getElementById('drawerOverlay').addEventListener('click', () => this.toggleDrawer());

                // Navigation items
                document.getElementById('dashboardView').addEventListener('click', () => {
                    this.state.activeView = 'dashboard';
                    this.state.isSearching = false;
                    this.renderView();
                    this.toggleDrawer();
                });

                document.getElementById('todaysActivities').addEventListener('click', () => {
                    this.state.activeView = 'today';
                    this.state.isSearching = false;
                    this.renderView();
                    this.toggleDrawer();
                });

                document.getElementById('yesterdaysActivities').addEventListener('click', () => {
                    this.state.activeView = 'yesterday';
                    this.state.isSearching = false;
                    this.renderView();
                    this.toggleDrawer();
                });

                document.getElementById('deletedActivities').addEventListener('click', () => {
                    this.state.activeView = 'deleted';
                    this.state.isSearching = false;
                    this.renderView();
                    this.toggleDrawer();
                });

                document.getElementById('archivedActivities').addEventListener('click', () => {
                    this.state.activeView = 'archived';
                    this.state.isSearching = false;
                    this.renderView();
                    this.toggleDrawer();
                });

                // New activity
                document.getElementById('newActivityBtn').addEventListener('click', () => this.openEditor());
                document.getElementById('fab').addEventListener('click', () => this.openEditor());

                // Search input
                const searchInput = document.getElementById('searchInput');
                searchInput.addEventListener('input', (e) => {
                    this.state.searchQuery = e.target.value.toLowerCase();
                    this.state.isSearching = this.state.searchQuery.length > 0;

                    if (this.state.searchQuery.length > 0) {
                        this.renderSearchResultsInDrawer();
                    } else {
                        document.getElementById('drawerSearchResults').classList.remove('show');
                    }
                });

                // Close search results when clicking outside
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.drawer-search') && !e.target.closest('#drawerSearchResults')) {
                        document.getElementById('drawerSearchResults').classList.remove('show');
                    }
                });

                // Editor events
                document.getElementById('editorBack').addEventListener('click', () => {
                    if (document.getElementById('editorContent').value.trim() === '') {
                        // No text detected, just close without asking
                        this.closeEditor();
                    } else {
                        this.closeEditor();
                    }
                });

                document.getElementById('editorSave').addEventListener('click', () => this.saveActivity());
                document.getElementById('editorDelete').addEventListener('click', () => {
                    const activity = this.state.activities.find(a => a.id === this.state.currentActivityId);
                    if (activity && activity.isTutorial) {
                        this.showAlert('Cannot Delete', 'This is a tutorial activity and cannot be deleted.');
                        return;
                    }

                    this.showConfirmModal(
                        'Delete Activity',
                        'Are you sure you want to delete this activity? This action cannot be undone.',
                        () => {
                            this.deleteActivity(this.state.currentActivityId);
                            this.closeEditor();
                        }
                    );
                });

                // Real-time updates for editor content
                const editorContent = document.getElementById('editorContent');
                if (editorContent) {
                    editorContent.addEventListener('input', () => this.updateTextAnalytics());
                    editorContent.addEventListener('paste', () => {
                        // Use setTimeout to ensure pasted content is available
                        setTimeout(() => this.updateTextAnalytics(), 10);
                    });
                }

                document.getElementById('clearEditorBtn').addEventListener('click', () => {
                    this.showConfirmModal(
                        'Clear Text',
                        'Are you sure you want to clear all text? This action cannot be undone.',
                        () => {
                            document.getElementById('editorContent').value = '';
                            this.updateTextAnalytics();
                        }
                    );
                });

                // Voice input
                document.getElementById('voiceInputBtn').addEventListener('click', () => this.requestVoiceInputPermission());

                // Modal events
                document.getElementById('confirmModalCancel').addEventListener('click', () => {
                    document.getElementById('confirmModal').classList.remove('modal-open');
                });

                document.getElementById('confirmModalConfirm').addEventListener('click', () => {
                    if (this.state.pendingAction) {
                        this.state.pendingAction();
                        this.state.pendingAction = null;
                    }
                    document.getElementById('confirmModal').classList.remove('modal-open');
                });

                document.getElementById('alertModalOk').addEventListener('click', () => {
                    document.getElementById('alertModal').classList.remove('modal-open');
                });

                // Settings changes
                document.getElementById('themeSelect').addEventListener('change', (e) => {
                    this.state.theme = e.target.value;
                    this.applyTheme(this.state.theme);
                    this.saveSettings();
                });

                document.getElementById('fontSelect').addEventListener('change', (e) => {
                    this.state.font = e.target.value;
                    this.applyFont(this.state.font);
                    this.saveSettings();
                });

                // Encryption toggle
                document.getElementById('encryptionCheckbox').addEventListener('change', async (e) => {
                    if (e.target.checked) {
                        // Enable encryption
                        const key = await this.promptEncryptionKey(true);
                        if (key) {
                            this.state.encryptionEnabled = true;
                            this.state.encryptionKey = key;
                            await this.saveSettings();
                            await this.encryptAllActivities();
                        } else {
                            e.target.checked = false;
                        }
                    } else {
                        // Disable encryption
                        this.showConfirmModal(
                            'Disable Encryption',
                            'Disabling encryption will decrypt all your activities. Are you sure?',
                            async () => {
                                this.state.encryptionEnabled = false;
                                await this.decryptAllActivities();
                                this.state.encryptionKey = null;
                                await this.saveSettings();
                                this.renderDrawerContent();
                            }
                        );
                    }
                });

                // Empty state buttons
                document.addEventListener('click', (e) => {
                    if (e.target.id === 'createFirstActivity' || e.target.closest('#createFirstActivity')) {
                        this.openEditor();
                    }

                    if (e.target.id === 'createTodayActivity' || e.target.closest('#createTodayActivity')) {
                        this.openEditor();
                    }
                });

                // Activity card clicks
                document.addEventListener('click', (e) => {
                    const activityCard = e.target.closest('.activity-card');
                    if (activityCard) {
                        const activity = this.state.activities.find(a => a.id === activityCard.dataset.id);
                        if (activity && activity.isTutorial) {
                            this.openEditor(activityCard.dataset.id);
                        } else {
                            this.openEditor(activityCard.dataset.id);
                        }
                    }
                });

                // Activity card keyboard navigation
                document.addEventListener('keydown', (e) => {
                    const activityCard = document.activeElement.closest('.activity-card');
                    if (activityCard && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault();
                        this.openEditor(activityCard.dataset.id);
                    }
                });

                // Context menu for activity cards
                document.addEventListener('contextmenu', (e) => {
                    const activityCard = e.target.closest('.activity-card');
                    if (activityCard) {
                        e.preventDefault();
                        const activity = this.state.activities.find(a => a.id === activityCard.dataset.id);
                        if (activity) {
                            this.showActivityOptions(activityCard.dataset.id, e.clientX, e.clientY);
                        }
                    }
                });

                // Close context menu on click outside
                document.addEventListener('click', () => {
                    this.hideContextMenu();
                });

                // WATT banner events
                document.getElementById('wattAccept').addEventListener('click', () => {
                    this.state.wattConsent = true;
                    this.state.wattAsked = true;
                    localStorage.setItem('watt-consent', 'true');
                    localStorage.setItem('watt-asked', 'true');
                    document.getElementById('wattBanner').classList.remove('show');
                });

                document.getElementById('wattDecline').addEventListener('click', () => {
                    this.state.wattConsent = false;
                    this.state.wattAsked = true;
                    localStorage.setItem('watt-consent', 'false');
                    localStorage.setItem('watt-asked', 'true');
                    document.getElementById('wattBanner').classList.remove('show');
                });
            }

            showWATTBanner() {
                if (!this.state.wattAsked) {
                    document.getElementById('wattBanner').classList.add('show');
                }
            }

            setupRippleEffects() {
                document.addEventListener('click', function(e) {
                    const target = e.target.closest('.btn, .btn-icon, .activity-card, .fab');
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
            }

            toggleDrawer() {
                document.getElementById('drawer').classList.toggle('drawer-open');
                document.getElementById('drawerOverlay').classList.toggle('drawer-overlay-visible');

                // Close search results when drawer is toggled
                document.getElementById('drawerSearchResults').classList.remove('show');
            }

            async loadSettings() {
                try {
                    const settings = JSON.parse(localStorage.getItem('countify-settings')) || {};

                    if (settings.theme) {
                        this.state.theme = settings.theme;
                        document.getElementById('themeSelect').value = settings.theme;
                        this.applyTheme(settings.theme);
                    }

                    if (settings.font) {
                        this.state.font = settings.font;
                        document.getElementById('fontSelect').value = settings.font;
                        this.applyFont(settings.font);
                    }

                    if (settings.textSize) {
                        this.state.textSize = settings.textSize;
                        this.applyTextSize(settings.textSize);
                    }

                    if (settings.encryptionEnabled !== undefined) {
                        this.state.encryptionEnabled = settings.encryptionEnabled;
                        document.getElementById('encryptionCheckbox').checked = settings.encryptionEnabled;
                    }

                    if (settings.encryptionKey) {
                        this.state.encryptionKey = settings.encryptionKey;
                    }
                } catch (error) {
                    console.error('Error loading settings:', error);
                }
            }

            async saveSettings() {
                try {
                    const settings = {
                        theme: this.state.theme,
                        font: this.state.font,
                        textSize: this.state.textSize,
                        encryptionEnabled: this.state.encryptionEnabled,
                        encryptionKey: this.state.encryptionKey
                    };

                    localStorage.setItem('countify-settings', JSON.stringify(settings));
                } catch (error) {
                    console.error('Error saving settings:', error);
                }
            }

            async loadActivities() {
                try {
                    let activities = localStorage.getItem('countify-activities');

                    if (activities) {
                        if (this.state.encryptionEnabled && this.state.encryptionKey) {
                            activities = await this.decryptData(activities, this.state.encryptionKey);
                        }

                        this.state.activities = JSON.parse(activities) || [];
                    } else {
                        this.state.activities = [];
                    }
                } catch (error) {
                    console.error('Error loading activities:', error);
                    this.state.activities = [];
                }
            }

            async saveActivities() {
                try {
                    let activities = JSON.stringify(this.state.activities.filter(a => !a.isTutorial)); // Don't save tutorial activities

                    if (this.state.encryptionEnabled && this.state.encryptionKey) {
                        activities = await this.encryptData(activities, this.state.encryptionKey);
                    }

                    localStorage.setItem('countify-activities', activities);
                } catch (error) {
                    console.error('Error saving activities:', error);
                }
            }

            async encryptAllActivities() {
                if (!this.state.encryptionKey) return;

                try {
                    for (const activity of this.state.activities) {
                        if (!activity.encrypted && !activity.isTutorial) { // Don't encrypt tutorial activities
                            activity.content = await this.encryptData(activity.content, this.state.encryptionKey);
                            activity.encrypted = true;
                        }
                    }
                    await this.saveActivities();
                } catch (error) {
                    console.error('Error encrypting activities:', error);
                }
            }

            async decryptAllActivities() {
                if (!this.state.encryptionKey) return;

                try {
                    for (const activity of this.state.activities) {
                        if (activity.encrypted && !activity.isTutorial) { // Don't decrypt tutorial activities
                            activity.content = await this.decryptData(activity.content, this.state.encryptionKey);
                            activity.encrypted = false;
                        }
                    }
                    await this.saveActivities();
                } catch (error) {
                    console.error('Error decrypting activities:', error);
                }
            }

            async encryptData(data, key) {
                // Using Web Crypto API for production-ready encryption
                try {
                    // Generate a random initialization vector
                    const iv = window.crypto.getRandomValues(new Uint8Array(12));

                    // Prepare the key material
                    const keyMaterial = await window.crypto.subtle.importKey(
                        'raw',
                        new TextEncoder().encode(key), {
                            name: 'PBKDF2'
                        },
                        false,
                        ['deriveBits', 'deriveKey']
                    );

                    // Derive the encryption key
                    const encryptionKey = await window.crypto.subtle.deriveKey({
                            name: 'PBKDF2',
                            salt: new TextEncoder().encode('CountifySalt'),
                            iterations: 100000,
                            hash: 'SHA-256'
                        },
                        keyMaterial, {
                            name: 'AES-GCM',
                            length: 256
                        },
                        false,
                        ['encrypt']
                    );

                    // Encrypt the data
                    const encrypted = await window.crypto.subtle.encrypt({
                            name: 'AES-GCM',
                            iv: iv
                        },
                        encryptionKey,
                        new TextEncoder().encode(data)
                    );

                    // Combine IV and encrypted data
                    const combined = new Uint8Array(iv.length + encrypted.byteLength);
                    combined.set(iv);
                    combined.set(new Uint8Array(encrypted), iv.length);

                    // Convert to Base64 for storage
                    return btoa(String.fromCharCode.apply(null, combined));
                } catch (error) {
                    console.error('Encryption failed:', error);
                    throw error;
                }
            }

            async decryptData(data, key) {
                // Using Web Crypto API for production-ready decryption
                try {
                    // Convert from Base64
                    const binaryData = atob(data);
                    const bytes = new Uint8Array(binaryData.length);
                    for (let i = 0; i < binaryData.length; i++) {
                        bytes[i] = binaryData.charCodeAt(i);
                    }

                    // Extract IV and encrypted data
                    const iv = bytes.slice(0, 12);
                    const encrypted = bytes.slice(12);

                    // Prepare the key material
                    const keyMaterial = await window.crypto.subtle.importKey(
                        'raw',
                        new TextEncoder().encode(key), {
                            name: 'PBKDF2'
                        },
                        false,
                        ['deriveBits', 'deriveKey']
                    );

                    // Derive the decryption key
                    const decryptionKey = await window.crypto.subtle.deriveKey({
                            name: 'PBKDF2',
                            salt: new TextEncoder().encode('CountifySalt'),
                            iterations: 100000,
                            hash: 'SHA-256'
                        },
                        keyMaterial, {
                            name: 'AES-GCM',
                            length: 256
                        },
                        false,
                        ['decrypt']
                    );

                    // Decrypt the data
                    const decrypted = await window.crypto.subtle.decrypt({
                            name: 'AES-GCM',
                            iv: iv
                        },
                        decryptionKey,
                        encrypted
                    );

                    // Convert to string
                    return new TextDecoder().decode(decrypted);
                } catch (error) {
                    console.error('Decryption failed:', error);
                    throw error;
                }
            }

            async promptEncryptionKey(isNew = false) {
                return new Promise((resolve) => {
                    const modalContent = `
                        <div class="modal-content glass">
                            <h3 class="modal-title">${isNew ? 'Set Encryption Key' : 'Enter Encryption Key'}</h3>
                            <p class="modal-message">
                                ${isNew ? 'Set a password to encrypt your data:' : 'Enter your encryption password:'}
                            </p>
                            <input type="password" id="encryptionKeyInput" class="editor-title" 
                                   placeholder="Enter password" style="width: 100%; margin-bottom: 1rem;" aria-label="Encryption key">
                            ${isNew ? `
                                <input type="password" id="encryptionKeyConfirm" class="editor-title" 
                                       placeholder="Confirm password" style="width: 100%; margin-bottom: 1rem;" aria-label="Confirm encryption key">
                            ` : ''}
                            <div class="modal-actions">
                                <button id="encryptionKeyCancel" class="btn btn-outline">Cancel</button>
                                <button id="encryptionKeyConfirmBtn" class="btn btn-primary">Confirm</button>
                            </div>
                        </div>
                    `;

                    const tempModal = document.createElement('div');
                    tempModal.className = 'modal modal-open';
                    tempModal.innerHTML = modalContent;
                    document.body.appendChild(tempModal);

                    const confirmBtn = tempModal.querySelector('#encryptionKeyConfirmBtn');
                    const cancelBtn = tempModal.querySelector('#encryptionKeyCancel');
                    const keyInput = tempModal.querySelector('#encryptionKeyInput');
                    const keyConfirm = tempModal.querySelector('#encryptionKeyConfirm');

                    const cleanup = () => {
                        tempModal.classList.remove('modal-open');
                        setTimeout(() => tempModal.remove(), 300);
                    };

                    confirmBtn.addEventListener('click', () => {
                        if (isNew) {
                            if (keyInput.value !== keyConfirm.value) {
                                this.showAlert('Error', 'Passwords do not match');
                                return;
                            }

                            if (keyInput.value.length < 6) {
                                this.showAlert('Error', 'Password must be at least 6 characters');
                                return;
                            }
                        }

                        if (keyInput.value) {
                            resolve(keyInput.value);
                            cleanup();
                        } else {
                            this.showAlert('Error', 'Please enter a password');
                        }
                    });

                    cancelBtn.addEventListener('click', () => {
                        resolve(null);
                        cleanup();
                    });

                    // Focus input
                    setTimeout(() => keyInput.focus(), 100);
                });
            }

            applyTheme(theme) {
                if (theme === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    theme = prefersDark ? 'dark' : 'light';
                }

                document.documentElement.setAttribute('data-theme', theme);
            }

            applyFont(font) {
                if (font !== 'Poppins') {
                    document.body.style.fontFamily = `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`;
                } else {
                    document.body.style.fontFamily = ''; // Reset to default
                }
            }

            applyTextSize(size) {
                document.body.classList.remove('text-small', 'text-normal', 'text-large');
                if (size !== 'normal') {
                    document.body.classList.add(`text-${size}`);
                }

                // Update editor content size
                const editor = document.getElementById('editorContent');
                if (editor) {
                    editor.style.fontSize = size === 'small' ? '0.875rem' :
                        size === 'large' ? '1.125rem' : '1rem';
                }
            }

            watchSystemTheme() {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                mediaQuery.addEventListener('change', (e) => {
                    if (this.state.theme === 'system') {
                        this.applyTheme('system');
                    }
                });
            }

            filterActivities() {
                let filtered = [...this.state.activities].filter(a => !a.deleted && !a.archived);

                if (this.state.searchQuery) {
                    filtered = filtered.filter(activity =>
                        activity.title.toLowerCase().includes(this.state.searchQuery) ||
                        activity.content.toLowerCase().includes(this.state.searchQuery)
                    );
                }

                if (this.state.selectedFolder !== 'all') {
                    filtered = filtered.filter(activity =>
                        activity.folder === this.state.selectedFolder
                    );
                }

                // Sort by updatedAt (newest first)
                return filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            }

            getTodaysActivities() {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                return this.state.activities.filter(activity => {
                    const activityDate = new Date(activity.updatedAt);
                    return activityDate >= today && !activity.deleted && !activity.archived;
                });
            }

            getYesterdaysActivities() {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);

                return this.state.activities.filter(activity => {
                    const activityDate = new Date(activity.updatedAt);
                    return activityDate >= yesterday && activityDate < today && !activity.deleted && !activity.archived;
                });
            }

            formatDate(timestamp) {
                const date = new Date(timestamp);
                const now = new Date();
                const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

                if (diffInDays === 0) {
                    return 'Today';
                } else if (diffInDays === 1) {
                    return 'Yesterday';
                } else if (diffInDays < 7) {
                    return date.toLocaleDateString('en-US', {
                        weekday: 'short'
                    });
                } else {
                    return date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    });
                }
            }

            countWords(text) {
                if (!text || !text.trim()) return 0;
                return text.trim().split(/\s+/).length;
            }

            countCharacters(text, includeSpaces = true) {
                if (!text) return 0;
                return includeSpaces ? text.length : text.replace(/\s+/g, '').length;
            }

            countSentences(text) {
                if (!text || !text.trim()) return 0;
                // Simple sentence count - splits on .!? followed by space or end of string
                const sentences = text.split(/[.!?]+(?=\s|$)/);
                // Filter out empty strings
                return sentences.filter(s => s.trim().length > 0).length;
            }

            countParagraphs(text) {
                if (!text || !text.trim()) return 0;
                // Split on two or more newlines
                const paragraphs = text.split(/\n\s*\n+/);
                return paragraphs.filter(p => p.trim().length > 0).length;
            }

            calculateReadingTime(wordCount) {
                // Average reading speed is about 200 words per minute
                const wordsPerMinute = 200;
                const minutes = wordCount / wordsPerMinute;
                return Math.ceil(minutes) || 0; // At least 1 minute
            }

            calculateSpeakingTime(wordCount) {
                // Average speaking speed is about 150 words per minute
                const wordsPerMinute = 150;
                const minutes = wordCount / wordsPerMinute;
                return Math.ceil(minutes) || 0; // At least 1 minute
            }

            updateTextAnalytics() {
                const text = document.getElementById('editorContent').value;

                // Word count
                const wordCount = this.countWords(text);
                document.getElementById('wordCount').textContent = wordCount;

                // Character counts
                document.getElementById('charCount').textContent = this.countCharacters(text, true);
                document.getElementById('charNoSpacesCount').textContent = this.countCharacters(text, false);

                // Sentence count
                document.getElementById('sentenceCount').textContent = this.countSentences(text);

                // Paragraph count
                document.getElementById('paragraphCount').textContent = this.countParagraphs(text);

                // Reading and speaking time
                document.getElementById('readingTime').textContent =
                    this.calculateReadingTime(wordCount) + (this.calculateReadingTime(wordCount) === 1 ? ' min' : ' mins');
                document.getElementById('speakingTime').textContent =
                    this.calculateSpeakingTime(wordCount) + (this.calculateSpeakingTime(wordCount) === 1 ? ' min' : ' mins');
            }

            async openEditor(activityId = null) {
                if (activityId) {
                    const activity = this.state.activities.find(a => a.id === activityId);
                    if (activity) {
                        this.state.currentActivityId = activity.id;
                        document.getElementById('editorTitle').value = activity.title;

                        // Disable editing for tutorial activities
                        if (activity.isTutorial) {
                            document.getElementById('editorTitle').readOnly = true;
                            document.getElementById('editorContent').readOnly = true;
                        } else {
                            document.getElementById('editorTitle').readOnly = false;
                            document.getElementById('editorContent').readOnly = false;
                        }

                        // Decrypt content if encrypted
                        let content = activity.content;
                        if (activity.encrypted && this.state.encryptionKey) {
                            try {
                                content = await this.decryptData(content, this.state.encryptionKey);
                            } catch (error) {
                                console.error('Decryption failed:', error);
                                this.showAlert('Decryption Error', 'Failed to decrypt activity content. Please check your encryption key.');
                                return;
                            }
                        }

                        document.getElementById('editorContent').value = content;
                        this.updateTextAnalytics();
                        this.state.isEditing = true;
                    }
                } else {
                    this.state.currentActivityId = this.generateId();
                    document.getElementById('editorTitle').value = this.generateDefaultTitle();
                    document.getElementById('editorTitle').readOnly = false;
                    document.getElementById('editorContent').value = '';
                    document.getElementById('editorContent').readOnly = false;
                    this.updateTextAnalytics();
                    this.state.isEditing = false;
                }

                document.getElementById('editorContainer').classList.add('editor-container-open');
                document.getElementById('editorContent').focus();

                // Close drawer if open
                if (document.getElementById('drawer').classList.contains('drawer-open')) {
                    this.toggleDrawer();
                }

                // Hide FAB when editor is open
                document.getElementById('fab').style.display = 'none';
            }

            generateDefaultTitle() {
                const now = new Date();
                const hours = now.getHours();

                if (hours < 12) return 'Morning Activity';
                if (hours < 17) return 'Afternoon Activity';
                return 'Evening Activity';
            }

            closeEditor() {
                document.getElementById('editorContainer').classList.remove('editor-container-open');
                this.state.currentActivityId = null;
                this.renderView();

                // Show FAB when editor is closed
                document.getElementById('fab').style.display = 'flex';
            }

            async saveActivity() {
                const title = document.getElementById('editorTitle').value.trim() || this.generateDefaultTitle();
                let content = document.getElementById('editorContent').value.trim();
                const wordCount = this.countWords(content);
                const now = new Date().toISOString();

                // Check if this is a tutorial activity
                const activity = this.state.activities.find(a => a.id === this.state.currentActivityId);
                if (activity && activity.isTutorial) {
                    this.showAlert('Cannot Save', 'This is a tutorial activity and cannot be modified.');
                    return;
                }

                // Encrypt content if encryption is enabled
                let encrypted = false;
                if (this.state.encryptionEnabled && this.state.encryptionKey) {
                    try {
                        content = await this.encryptData(content, this.state.encryptionKey);
                        encrypted = true;
                    } catch (error) {
                        console.error('Encryption failed:', error);
                        this.showAlert('Encryption Error', 'Failed to encrypt activity content. Please check your encryption key.');
                        return;
                    }
                }

                if (this.state.isEditing) {
                    // Update existing activity
                    this.state.activities = this.state.activities.map(activity => {
                        if (activity.id === this.state.currentActivityId) {
                            return {
                                ...activity,
                                title,
                                content,
                                wordCount,
                                updatedAt: now,
                                encrypted
                            };
                        }
                        return activity;
                    });
                } else {
                    // Create new activity
                    this.state.activities.unshift({
                        id: this.state.currentActivityId,
                        title,
                        content,
                        wordCount,
                        createdAt: now,
                        updatedAt: now,
                        deleted: false,
                        archived: false,
                        encrypted
                    });
                }

                await this.saveActivities();
                this.closeEditor();
            }

            async deleteActivity(activityId) {
                const activity = this.state.activities.find(a => a.id === activityId);
                if (activity && activity.isTutorial) {
                    this.showAlert('Cannot Delete', 'This is a tutorial activity and cannot be deleted.');
                    return;
                }

                this.state.activities = this.state.activities.filter(activity => activity.id !== activityId);
                await this.saveActivities();
                this.renderView();
            }

            async requestVoiceInputPermission() {
                try {
                    // Request microphone permission
                    await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });
                    this.toggleVoiceInput();
                } catch (error) {
                    console.error('Microphone permission denied:', error);
                    this.showAlert('Permission Required', 'Microphone access is required for voice input. Please enable microphone permissions in your browser settings.');
                }
            }

            toggleVoiceInput() {
                if (!('webkitSpeechRecognition' in window)) {
                    this.showAlert('Not Supported', 'Voice input is not supported in your browser.');
                    return;
                }

                const recognition = new webkitSpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;

                recognition.onstart = () => {
                    document.getElementById('voiceInputBtn').innerHTML = '<span class="material-icons">mic_off</span>';
                    document.getElementById('voiceInputBtn').style.color = 'var(--error)';
                };

                recognition.onresult = (event) => {
                    let interimTranscript = '';
                    let finalTranscript = '';

                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript;
                        } else {
                            interimTranscript += transcript;
                        }
                    }

                    const editor = document.getElementById('editorContent');
                    editor.value = finalTranscript || interimTranscript;
                    this.updateTextAnalytics();
                };

                recognition.onerror = (event) => {
                    console.error('Speech recognition error', event.error);
                    document.getElementById('voiceInputBtn').innerHTML = '<span class="material-icons">mic</span>';
                    document.getElementById('voiceInputBtn').style.color = '';
                };

                recognition.onend = () => {
                    document.getElementById('voiceInputBtn').innerHTML = '<span class="material-icons">mic</span>';
                    document.getElementById('voiceInputBtn').style.color = '';
                };

                if (document.getElementById('voiceInputBtn').innerHTML.includes('mic_off')) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            }

            showActivityOptions(activityId, x, y) {
                const activity = this.state.activities.find(a => a.id === activityId);
                if (!activity) return;

                const contextMenu = document.getElementById('contextMenu');
                contextMenu.innerHTML = `
                    <div class="context-menu-item" data-action="edit" tabindex="0">
                        <span class="material-icons">edit</span>
                        Edit
                    </div>
                    ${activity.isTutorial ? '' : `
                        <div class="context-menu-item" data-action="archive" tabindex="0">
                            <span class="material-icons">archive</span>
                            ${activity.archived ? 'Unarchive' : 'Archive'}
                        </div>
                        <div class="context-menu-item danger" data-action="delete" tabindex="0">
                            <span class="material-icons">delete</span>
                            Delete
                        </div>
                    `}
                `;

                // Position the context menu ensuring it stays within viewport
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const menuWidth = 200;
                const menuHeight = activity.isTutorial ? 48 : 144; // Adjust height based on options

                const adjustedX = x + menuWidth > viewportWidth ? viewportWidth - menuWidth - 10 : x;
                const adjustedY = y + menuHeight > viewportHeight ? viewportHeight - menuHeight - 10 : y;

                contextMenu.style.left = `${adjustedX}px`;
                contextMenu.style.top = `${adjustedY}px`;
                contextMenu.classList.add('context-menu-open');

                // Focus first item for keyboard navigation
                setTimeout(() => {
                    contextMenu.querySelector('.context-menu-item').focus();
                }, 10);

                // Handle context menu item clicks
                contextMenu.querySelectorAll('.context-menu-item').forEach(item => {
                    item.addEventListener('click', async (e) => {
                        e.stopPropagation();
                        const action = item.dataset.action;
                        this.handleContextMenuAction(action, activity);
                    });

                    // Keyboard support
                    item.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            const action = item.dataset.action;
                            this.handleContextMenuAction(action, activity);
                        }
                    });
                });
            }

            handleContextMenuAction(action, activity) {
                switch (action) {
                    case 'edit':
                        this.openEditor(activity.id);
                        break;
                    case 'archive':
                        activity.archived = !activity.archived;
                        this.saveActivities();
                        this.renderView();
                        break;
                    case 'delete':
                        this.showConfirmModal(
                            'Delete Activity',
                            'Are you sure you want to delete this activity?',
                            async () => {
                                activity.deleted = true;
                                await this.saveActivities();
                                this.renderView();
                            }
                        );
                        break;
                }

                this.hideContextMenu();
            }

            hideContextMenu() {
                document.getElementById('contextMenu').classList.remove('context-menu-open');
            }

            showConfirmModal(title, message, confirmAction) {
                document.getElementById('confirmModalTitle').textContent = title;
                document.getElementById('confirmModalMessage').textContent = message;
                this.state.pendingAction = confirmAction;
                document.getElementById('confirmModal').classList.add('modal-open');

                // Focus the cancel button by default
                setTimeout(() => {
                    document.getElementById('confirmModalCancel').focus();
                }, 100);
            }

            showAlert(title, message) {
                document.getElementById('alertModalTitle').textContent = title;
                document.getElementById('alertModalMessage').textContent = message;
                document.getElementById('alertModal').classList.add('modal-open');

                // Focus the OK button
                setTimeout(() => {
                    document.getElementById('alertModalOk').focus();
                }, 100);
            }

            generateId() {
                return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
            }
        }

        // Initialize the app when the DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const app = new CountifyApp();
        });

document.addEventListener('DOMContentLoaded', () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(registration => {
          console.log('ServiceWorker registration successful');
        })
        .catch(err => {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }

  // Check if app is launched as PWA
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('Launched as PWA');
  }

  // Initialize your app here
  console.log('Countify+ initialized');
});
