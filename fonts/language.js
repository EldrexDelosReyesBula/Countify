// language.js - Fully Functional Multilingual Support
window.CountifyLanguage = (function() {
    'use strict';

    // Complete translations including tutorial content
    const translations = {
        'en': {
            // App UI
            'app_title': 'Countify+',
            'new': 'New',
            'back': 'Back',
            'save': 'Save',
            'cancel': 'Cancel',
            'confirm': 'Confirm',
            'ok': 'OK',
            'edit': 'Edit',
            'delete': 'Delete',
            'archive': 'Archive',
            'unarchive': 'Unarchive',
            'delete_permanently': 'Delete Permanently',
            
            // Navigation
            'views': 'VIEWS',
            'dashboard': 'Dashboard',
            'today_activities': "Today's Activities",
            'yesterday_activities': "Yesterday's Activities",
            'writing_history': 'Writing History',
            'manage': 'MANAGE',
            'deleted_activities': 'Deleted Activities',
            'archived_activities': 'Archived Activities',
            'settings': 'SETTINGS',
            'language': 'Language',
            'app_font': 'App Font',
            'text_size': 'Text Size',
            'app_theme': 'App Theme',
            'about': 'ABOUT',
            'privacy_policy': 'Privacy Policy',
            'terms_service': 'Terms of Service',
            'version': 'Version',
            
            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',
            
            // Text size options
            'size_small': 'Small',
            'size_normal': 'Normal',
            'size_large': 'Large',
            
            // Theme options
            'theme_light': 'Light',
            'theme_dark': 'Dark',
            'theme_system': 'System',
            
            // Editor
            'words': 'Words',
            'characters': 'Characters',
            'chars_no_spaces': 'Chars (no spaces)',
            'sentences': 'Sentences',
            'paragraphs': 'Paragraphs',
            'reading_time': 'Reading Time',
            'speaking_time': 'Speaking Time',
            'min': 'min',
            'mins': 'mins',
            'start_typing': 'Start typing here...',
            'predictive_results': 'Some results are predictive and for reference only.',
            
            // Voice mode
            'voice_mode': 'Voice Mode',
            'start': 'Start',
            'pause': 'Pause',
            'stop': 'Stop',
            'continue': 'Continue',
            'space': 'Space',
            
            // Modals
            'confirm_action': 'Confirm Action',
            'confirm_message': 'Are you sure you want to perform this action?',
            'alert': 'Alert',
            'alert_message': 'This is an alert message.',
            'cannot_save': 'Cannot Save',
            'cannot_save_message': 'This is a tutorial activity and cannot be modified.',
            'cannot_delete': 'Cannot Delete',
            'cannot_delete_message': 'This is a tutorial activity and cannot be deleted.',
            'delete_activity': 'Delete Activity',
            'delete_confirm': 'Are you sure you want to delete this activity? This action cannot be undone.',
            'clear_text': 'Clear Text',
            'clear_text_confirm': 'Are you sure you want to clear all text? This action cannot be undone.',
            'unarchive_activity': 'Unarchive Activity',
            'unarchive_confirm': 'This activity is archived. Do you want to unarchive it to edit?',
            'delete_permanent_confirm': 'Are you sure you want to permanently delete this activity? This cannot be undone.',
            'voice_input_error': 'Voice Input Error',
            
            // Empty states
            'no_activities': 'No Activities Yet',
            'create_first_activity': 'Click the "+" button to create your first word count activity.',
            'create_activity': 'Create Activity',
            'no_activities_found': 'No Activities Found',
            'no_today_activities': "You haven't created any activities today.",
            'create_today_activity': 'Create Activity',
            'no_yesterday_activities': "You didn't create any activities yesterday.",
            'no_deleted_activities': 'Your deleted activities will appear here.',
            'no_archived_activities': 'Your archived activities will appear here.',
            'no_results': 'No Results Found',
            'no_match_query': 'No activities match your search for',
            'results_for': 'results for',
            'search_results': 'Search Results',
            'search_placeholder': 'Search activities...',
            'no_results_found': 'No results found for',
            
            // Dates
            'today': 'Today',
            'yesterday': 'Yesterday',
            'morning_activity': 'Morning Activity',
            'afternoon_activity': 'Afternoon Activity',
            'evening_activity': 'Evening Activity',
            
            // Stats
            'total_words_week': 'Total words this week',
            'avg_per_day': 'Average per day',
            'most_productive_day': 'Most productive day',
            
            // Privacy
            'privacy_tracking': 'Privacy & Tracking',
            'privacy_description': 'Countify+ processes your writing and voice locally on your device to provide real-time calculations and analysis. No data is ever sent to external servers — we do not collect or store any personal information.',
            'i_understand': 'I understand',
            'decline': 'Decline',
            'saved': 'Saved',
            
            // Tutorials
            'tutorial1_title': 'Welcome to Countify+ - Your Writing Analytics Hub',
            'tutorial1_content': `Countify+ is your comprehensive writing analytics tool designed to track, analyze, and optimize your writing productivity with precision.

KEY FEATURES:

1. Advanced Analytics:
   - Real-time word, character, and paragraph counting
   - Reading and speaking time estimates
   - Sentence structure analysis
   - Historical progress tracking

2. Enhanced Productivity:
   - Voice-to-text dictation (supports multiple languages)
   - Dark/light mode for comfortable writing
   
3. Data Security:
   - Local-first data storage
   - No cloud storage

GETTING STARTED:
- Tap the "+" button to create your first writing activity
- Use descriptive titles for better organization
- The dashboard shows your recent activities and writing stats
- Check the analytics panel for detailed writing metrics`,

            'tutorial2_title': 'Mastering the Countify+ Editor',
            'tutorial2_content': `The Countify+ editor provides a powerful yet distraction-free environment for all your writing needs. Here's how to make the most of it:

EDITOR FEATURES:
1. Real-time Analytics Panel:
   - Word count updates as you type
   - Character counts (with/without spaces)
   - Paragraph and sentence analysis
   - Estimated reading/speaking times

2. Productivity Tools:
   - Voice Input: Dictate instead of type (supports multiple languages)
   - Quick Save: Ctrl+S or tap the save button
   - Format Preservation: Maintains paragraphs and spacing
   - Dark/Light Mode: Adjusts to your preference

3. Content Management:
   - Archive instead of delete for better organization
   - Search across all your documents

SAFETY FEATURES:
- Red buttons indicate destructive actions (delete, clear texts)
- Green buttons indicate input actions (voice)
- Purple buttons indicate navigation/saving

VOICE MODE:
- Tap the microphone to start voice input
- Use the bottom sheet controls to manage dictation
- Your voice input is processed locally`
        },
        'tl': {
            // App UI
            'app_title': 'Countify+',
            'new': 'Bago',
            'back': 'Bumalik',
            'save': 'I-save',
            'cancel': 'Kanselahin',
            'confirm': 'Kumpirmahin',
            'ok': 'Sige',
            'edit': 'I-edit',
            'delete': 'Burahin',
            'archive': 'I-archive',
            'unarchive': 'I-unarchive',
            'delete_permanently': 'Permanenteng Burahin',
            
            // Navigation
            'views': 'MGA TINGNAN',
            'dashboard': 'Dashboard',
            'today_activities': "Mga Aktibidad Ngayon",
            'yesterday_activities': "Mga Aktibidad Kahapon",
            'writing_history': 'Kasaysayan ng Pagsusulat',
            'manage': 'PAMAHALAAN',
            'deleted_activities': 'Mga Naburang Aktibidad',
            'archived_activities': 'Mga Na-archive na Aktibidad',
            'settings': 'MGA SETTING',
            'language': 'Wika',
            'app_font': 'Font ng App',
            'text_size': 'Laki ng Teksto',
            'app_theme': 'Tema ng App',
            'about': 'TUNGKOL SA',
            'privacy_policy': 'Patakaran sa Privacy',
            'terms_service': 'Mga Tuntunin ng Serbisyo',
            'version': 'Bersyon',
            
            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',
            
            // Text size options
            'size_small': 'Maliit',
            'size_normal': 'Normal',
            'size_large': 'Malaki',
            
            // Theme options
            'theme_light': 'Light',
            'theme_dark': 'Dark',
            'theme_system': 'System',
            
            // Editor
            'words': 'mga salita',
            'characters': 'Mga Character',
            'chars_no_spaces': 'Mga Character (walang spaces)',
            'sentences': 'Mga Pangungusap',
            'paragraphs': 'Mga Talata',
            'reading_time': 'Oras ng Pagbasa',
            'speaking_time': 'Oras ng Pagsasalita',
            'min': 'min',
            'mins': 'mins',
            'start_typing': 'Magsimulang mag-type dito...',
            'predictive_results': 'Ang ilang resulta ay hula lamang at para sa reference lamang.',
            
            // Voice mode
            'voice_mode': 'Voice Mode',
            'start': 'Simulan',
            'pause': 'I-pause',
            'stop': 'Itigil',
            'continue': 'Ipagpatuloy',
            'space': 'Space',
            
            // Modals
            'confirm_action': 'Kumpirmahin ang Aksyon',
            'confirm_message': 'Sigurado ka bang gusto mong gawin ito?',
            'alert': 'Alert',
            'alert_message': 'Ito ay isang alert message.',
            'cannot_save': 'Hindi Maaaring I-save',
            'cannot_save_message': 'Ito ay isang tutorial activity at hindi maaaring baguhin.',
            'cannot_delete': 'Hindi Maaaring Burahin',
            'cannot_delete_message': 'Ito ay isang tutorial activity at hindi maaaring burahin.',
            'delete_activity': 'Burahin ang Aktibidad',
            'delete_confirm': 'Sigurado ka bang gusto mong burahin ang aktibidad na ito? Hindi ito mababawi.',
            'clear_text': 'Burahin ang Teksto',
            'clear_text_confirm': 'Sigurado ka bang gusto mong burahin ang lahat ng teksto? Hindi ito mababawi.',
            'unarchive_activity': 'I-unarchive ang Aktibidad',
            'unarchive_confirm': 'Naka-archive ang aktibidad na ito. Gusto mo bang i-unarchive ito para i-edit?',
            'delete_permanent_confirm': 'Sigurado ka bang gusto mong permanenteng burahin ang aktibidad na ito? Hindi ito mababawi.',
            'voice_input_error': 'Error sa Voice Input',
            
            // Empty states
            'no_activities': 'Walang Mga Aktibidad',
            'create_first_activity': 'I-click ang "+" button para gumawa ng unang word count activity.',
            'create_activity': 'Gumawa ng Aktibidad',
            'no_activities_found': 'Walang Natagpuang Mga Aktibidad',
            'no_today_activities': "Wala kang nagawang mga aktibidad ngayon.",
            'create_today_activity': 'Gumawa ng Aktibidad',
            'no_yesterday_activities': "Wala kang nagawang mga aktibidad kahapon.",
            'no_deleted_activities': 'Ang iyong mga naburang aktibidad ay lilitaw dito.',
            'no_archived_activities': 'Ang iyong mga na-archive na aktibidad ay lilitaw dito.',
            'no_results': 'Walang Natagpuang Mga Resulta',
            'no_match_query': 'Walang aktibidad na tumutugma sa iyong search para sa',
            'results_for': 'mga resulta para sa',
            'search_results': 'Mga Resulta ng Paghahanap',
            'search_placeholder': 'Maghanap ng mga aktibidad...',
            'no_results_found': 'Walang resulta na natagpuan para sa',
            
            // Dates
            'today': 'Ngayon',
            'yesterday': 'Kahapon',
            'morning_activity': 'Aktibidad sa Umaga',
            'afternoon_activity': 'Aktibidad sa Hapon',
            'evening_activity': 'Aktibidad sa Gabi',
            
            // Stats
            'total_words_week': 'Kabuuang mga salita sa linggong ito',
            'avg_per_day': 'Average bawat araw',
            'most_productive_day': 'Pinaka produktibong araw',
            
            // Privacy
            'privacy_tracking': 'Privacy & Tracking',
            'privacy_description': 'Ang Countify+ ay nagpoproseso ng iyong pagsusulat at boses sa iyong device para magbigay ng real-time na calculations at analysis. Walang data na ipinapadala sa external servers — hindi namin kinokolekta o iniimbak ang anumang personal na impormasyon.',
            'i_understand': 'Naiintindihan ko',
            'decline': 'Tanggihan',
            'saved': 'Na-save',
            
            // Tutorials
            'tutorial1_title': 'Maligayang Pagdating sa Countify+ - Ang Iyong Writing Analytics Hub',
            'tutorial1_content': `Ang Countify+ ay iyong komprehensibong kasangkapan sa pagsusuri ng pagsusulat na idinisenyo upang subaybayan, suriin, at i-optimize ang iyong produktibidad sa pagsusulat nang may katumpakan.

MGA PANGUNAHING TAMPOK:

1. Advanced na Pagsusuri:
   - Real-time na bilang ng salita, character, at talata
   - Pagtatantya ng oras ng pagbabasa at pagsasalita
   - Pagsusuri sa istruktura ng pangungusap
   - Pagsubaybay sa kasaysayan ng pag-unlad

2. Pinahusay na Produktibidad:
   - Voice-to-text dictation (sumusuporta sa maraming wika)
   - Dark/light mode para sa komportableng pagsusulat
   
3. Seguridad ng Data:
   - Local-first na imbakan ng data
   - Walang cloud storage

PAANO SIMULAN:
- Pindutin ang "+" button para gumawa ng iyong unang writing activity
- Gumamit ng deskriptibong mga pamagat para sa mas mahusay na organisasyon
- Ang dashboard ay nagpapakita ng iyong mga kamakailang aktibidad at stats sa pagsusulat
- Tingnan ang analytics panel para sa detalyadong metrics ng pagsusulat`,

            'tutorial2_title': 'Pag-master sa Countify+ Editor',
            'tutorial2_content': `Ang Countify+ editor ay nagbibigay ng isang makapangyarihan ngunit walang istorbong kapaligiran para sa lahat ng iyong pangangailangan sa pagsusulat. Narito kung paano ito gamitin nang husto:

MGA TAMPOK NG EDITOR:
1. Real-time Analytics Panel:
   - Na-update ang word count habang nagta-type ka
   - Bilang ng mga character (may o walang spaces)
   - Pagsusuri ng talata at pangungusap
   - Tinatayang oras ng pagbabasa/pagsasalita

2. Mga Kasangkapan sa Produktibidad:
   - Voice Input: Mag-dikta imbes na mag-type (sumusuporta sa maraming wika)
   - Quick Save: Ctrl+S o pindutin ang save button
   - Pagpapanatili ng Format: Pinapanatili ang mga talata at spacing
   - Dark/Light Mode: Na-aayon sa iyong kagustuhan

3. Pamamahala ng Nilalaman:
   - I-archive imbes na burahin para sa mas mahusay na organisasyon
   - Maghanap sa lahat ng iyong mga dokumento

MGA TAMPOK NG KALIGTASAN:
- Mga pulang button ay nagpapahiwatig ng mga mapaminsalang aksyon (pagbura, pag-clear ng teksto)
- Mga berdeng button ay nagpapahiwatig ng mga aksyon sa input (voice)
- Mga purple na button ay nagpapahiwatig ng navigation/pag-save

VOICE MODE:
- Pindutin ang microphone para simulan ang voice input
- Gamitin ang bottom sheet controls para pamahalaan ang dikta
- Ang iyong voice input ay pinoproseso sa lokal`
        },
        'war': {
            // App UI
            'app_title': 'Countify+',
            'new': 'Bag-o',
            'back': 'Balik',
            'save': 'I-save',
            'cancel': 'Kanselahon',
            'confirm': 'Kompermahon',
            'ok': 'Sige',
            'edit': 'I-edit',
            'delete': 'Paraon',
            'archive': 'I-archive',
            'unarchive': 'I-unarchive',
            'delete_permanently': 'Pirmanenteng Paraon',
            
            // Navigation
            'views': 'MGA TAN-AWON',
            'dashboard': 'Dashboard',
            'today_activities': "Mga Kalihukan Yana",
            'yesterday_activities': "Mga Kalihukan Kahapon",
            'writing_history': 'Kasaysayan han Pagsurat',
            'manage': 'PAGDUMARA',
            'deleted_activities': 'Mga Napara nga Kalihukan',
            'archived_activities': 'Mga Na-archive nga Kalihukan',
            'settings': 'MGA SETTING',
            'language': 'Yinaknan',
            'app_font': 'Font han App',
            'text_size': 'Kadak-an han Teksto',
            'app_theme': 'Tema han App',
            'about': 'TUNGOD HAN',
            'privacy_policy': 'Polisiya han Privacy',
            'terms_service': 'Mga Termino han Serbisyo',
            'version': 'Bersyon',
            
            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',
            
            // Text size options
            'size_small': 'Gutiay',
            'size_normal': 'Normal',
            'size_large': 'Dako',
            
            // Theme options
            'theme_light': 'Light',
            'theme_dark': 'Dark',
            'theme_system': 'System',
            
            // Editor
            'words': 'mga pulong',
            'characters': 'Mga Karakter',
            'chars_no_spaces': 'Mga Karakter (waray spaces)',
            'sentences': 'Mga Pangungusap',
            'paragraphs': 'Mga Parapo',
            'reading_time': 'Oras han Pagbasa',
            'speaking_time': 'Oras han Pagsulti',
            'min': 'min',
            'mins': 'mins',
            'start_typing': 'Sugdi pag-type dinhi...',
            'predictive_results': 'An iba nga resulta hula la ngan para ha reference la.',
            
            // Voice mode
            'voice_mode': 'Voice Mode',
            'start': 'Sugdan',
            'pause': 'I-pause',
            'stop': 'Undangon',
            'continue': 'Padayunon',
            'space': 'Space',
            
            // Modals
            'confirm_action': 'Kompermahon an Aksyon',
            'confirm_message': 'Sigurado ka nga gusto mo ini himuon?',
            'alert': 'Alert',
            'alert_message': 'Ini usa ka alert message.',
            'cannot_save': 'Diri Pwede I-save',
            'cannot_save_message': 'Ini usa ka tutorial activity ngan diri pwede bag-ohon.',
            'cannot_delete': 'Diri Pwede Paraon',
            'cannot_delete_message': 'Ini usa ka tutorial activity ngan diri pwede paraon.',
            'delete_activity': 'Paraon an Kalihukan',
            'delete_confirm': 'Sigurado ka nga gusto mo paraon ini nga kalihukan? Diri na ini mababalik.',
            'clear_text': 'Paraon an Teksto',
            'clear_text_confirm': 'Sigurado ka nga gusto mo paraon an tanan nga teksto? Diri na ini mababalik.',
            'unarchive_activity': 'I-unarchive an Kalihukan',
            'unarchive_confirm': 'Naka-archive ini nga kalihukan. Gusto mo ba ini i-unarchive para ma-edit?',
            'delete_permanent_confirm': 'Sigurado ka nga gusto mo pirmanenteng paraon ini nga kalihukan? Diri na ini mababalik.',
            'voice_input_error': 'Error ha Voice Input',
            
            // Empty states
            'no_activities': 'Waray Mga Kalihukan',
            'create_first_activity': 'I-klik an "+" button para paghimo hin una nga word count activity.',
            'create_activity': 'Himuon an Kalihukan',
            'no_activities_found': 'Waray Nakita nga Mga Kalihukan',
            'no_today_activities': "Waray ka naghimo hin bisan ano nga kalihukan yana.",
            'create_today_activity': 'Himuon an Kalihukan',
            'no_yesterday_activities': "Waray ka naghimo hin bisan ano nga kalihukan kahapon.",
            'no_deleted_activities': 'An imo mga napara nga kalihukan makikita dinhi.',
            'no_archived_activities': 'An imo mga na-archive nga kalihukan makikita dinhi.',
            'no_results': 'Waray Nakita nga Mga Resulta',
            'no_match_query': 'Waray kalihukan nga nag-uupod ha imo pag-search para ha',
            'results_for': 'mga resulta para ha',
            'search_results': 'Mga Resulta han Pag-search',
            'search_placeholder': 'Pangitaa an mga kalihukan...',
            'no_results_found': 'Waray resulta nga nakita para ha',
            
            // Dates
            'today': 'Yana',
            'yesterday': 'Kahapon',
            'morning_activity': 'Kalihukan ha Agahon',
            'afternoon_activity': 'Kalihukan ha Udto',
            'evening_activity': 'Kalihukan ha Gab-i',
            
            // Stats
            'total_words_week': 'Total nga mga pulong hini nga semana',
            'avg_per_day': 'Average kada adlaw',
            'most_productive_day': 'Pinaka produktibo nga adlaw',
            
            // Privacy
            'privacy_tracking': 'Privacy & Tracking',
            'privacy_description': 'An Countify+ nagpoproseso han imo pagsurat ngan tingog ha imo device para maghatag hin real-time nga calculations ngan analysis. Waray data nga ipinapadara ha external servers — diri kami nangongolekta o nagiimbak hin bisan ano nga personal nga impormasyon.',
            'i_understand': 'Nasabtan ko',
            'decline': 'Dili',
            'saved': 'Na-save',
            
            // Tutorials
            'tutorial1_title': 'Maupay nga Pag-abot ha Countify+ - An Imo Writing Analytics Hub',
            'tutorial1_content': `An Countify+ amo an imo komprehensibo nga gamit ha pagsusuri han pagsurat nga gindesinyo para subaybayan, suruon, ngan i-optimize an imo produktibidad ha pagsurat nga may katukma.

MGA PANGUNAHING TAMPOK:

1. Advanced nga Pagsusuri:
   - Real-time nga ihap han pulong, karakter, ngan parapo
   - Pagtantiya han oras han pagbasa ngan pagsulti
   - Pagsusuri han istruktura han pangungusap
   - Pagsubaybay han kasaysayan han pag-uswag

2. Ginhadian nga Produktibidad:
   - Voice-to-text dictation (nagsusuporta ha damu nga mga yinaknan)
   - Dark/light mode para ha komportable nga pagsurat
   
3. Seguridad han Data:
   - Local-first nga pag-imbak han data
   - Waray cloud storage

PAUNSA SUGOD:
- Pinduta an "+" button para paghimo han imo syahan nga writing activity
- Gamit hin deskriptibo nga mga titulo para ha mas maupay nga organisasyon
- An dashboard nagpapakita han imo mga bag-o nga kalihukan ngan stats ha pagsurat
- Kitaa an analytics panel para ha detalyado nga metrics han pagsurat`,

            'tutorial2_title': 'Pag-master ha Countify+ Editor',
            'tutorial2_content': `An Countify+ editor nagtatao hin makusog pero waray istorbo nga palibot para ha tanan nga imo kinahanglanon ha pagsurat. Amon dinhi kun paano ini gamiton nga maupay:

MGA TAMPOK HAN EDITOR:
1. Real-time Analytics Panel:
   - Na-uupdate an word count samtang nagta-type ka
   - Ihap han mga karakter (mayda o waray spaces)
   - Pagsusuri han parapo ngan pangungusap
   - Tinatantiya nga oras han pagbasa/pagsulti

2. Mga Gamit ha Produktibidad:
   - Voice Input: Mag-dikta imbes nga mag-type (nagsusuporta ha damu nga mga yinaknan)
   - Quick Save: Ctrl+S o pinduta an save button
   - Pagmentinar han Format: Ginmementinar an mga parapo ngan spacing
   - Dark/Light Mode: Na-aadjust ha imo preferensya

3. Pagdumara han Kontento:
   - I-archive imbes nga paraon para ha mas maupay nga organisasyon
   - Mangita ha tanan nga imo mga dokumento

MGA TAMPOK HAN KASIGURUHAN:
- Mga pula nga button nagpapahayag han mga makakaraot nga aksyon (pag-para, pag-clear han teksto)
- Mga berde nga button nagpapahayag han mga aksyon ha input (tingog)
- Mga purple nga button nagpapahayag han navigation/pag-save

VOICE MODE:
- Pinduta an microphone para sugdan an voice input
- Gamiton an bottom sheet controls para madumara an dikta
- An imo voice input pinoproseso ha lokal`
        }
    };

    const languageCodes = {
        'en': 'en-US',
        'tl': 'fil-PH',
        'war': 'fil-PH'
    };

    const defaultLanguage = 'en';
    let currentLanguage = defaultLanguage;
    let onLanguageChange = null;

    // Private methods
    const createModal = function() {
        const modal = document.createElement('div');
        modal.className = 'countify-language-modal';
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        
        const content = document.createElement('div');
        content.className = 'countify-language-modal-content glass';
        
        const heading = document.createElement('h3');
        heading.textContent = getTranslation('language');
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'countify-language-options';
        
        // Create language options
        const languages = [
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
            { code: 'war', name: 'Waray-Waray', flag: '🇵🇭' }
        ];
        
        languages.forEach(lang => {
            const button = document.createElement('button');
            button.className = `countify-language-option ${currentLanguage === lang.code ? 'active' : ''}`;
            button.dataset.lang = lang.code;
            
            const flag = document.createElement('span');
            flag.className = 'countify-language-flag';
            flag.textContent = lang.flag;
            flag.setAttribute('aria-hidden', 'true');
            
            const span = document.createElement('span');
            span.className = 'countify-language-name';
            span.textContent = lang.name;
            
            button.appendChild(flag);
            button.appendChild(span);
            optionsContainer.appendChild(button);
        });
        
        const closeButton = document.createElement('button');
        closeButton.className = 'btn btn-primary countify-language-close';
        closeButton.textContent = getTranslation('ok');
        
        content.appendChild(heading);
        content.appendChild(optionsContainer);
        content.appendChild(closeButton);
        modal.appendChild(content);
        
        return modal;
    };

    const addModalStyles = function() {
        if (document.getElementById('countify-language-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'countify-language-styles';
        style.textContent = `
.countify-language-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.countify-language-modal.show {
    opacity: 1;
    visibility: visible;
}

.countify-language-modal-content {
    background-color: var(--background-primary);
    padding: 24px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.countify-language-modal.show .countify-language-modal-content {
    transform: translateY(0);
}

.countify-language-modal h3 {
    margin: 0 0 20px 0;
    color: var(--text-primary);
    text-align: center;
    font-size: 1.25rem;
}

.countify-language-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 0 24px 0;
}

.countify-language-option {
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background-color: var(--background-secondary);
    color: var(--text-primary);
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 12px;
}

.countify-language-option:hover {
    background-color: var(--background-hover);
}

.countify-language-option.active {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
}

.countify-language-flag {
    font-size: 1.5rem;
}

.countify-language-name {
    font-size: 1rem;
    font-weight: 500;
}

.countify-language-close {
    width: 100%;
    margin-top: 0;
    padding: 12px;
    font-size: 1rem;
}
`;
        document.head.appendChild(style);
    };

    const getTranslation = function(key) {
        if (!key || typeof key !== 'string') {
            console.warn('Invalid translation key:', key);
            return '';
        }
        
        // First try current language
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            return translations[currentLanguage][key];
        }
        
        // Fallback to default language
        if (translations[defaultLanguage] && translations[defaultLanguage][key]) {
            console.warn(`Translation missing for key "${key}" in language "${currentLanguage}", using default language`);
            return translations[defaultLanguage][key];
        }
        
        // If still not found, return the key itself
        console.warn(`Translation missing for key "${key}" in all languages`);
        return key;
    };

    // Public API
    return {
        getTranslation: getTranslation,

        getLanguageCode: function(lang) {
            return languageCodes[lang] || languageCodes[defaultLanguage];
        },

        showLanguageSelector: function() {
            addModalStyles();
            
            const existingModal = document.querySelector('.countify-language-modal');
            if (existingModal) {
                existingModal.classList.add('show');
                return;
            }
            
            const modal = createModal();
            document.body.appendChild(modal);
            
            // Force reflow to enable CSS transitions
            void modal.offsetWidth;
            
            // Show modal with animation
            modal.classList.add('show');
            
            // Focus trap for accessibility
            const focusableElements = modal.querySelectorAll('button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            firstElement.focus();
            
            modal.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
                
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
            
            const closeModal = function() {
                modal.classList.remove('show');
                setTimeout(() => {
                    if (modal.parentNode) {
                        document.body.removeChild(modal);
                    }
                }, 300);
            };
            
            const handleOptionClick = function(e) {
                const option = e.currentTarget;
                const lang = option.dataset.lang;
                
                if (currentLanguage !== lang && translations[lang]) {
                    currentLanguage = lang;
                    
                    // Update all options
                    modal.querySelectorAll('.countify-language-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    option.classList.add('active');
                    
                    // Update close button text
                    modal.querySelector('.countify-language-close').textContent = 
                        getTranslation('ok');
                    
                    // Update modal title
                    modal.querySelector('h3').textContent = getTranslation('language');
                    
                    // Save language preference
                    try {
                        const settings = JSON.parse(localStorage.getItem('countify-settings')) || {};
                        settings.language = lang;
                        localStorage.setItem('countify-settings', JSON.stringify(settings));
                    } catch (e) {
                        console.warn('Failed to save language preference:', e);
                    }
                    
                    // Trigger change callback
                    if (typeof onLanguageChange === 'function') {
                        onLanguageChange(lang);
                    }
                }
            };
            
            modal.querySelectorAll('.countify-language-option').forEach(option => {
                option.addEventListener('click', handleOptionClick);
                option.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOptionClick(e);
                    }
                });
            });
            
            modal.querySelector('.countify-language-close').addEventListener('click', closeModal);
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        },

        set onLanguageChange(callback) {
            if (typeof callback === 'function') {
                onLanguageChange = callback;
            } else {
                console.warn('Language change callback must be a function');
            }
        },

        getCurrentLanguage: function() {
            return currentLanguage;
        },

        setCurrentLanguage: function(lang) {
            if (translations[lang]) {
                currentLanguage = lang;
                
                // Save language preference
                try {
                    const settings = JSON.parse(localStorage.getItem('countify-settings')) || {};
                    settings.language = lang;
                    localStorage.setItem('countify-settings', JSON.stringify(settings));
                } catch (e) {
                    console.warn('Failed to save language preference:', e);
                }
                
                return true;
            }
            return false;
        },

        getTutorialContent: function(tutorialId, lang) {
            const language = lang || currentLanguage;
            const tutorialKey = `tutorial${tutorialId}_`;
            
            return {
                title: getTranslation(tutorialKey + 'title'),
                content: getTranslation(tutorialKey + 'content')
            };
        },

        init: function(savedLanguage) {
            try {
                // First try the passed parameter
                if (savedLanguage && translations[savedLanguage]) {
                    currentLanguage = savedLanguage;
                    return;
                }
                
                // Fallback to localStorage
                const settings = localStorage.getItem('countify-settings');
                if (settings) {
                    try {
                        const parsedSettings = JSON.parse(settings);
                        if (parsedSettings.language && translations[parsedSettings.language]) {
                            currentLanguage = parsedSettings.language;
                        }
                    } catch (e) {
                        console.warn('Failed to parse settings from localStorage', e);
                    }
                }
                
                // Fallback to browser language
                if (!currentLanguage) {
                    const browserLang = navigator.language.substring(0, 2);
                    if (translations[browserLang]) {
                        currentLanguage = browserLang;
                    }
                }
            } catch (e) {
                console.error('Error initializing language:', e);
                currentLanguage = defaultLanguage;
            }
        }
    };
})();

// Initialize with saved language or default
(function() {
    try {
        const settings = localStorage.getItem('countify-settings');
        const lang = settings ? JSON.parse(settings).language : null;
        window.CountifyLanguage.init(lang);
    } catch (e) {
        console.warn('Failed to initialize language:', e);
        window.CountifyLanguage.init('en');
    }
})();
