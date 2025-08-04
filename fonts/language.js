// language.js - Enhanced Multilingual Support for Countify+
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
            'license': 'License',
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

Advanced Analytics:
- Real-time word, character, and paragraph counting
- Reading and speaking time estimates
- Sentence structure analysis
- Historical progress tracking

Enhanced Productivity:
- Voice-to-text dictation (supports multiple languages)
- Dark/light mode for comfortable writing

Data Security:
- Local-first data storage
- No cloud storage

GETTING STARTED:
1. Tap the "+" button to create your first writing activity
2. Use descriptive titles for better organization
3. The dashboard shows your recent activities and writing stats
4. Check the analytics panel for detailed writing metrics`,

            'tutorial2_title': 'Mastering the Countify+ Editor',
            'tutorial2_content': `The Countify+ editor provides a powerful yet distraction-free environment for all your writing needs. Here's how to make the most of it:

EDITOR FEATURES:

Real-time Analytics Panel:
- Word count updates as you type
- Character counts (with/without spaces)
- Paragraph and sentence analysis
- Estimated reading/speaking times

Productivity Tools:
- Voice Input: Dictate instead of type (supports multiple languages)
- Quick Save: Ctrl+S or tap the save button
- Format Preservation: Maintains paragraphs and spacing
- Dark/Light Mode: Adjusts to your preference

Content Management:
- Archive instead of delete for better organization
- Search across all your documents

SAFETY FEATURES:
- Red buttons indicate destructive actions (delete, clear texts)
- Green buttons indicate input actions (voice)
- Purple buttons indicate navigation/saving

VOICE MODE:
1. Tap the microphone to start voice input
2. Use the bottom sheet controls to manage dictation
3. Your voice input is processed locally`
        },
        'es': {
            // App UI
            'app_title': 'Countify+',
            'new': 'Nuevo',
            'back': 'Atrás',
            'save': 'Guardar',
            'cancel': 'Cancelar',
            'confirm': 'Confirmar',
            'ok': 'Aceptar',
            'edit': 'Editar',
            'delete': 'Eliminar',
            'archive': 'Archivar',
            'unarchive': 'Desarchivar',
            'delete_permanently': 'Eliminar Permanentemente',

            // Navigation
            'views': 'VISTAS',
            'dashboard': 'Tablero',
            'today_activities': 'Actividades de Hoy',
            'yesterday_activities': 'Actividades de Ayer',
            'writing_history': 'Historial de Escritura',
            'manage': 'GESTIONAR',
            'deleted_activities': 'Actividades Eliminadas',
            'archived_activities': 'Actividades Archivadas',
            'settings': 'AJUSTES',
            'language': 'Idioma',
            'app_font': 'Fuente de la App',
            'text_size': 'Tamaño de Texto',
            'app_theme': 'Tema de la App',
            'about': 'ACERCA DE',
            'license': 'Licencia',
            'privacy_policy': 'Política de Privacidad',
            'terms_service': 'Términos de Servicio',
            'version': 'Versión',

            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',

            // Text size options
            'size_small': 'Pequeño',
            'size_normal': 'Normal',
            'size_large': 'Grande',

            // Theme options
            'theme_light': 'Claro',
            'theme_dark': 'Oscuro',
            'theme_system': 'Sistema',

            // Editor
            'words': 'Palabras',
            'characters': 'Caracteres',
            'chars_no_spaces': 'Caracteres (sin espacios)',
            'sentences': 'Oraciones',
            'paragraphs': 'Párrafos',
            'reading_time': 'Tiempo de Lectura',
            'speaking_time': 'Tiempo de Habla',
            'min': 'min',
            'mins': 'mins',
            'start_typing': 'Empieza a escribir aquí...',
            'predictive_results': 'Algunos resultados son predictivos y solo para referencia.',

            // Voice mode
            'voice_mode': 'Modo de Voz',
            'start': 'Iniciar',
            'pause': 'Pausar',
            'stop': 'Detener',
            'continue': 'Continuar',
            'space': 'Espacio',

            // Modals
            'confirm_action': 'Confirmar Acción',
            'confirm_message': '¿Estás seguro de que quieres realizar esta acción?',
            'alert': 'Alerta',
            'alert_message': 'Este es un mensaje de alerta.',
            'cannot_save': 'No Se Puede Guardar',
            'cannot_save_message': 'Esta es una actividad de tutorial y no se puede modificar.',
            'cannot_delete': 'No Se Puede Eliminar',
            'cannot_delete_message': 'Esta es una actividad de tutorial y no se puede eliminar.',
            'delete_activity': 'Eliminar Actividad',
            'delete_confirm': '¿Estás seguro de que quieres eliminar esta actividad? Esta acción no se puede deshacer.',
            'clear_text': 'Limpiar Texto',
            'clear_text_confirm': '¿Estás seguro de que quieres limpiar todo el texto? Esta acción no se puede deshacer.',
            'unarchive_activity': 'Desarchivar Actividad',
            'unarchive_confirm': 'Esta actividad está archivada. ¿Quieres desarchivarla para editar?',
            'delete_permanent_confirm': '¿Estás seguro de que quieres eliminar permanentemente esta actividad? Esto no se puede deshacer.',
            'voice_input_error': 'Error de Entrada de Voz',

            // Empty states
            'no_activities': 'Aún No Hay Actividades',
            'create_first_activity': 'Haz clic en el botón "+" para crear tu primera actividad de conteo de palabras.',
            'create_activity': 'Crear Actividad',
            'no_activities_found': 'No Se Encontraron Actividades',
            'no_today_activities': 'No has creado ninguna actividad hoy.',
            'create_today_activity': 'Crear Actividad',
            'no_yesterday_activities': 'No creaste ninguna actividad ayer.',
            'no_deleted_activities': 'Tus actividades eliminadas aparecerán aquí.',
            'no_archived_activities': 'Tus actividades archivadas aparecerán aquí.',
            'no_results': 'No Se Encontraron Resultados',
            'no_match_query': 'No hay actividades que coincidan con tu búsqueda de',
            'results_for': 'resultados para',
            'search_results': 'Resultados de Búsqueda',
            'search_placeholder': 'Buscar actividades...',
            'no_results_found': 'No se encontraron resultados para',

            // Dates
            'today': 'Hoy',
            'yesterday': 'Ayer',
            'morning_activity': 'Actividad Matutina',
            'afternoon_activity': 'Actividad Vespertina',
            'evening_activity': 'Actividad Nocturna',

            // Stats
            'total_words_week': 'Total de palabras esta semana',
            'avg_per_day': 'Promedio por día',
            'most_productive_day': 'Día más productivo',

            // Privacy
            'privacy_tracking': 'Privacidad y Seguimiento',
            'privacy_description': 'Countify+ procesa tu escritura y voz localmente en tu dispositivo para proporcionar cálculos y análisis en tiempo real. No se envían datos a servidores externos: no recopilamos ni almacenamos información personal.',
            'i_understand': 'Entiendo',
            'decline': 'Rechazar',
            'saved': 'Guardado',

            // Tutorials
            'tutorial1_title': 'Bienvenido a Countify+ - Tu Centro de Análisis de Escritura',
            'tutorial1_content': `Countify+ es tu herramienta integral de análisis de escritura diseñada para rastrear, analizar y optimizar tu productividad de escritura con precisión.

CARACTERÍSTICAS PRINCIPALES:

Análisis Avanzado:
- Conteo en tiempo real de palabras, caracteres y párrafos
- Estimaciones de tiempo de lectura y habla
- Análisis de estructura de oraciones
- Seguimiento de progreso histórico

Productividad Mejorada:
- Dictado de voz a texto (soporta múltiples idiomas)
- Modo claro/oscuro para una escritura cómoda

Seguridad de Datos:
- Almacenamiento de datos local primero
- Sin almacenamiento en la nube

CÓMO COMENZAR:
1. Toca el botón "+" para crear tu primera actividad de escritura
2. Usa títulos descriptivos para mejor organización
3. El tablero muestra tus actividades recientes y estadísticas
4. Revisa el panel de análisis para métricas detalladas`,

            'tutorial2_title': 'Dominando el Editor de Countify+',
            'tutorial2_content': `El editor de Countify+ proporciona un entorno potente y sin distracciones para todas tus necesidades de escritura. Así es como puedes aprovecharlo al máximo:

CARACTERÍSTICAS DEL EDITOR:

Panel de Análisis en Tiempo Real:
- Actualización del conteo de palabras mientras escribes
- Conteo de caracteres (con/sin espacios)
- Análisis de párrafos y oraciones
- Tiempos estimados de lectura/habla

Herramientas de Productividad:
- Entrada de Voz: Dicta en lugar de escribir (soporta múltiples idiomas)
- Guardado Rápido: Ctrl+S o toca el botón guardar
- Preservación de Formato: Mantiene párrafos y espaciado
- Modo Claro/Oscuro: Se ajusta a tu preferencia

Gestión de Contenido:
- Archiva en lugar de eliminar para mejor organización
- Busca en todos tus documentos

CARACTERÍSTICAS DE SEGURIDAD:
- Botones rojos indican acciones destructivas (eliminar, limpiar textos)
- Botones verdes indican acciones de entrada (voz)
- Botones morados indican navegación/guardado

MODO DE VOZ:
1. Toca el micrófono para iniciar la entrada de voz
2. Usa los controles inferiores para gestionar el dictado
3. Tu entrada de voz se procesa localmente`
        },
        'fr': {
            // App UI
            'app_title': 'Countify+',
            'new': 'Nouveau',
            'back': 'Retour',
            'save': 'Enregistrer',
            'cancel': 'Annuler',
            'confirm': 'Confirmer',
            'ok': 'OK',
            'edit': 'Modifier',
            'delete': 'Supprimer',
            'archive': 'Archiver',
            'unarchive': 'Désarchiver',
            'delete_permanently': 'Supprimer Définitivement',

            // Navigation
            'views': 'VUES',
            'dashboard': 'Tableau de bord',
            'today_activities': 'Activités Aujourd\'hui',
            'yesterday_activities': 'Activités Hier',
            'writing_history': 'Historique d\'Écriture',
            'manage': 'GÉRER',
            'deleted_activities': 'Activités Supprimées',
            'archived_activities': 'Activités Archivées',
            'settings': 'PARAMÈTRES',
            'language': 'Langue',
            'app_font': 'Police de l\'App',
            'text_size': 'Taille du Texte',
            'app_theme': 'Thème de l\'App',
            'about': 'À PROPOS',
            'license': 'License',
            'privacy_policy': 'Politique de Confidentialité',
            'terms_service': 'Conditions d\'Utilisation',
            'version': 'Version',

            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',

            // Text size options
            'size_small': 'Petit',
            'size_normal': 'Normal',
            'size_large': 'Grand',

            // Theme options
            'theme_light': 'Clair',
            'theme_dark': 'Sombre',
            'theme_system': 'Système',

            // Editor
            'words': 'Mots',
            'characters': 'Caractères',
            'chars_no_spaces': 'Caractères (sans espaces)',
            'sentences': 'Phrases',
            'paragraphs': 'Paragraphes',
            'reading_time': 'Temps de Lecture',
            'speaking_time': 'Temps de Parole',
            'min': 'min',
            'mins': 'mins',
            'start_typing': 'Commencez à taper ici...',
            'predictive_results': 'Certains résultats sont prédictifs et uniquement à titre de référence.',

            // Voice mode
            'voice_mode': 'Mode Vocal',
            'start': 'Démarrer',
            'pause': 'Pause',
            'stop': 'Arrêter',
            'continue': 'Continuer',
            'space': 'Espace',

            // Modals
            'confirm_action': 'Confirmer l\'Action',
            'confirm_message': 'Êtes-vous sûr de vouloir effectuer cette action?',
            'alert': 'Alerte',
            'alert_message': 'Ceci est un message d\'alerte.',
            'cannot_save': 'Impossible d\'Enregistrer',
            'cannot_save_message': 'Ceci est une activité de tutoriel et ne peut pas être modifiée.',
            'cannot_delete': 'Impossible de Supprimer',
            'cannot_delete_message': 'Ceci est une activité de tutoriel et ne peut pas être supprimée.',
            'delete_activity': 'Supprimer l\'Activité',
            'delete_confirm': 'Êtes-vous sûr de vouloir supprimer cette activité? Cette action est irréversible.',
            'clear_text': 'Effacer le Texte',
            'clear_text_confirm': 'Êtes-vous sûr de vouloir effacer tout le texte? Cette action est irréversible.',
            'unarchive_activity': 'Désarchiver l\'Activité',
            'unarchive_confirm': 'Cette activité est archivée. Voulez-vous la désarchiver pour la modifier?',
            'delete_permanent_confirm': 'Êtes-vous sûr de vouloir supprimer définitivement cette activité? Ceci est irréversible.',
            'voice_input_error': 'Erreur de Saisie Vocale',

            // Empty states
            'no_activities': 'Aucune Activité Pour le Moment',
            'create_first_activity': 'Cliquez sur le bouton "+" pour créer votre première activité de comptage de mots.',
            'create_activity': 'Créer une Activité',
            'no_activities_found': 'Aucune Activité Trouvée',
            'no_today_activities': 'Vous n\'avez créé aucune activité aujourd\'hui.',
            'create_today_activity': 'Créer une Activité',
            'no_yesterday_activities': 'Vous n\'avez créé aucune activité hier.',
            'no_deleted_activities': 'Vos activités supprimées apparaîtront ici.',
            'no_archived_activities': 'Vos activités archivées apparaîtront ici.',
            'no_results': 'Aucun Résultat Trouvé',
            'no_match_query': 'Aucune activité ne correspond à votre recherche pour',
            'results_for': 'résultats pour',
            'search_results': 'Résultats de Recherche',
            'search_placeholder': 'Rechercher des activités...',
            'no_results_found': 'Aucun résultat trouvé pour',

            // Dates
            'today': 'Aujourd\'hui',
            'yesterday': 'Hier',
            'morning_activity': 'Activité Matinale',
            'afternoon_activity': 'Activité de l\'Après-midi',
            'evening_activity': 'Activité du Soir',

            // Stats
            'total_words_week': 'Total de mots cette semaine',
            'avg_per_day': 'Moyenne par jour',
            'most_productive_day': 'Jour le plus productif',

            // Privacy
            'privacy_tracking': 'Confidentialité et Suivi',
            'privacy_description': 'Countify+ traite votre écriture et votre voix localement sur votre appareil pour fournir des calculs et des analyses en temps réel. Aucune donnée n\'est envoyée à des serveurs externes - nous ne collectons ni ne stockons aucune information personnelle.',
            'i_understand': 'Je comprends',
            'decline': 'Refuser',
            'saved': 'Enregistré',

            // Tutorials
            'tutorial1_title': 'Bienvenue sur Countify+ - Votre Hub d\'Analyse d\'Écriture',
            'tutorial1_content': `Countify+ est votre outil complet d'analyse d'écriture conçu pour suivre, analyser et optimiser votre productivité d'écriture avec précision.

PRINCIPALES CARACTÉRISTIQUES:

Analyse Avancée:
- Comptage en temps réel des mots, caractères et paragraphes
- Estimations du temps de lecture et de parole
- Analyse de la structure des phrases
- Suivi des progrès historiques

Productivité Améliorée:
- Dictée vocale (prend en charge plusieurs langues)
- Mode clair/sombre pour un confort d'écriture

Sécurité des Données:
- Stockage des données en local d'abord
- Pas de stockage en cloud

POUR COMMENCER:
1. Appuyez sur le bouton "+" pour créer votre première activité d'écriture
2. Utilisez des titres descriptifs pour une meilleure organisation
3. Le tableau de bord montre vos activités récentes et statistiques
4. Consultez le panneau d'analyse pour des métriques détaillées`,

            'tutorial2_title': 'Maîtriser l\'Éditeur Countify+',
            'tutorial2_content': `L'éditeur Countify+ fournit un environnement puissant et sans distraction pour tous vos besoins d'écriture. Voici comment en tirer le meilleur parti:

CARACTÉRISTIQUES DE L'ÉDITEUR:

Panneau d'Analyse en Temps Réel:
- Mise à jour du comptage de mots pendant que vous tapez
- Comptage des caractères (avec/sans espaces)
- Analyse des paragraphes et phrases
- Temps estimés de lecture/parole

Outils de Productivité:
- Entrée Vocale: Dictez au lieu de taper (prend en charge plusieurs langues)
- Enregistrement Rapide: Ctrl+S ou appuyez sur le bouton enregistrer
- Préservation du Format: Maintient les paragraphes et espacements
- Mode Clair/Sombre: S'adapte à vos préférences

Gestion de Contenu:
- Archivez au lieu de supprimer pour une meilleure organisation
- Recherchez dans tous vos documents

CARACTÉRISTIQUES DE SÉCURITÉ:
- Boutons rouges indiquent des actions destructrices (supprimer, effacer textes)
- Boutons verts indiquent des actions d'entrée (voix)
- Boutons violets indiquent navigation/enregistrement

MODE VOCAL:
1. Appuyez sur le microphone pour démarrer la saisie vocale
2. Utilisez les commandes inférieures pour gérer la dictée
3. Votre saisie vocale est traitée localement`
        },
        'de': {
            // App UI
            'app_title': 'Countify+',
            'new': 'Neu',
            'back': 'Zurück',
            'save': 'Speichern',
            'cancel': 'Abbrechen',
            'confirm': 'Bestätigen',
            'ok': 'OK',
            'edit': 'Bearbeiten',
            'delete': 'Löschen',
            'archive': 'Archivieren',
            'unarchive': 'Entarchivieren',
            'delete_permanently': 'Endgültig Löschen',

            // Navigation
            'views': 'ANSICHTEN',
            'dashboard': 'Dashboard',
            'today_activities': 'Heutige Aktivitäten',
            'yesterday_activities': 'Gestrige Aktivitäten',
            'writing_history': 'Schreibverlauf',
            'manage': 'VERWALTEN',
            'deleted_activities': 'Gelöschte Aktivitäten',
            'archived_activities': 'Archivierte Aktivitäten',
            'settings': 'EINSTELLUNGEN',
            'language': 'Sprache',
            'app_font': 'App-Schriftart',
            'text_size': 'Textgröße',
            'app_theme': 'App-Design',
            'about': 'ÜBER',
            'license': 'Lizenz',
            'privacy_policy': 'Datenschutzrichtlinie',
            'terms_service': 'Nutzungsbedingungen',
            'version': 'Version',

            // Font options
            'font_poppins': 'Poppins',
            'font_arial': 'Arial',
            'font_helvetica': 'Helvetica',
            'font_georgia': 'Georgia',
            'font_times': 'Times New Roman',
            'font_courier': 'Courier New',

            // Text size options
            'size_small': 'Klein',
            'size_normal': 'Normal',
            'size_large': 'Groß',

            // Theme options
            'theme_light': 'Hell',
            'theme_dark': 'Dunkel',
            'theme_system': 'System',

            // Editor
            'words': 'Wörter',
            'characters': 'Zeichen',
            'chars_no_spaces': 'Zeichen (ohne Leerzeichen)',
            'sentences': 'Sätze',
            'paragraphs': 'Absätze',
            'reading_time': 'Lesezeit',
            'speaking_time': 'Sprechzeit',
            'min': 'min',
            'mins': 'min',
            'start_typing': 'Hier beginnen zu tippen...',
            'predictive_results': 'Einige Ergebnisse sind vorhergesagt und nur als Referenz.',

            // Voice mode
            'voice_mode': 'Sprachmodus',
            'start': 'Starten',
            'pause': 'Pause',
            'stop': 'Stopp',
            'continue': 'Fortsetzen',
            'space': 'Leerzeichen',

            // Modals
            'confirm_action': 'Aktion Bestätigen',
            'confirm_message': 'Sind Sie sicher, dass Sie diese Aktion ausführen möchten?',
            'alert': 'Warnung',
            'alert_message': 'Dies ist eine Warnmeldung.',
            'cannot_save': 'Kann Nicht Speichern',
            'cannot_save_message': 'Dies ist eine Tutorial-Aktivität und kann nicht geändert werden.',
            'cannot_delete': 'Kann Nicht Löschen',
            'cannot_delete_message': 'Dies ist eine Tutorial-Aktivität und kann nicht gelöscht werden.',
            'delete_activity': 'Aktivität Löschen',
            'delete_confirm': 'Sind Sie sicher, dass Sie diese Aktivität löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
            'clear_text': 'Text Löschen',
            'clear_text_confirm': 'Sind Sie sicher, dass Sie den gesamten Text löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
            'unarchive_activity': 'Aktivität Entarchivieren',
            'unarchive_confirm': 'Diese Aktivität ist archiviert. Möchten Sie sie zur Bearbeitung entarchivieren?',
            'delete_permanent_confirm': 'Sind Sie sicher, dass Sie diese Aktivität endgültig löschen möchten? Dies kann nicht rückgängig gemacht werden.',
            'voice_input_error': 'Spracheingabefehler',

            // Empty states
            'no_activities': 'Noch Keine Aktivitäten',
            'create_first_activity': 'Klicken Sie auf die "+" Schaltfläche, um Ihre erste Wortzählaktivität zu erstellen.',
            'create_activity': 'Aktivität Erstellen',
            'no_activities_found': 'Keine Aktivitäten Gefunden',
            'no_today_activities': 'Sie haben heute keine Aktivitäten erstellt.',
            'create_today_activity': 'Aktivität Erstellen',
            'no_yesterday_activities': 'Sie haben gestern keine Aktivitäten erstellt.',
            'no_deleted_activities': 'Ihre gelöschten Aktivitäten werden hier angezeigt.',
            'no_archived_activities': 'Ihre archivierten Aktivitäten werden hier angezeigt.',
            'no_results': 'Keine Ergebnisse Gefunden',
            'no_match_query': 'Keine Aktivitäten entsprechen Ihrer Suche nach',
            'results_for': 'Ergebnisse für',
            'search_results': 'Suchergebnisse',
            'search_placeholder': 'Aktivitäten suchen...',
            'no_results_found': 'Keine Ergebnisse gefunden für',

            // Dates
            'today': 'Heute',
            'yesterday': 'Gestern',
            'morning_activity': 'Morgenaktivität',
            'afternoon_activity': 'Nachmittagsaktivität',
            'evening_activity': 'Abendaktivität',

            // Stats
            'total_words_week': 'Gesamtwörter diese Woche',
            'avg_per_day': 'Durchschnitt pro Tag',
            'most_productive_day': 'Produktivster Tag',

            // Privacy
            'privacy_tracking': 'Datenschutz & Tracking',
            'privacy_description': 'Countify+ verarbeitet Ihr Schreiben und Ihre Sprache lokal auf Ihrem Gerät, um Echtzeit-Berechnungen und Analysen bereitzustellen. Keine Daten werden an externe Server gesendet - wir erfassen oder speichern keine persönlichen Informationen.',
            'i_understand': 'Ich verstehe',
            'decline': 'Ablehnen',
            'saved': 'Gespeichert',

            // Tutorials
            'tutorial1_title': 'Willkommen bei Countify+ - Ihr Schreibanalyse-Hub',
            'tutorial1_content': `Countify+ ist Ihr umfassendes Schreibanalyse-Tool, das entwickelt wurde, um Ihre Schreibproduktivität präzise zu verfolgen, zu analysieren und zu optimieren.

HAUPTMERKMALE:

Erweiterte Analyse:
- Echtzeit-Wort-, Zeichen- und Absatz-Zählung
- Lese- und Sprechzeit-Schätzungen
- Satzstruktur-Analyse
- Verlaufsverfolgung

Erhöhte Produktivität:
- Sprache-zu-Text-Diktat (unterstützt mehrere Sprachen)
- Dunkler/Heller Modus für komfortables Schreiben

Datensicherheit:
- Lokale Datenspeicherung
- Keine Cloud-Speicherung

ERSTE SCHRITTE:
1. Tippen Sie auf die "+" Schaltfläche, um Ihre erste Schreibaktivität zu erstellen
2. Verwenden Sie beschreibende Titel für eine bessere Organisation
3. Das Dashboard zeigt Ihre letzten Aktivitäten und Schreibstatistiken
4. Überprüfen Sie das Analyse-Panel für detaillierte Schreibmetriken`,

            'tutorial2_title': 'Den Countify+ Editor Beherrschen',
            'tutorial2_content': `Der Countify+ Editor bietet eine leistungsstarke, ablenkungsfreie Umgebung für alle Ihre Schreibanforderungen. So nutzen Sie ihn optimal:

EDITOR-MERKMALE:

Echtzeit-Analyse-Panel:
- Wortzählung aktualisiert sich während des Tippens
- Zeichenzählung (mit/ohne Leerzeichen)
- Absatz- und Satzanalyse
- Geschätzte Lese-/Sprechzeiten

Produktivitäts-Tools:
- Spracheingabe: Diktieren statt tippen (unterstützt mehrere Sprachen)
- Schnellspeicherung: Ctrl+S oder Speichern-Schaltfläche
- Format-Erhaltung: Behält Absätze und Abstände bei
- Dunkler/Heller Modus: Passt sich Ihren Vorlieben an

Inhaltsverwaltung:
- Archivieren statt löschen für bessere Organisation
- Durchsuchen aller Dokumente

SICHERHEITSMERKMALE:
- Rote Schaltflächen zeigen zerstörerische Aktionen an (löschen, Texte leeren)
- Grüne Schaltflächen zeigen Eingabeaktionen an (Sprache)
- Violette Schaltflächen zeigen Navigation/Speichern an

SPRACHMODUS:
1. Tippen Sie auf das Mikrofon, um die Spracheingabe zu starten
2. Verwenden Sie die unteren Steuerelemente, um die Diktatur zu verwalten
3. Ihre Spracheingabe wird lokal verarbeitet`
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
            'today_activities': 'Mga Aktibidad Ngayon',
            'yesterday_activities': 'Mga Aktibidad Kahapon',
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
            'license': 'Lisensiya',
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
            'no_today_activities': 'Wala kang nagawang mga aktibidad ngayon.',
            'create_today_activity': 'Gumawa ng Aktibidad',
            'no_yesterday_activities': 'Wala kang nagawang mga aktibidad kahapon.',
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

Advanced na Pagsusuri:
- Real-time na bilang ng salita, character, at talata
- Pagtatantya ng oras ng pagbabasa at pagsasalita
- Pagsusuri sa istruktura ng pangungusap
- Pagsubaybay sa kasaysayan ng pag-unlad

Pinahusay na Produktibidad:
- Voice-to-text dictation (sumusuporta sa maraming wika)
- Dark/light mode para sa komportableng pagsusulat

Seguridad ng Data:
- Local-first na imbakan ng data
- Walang cloud storage

PAANO SIMULAN:
1. Pindutin ang "+" button para gumawa ng iyong unang writing activity
2. Gumamit ng deskriptibong mga pamagat para sa mas mahusay na organisasyon
3. Ang dashboard ay nagpapakita ng iyong mga kamakailang aktibidad at stats sa pagsusulat
4. Tingnan ang analytics panel para sa detalyadong metrics ng pagsusulat`,

            'tutorial2_title': 'Pag-master sa Countify+ Editor',
            'tutorial2_content': `Ang Countify+ editor ay nagbibigay ng isang makapangyarihan ngunit walang istorbong kapaligiran para sa lahat ng iyong pangangailangan sa pagsusulat. Narito kung paano ito gamitin nang husto:

MGA TAMPOK NG EDITOR:

Real-time Analytics Panel:
- Na-update ang word count habang nagta-type ka
- Bilang ng mga character (may o walang spaces)
- Pagsusuri ng talata at pangungusap
- Tinatayang oras ng pagbabasa/pagsasalita

Mga Kasangkapan sa Produktibidad:
- Voice Input: Mag-dikta imbes na mag-type (sumusuporta sa maraming wika)
- Quick Save: Ctrl+S o pindutin ang save button
- Pagpapanatili ng Format: Pinapanatili ang mga talata at spacing
- Dark/Light Mode: Na-aayon sa iyong kagustuhan

Pamamahala ng Nilalaman:
- I-archive imbes na burahin para sa mas mahusay na organisasyon
- Maghanap sa lahat ng iyong mga dokumento

MGA TAMPOK NG KALIGTASAN:
- Mga pulang button ay nagpapahiwatig ng mga mapaminsalang aksyon (pagbura, pag-clear ng teksto)
- Mga berdeng button ay nagpapahiwatig ng mga aksyon sa input (voice)
- Mga purple na button ay nagpapahiwatig ng navigation/pag-save

VOICE MODE:
1. Pindutin ang microphone para simulan ang voice input
2. Gamitin ang bottom sheet controls para pamahalaan ang dikta
3. Ang iyong voice input ay pinoproseso sa lokal`
        },
        'war': {
// App UI
'app_title': 'Countify+',
'new': 'Bag-o',
'back': 'Balik',
'save': 'Tipig',
'cancel': 'Bawi',
'confirm': 'Siguroha',
'ok': 'Sige',
'edit': 'Usba',
'delete': 'Pawara',
'archive': 'I-arkibo',
'unarchive': 'Bungkaga tikang ha arkibo',
'delete_permanently': 'Waray na gud pagbalik',

// Navigation
'views': 'PANMIRING',
'dashboard': 'Dashboard',
'today_activities': 'Mga Binuhat Yana nga Adlaw',
'yesterday_activities': 'Mga Binuhat Kakulop',
'writing_history': 'Kasaysayan han Pagsurat',
'manage': 'DUMARA',
'deleted_activities': 'Ginpara nga mga Binuhat',
'archived_activities': 'Gin-arkibo nga mga Binuhat',
'settings': 'SETTINGS',
'language': 'Pinulungan',
'app_font': 'Font han App',
'text_size': 'Kadako han Teksto',
'app_theme': 'Tema han App',
'about': 'MAHITUNGOD',
            'license': 'Lisensya',
'privacy_policy': 'Polisiya ha Pagkapribado',
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
'size_small': 'Gutí-ay',
'size_normal': 'Normal',
'size_large': 'Dako',

// Theme options
'theme_light': 'Masanag',
'theme_dark': 'Madulom',
'theme_system': 'Sistema',

// Editor
'words': 'Mga Pulong',
'characters': 'Mga Karakter',
'chars_no_spaces': 'Karakter (waray espasyo)',
'sentences': 'Mga Sentensya',
'paragraphs': 'Mga Talata',
'reading_time': 'Panahon ha Pagbasa',
'speaking_time': 'Panahon ha Pagyakan',
'min': 'min',
'mins': 'minuto',
'start_typing': 'Pagtikang pagsurat dinhi...',
'predictive_results': 'An iba nga resulta ginbabase la ha prediksyon ngan para la ha reperensya.',

// Voice mode
'voice_mode': 'Modo hin Tingog',
'start': 'Sugdi',
'pause': 'Pahuway',
'stop': 'Undang',
'continue': 'Padayon',
'space': 'Espasyo',

// Modals
'confirm_action': 'Siguroha an Bubuhaon',
'confirm_message': 'Sigurado ka ba nga bubuhaton mo ini?',
'alert': 'Pahimangno',
'alert_message': 'Ini in pahimangno nga mensahe.',
'cannot_save': 'Diri Matitipig',
'cannot_save_message': 'Ini nga buhat usa la nga panutdoan ngan diri mababag-o.',
'cannot_delete': 'Diri Mapapara',
'cannot_delete_message': 'Ini nga buhat usa la nga panutdoan ngan diri mapapara.',
'delete_activity': 'Paparaon an Binuhat',
'delete_confirm': 'Sigurado ka ba nga karuyag mo paparaon ini nga buhat? Diri na ini mababalik.',
'clear_text': 'Kuhaa an Teksto',
'clear_text_confirm': 'Sigurado ka ba nga karuyag mo kuhaon an ngatanan nga teksto? Diri na ini mababalik.',
'unarchive_activity': 'Bungkaga tikang ha Arkibo',
'unarchive_confirm': 'Ini nga buhat naka-arkibo. Karuyag mo ba bungkagon agud mausab?',
'delete_permanent_confirm': 'Sigurado ka ba nga karuyag mo gud paparaon ini nga buhat? Diri na ini mababalik.',
'voice_input_error': 'Sayop ha Tingog nga Input',

// Empty states
'no_activities': 'Waray pa aktibidad',
'create_first_activity': 'Pindota an "+" agud makaghimo han imo syahan nga binuhi ha pulong.',
'create_activity': 'Paghimo hin aktibidad',
'no_activities_found': 'Waray Nahipapakita nga Binuhi',
'no_today_activities': 'Waray ka pa binuhat yana nga adlaw.',
'create_today_activity': 'Himo yana na aktibidad',
'no_yesterday_activities': 'Waray ka binuhat kahapon.',
'no_deleted_activities': 'Makikita dinhi an imo ginpapara nga mga aktibidad.',
'no_archived_activities': 'Makikita dinhi an imo gin-arkibo nga mga aktibidad.',
'no_results': 'Waray Nahipapakita',
'no_match_query': 'Waray aktibidad nga nagtutugma ha',
'results_for': 'mga resulta para ha',
'search_results': 'Mga Resulta han Pamiling',
'search_placeholder': 'Pamiling hin mga binuhi...',
'no_results_found': 'Waray resulta nga nahipapakita para ha',

// Dates
'today': 'Yana nga Adlaw',
'yesterday': 'Kakulop',
'morning_activity': 'Aktibidad ha Aga',
'afternoon_activity': 'Aktibidad ha Kulop',
'evening_activity': 'Aktibidad ha Gab-i',

// Stats
'total_words_week': 'Kabug-osan nga mga pulong hini nga semana',
'avg_per_day': 'Averahi kada adlaw',
'most_productive_day': 'Pinakamasinabuton nga adlaw',

// Privacy
'privacy_tracking': 'Pagkapribado ngan Pagsubay',
'privacy_description': 'Ginhihimo han Countify+ an imo mga sinurat ngan tingog ha sulod la han imo device para ha real-time nga kalkulasyon ngan analisis. Waray data nga ginsusumat ha gawas nga server — diri kami nagtitipig o nagkukolekta hin bisan ano nga personal nga impormasyon.',
'i_understand': 'Maaram ako',
'decline': 'Bumalos',
'saved': 'Naitipig na',

// Tutorials
'tutorial1_title': 'Dayon ha Countify+ — Imo Sentro ha Analisis han Pagsurat',
'tutorial1_content': `An Countify+ amo an imo bug-os nga gamit ha pagsubay, pag-analisa, ngan pagpaopay han imo produktibidad ha pagsurat ha eksakto nga paagi.

PANGUNAHI NGA MGA HIMOON:

Abanse nga Analisis:
- Real-time nga ihap han mga pulong, karakter, ngan talata
- Tantiya ha oras han pagbasa ngan pagyakan
- Analisis han estruktura han mga sentensya
- Pagsubay han imo pag-uswag ha pagsurat

Pagpauswag han Produktibidad:
- Tingog ngadto ha teksto nga pagsurat (nagsusustenir hin damo nga pinulungan)
- Madulom/masanag nga tema para ha komportable nga pagsurat

Seguridad han Datos:
- Lokal la nga panitipigan han datos
- Waray paggamit hin cloud storage

PAGTIKANG:
1. Pindota an "+" agud maghimo han imo syahan nga binuhi ha pagsurat
2. Gumamit hin deskriptibo nga titulo para ha mas maupay nga pag-organisa
3. Ipakita han dashboard an imo mga bag-o nga binuhi ngan stats han pagsurat
4. Tan-awa an analitik nga panel para ha detalye han metrics han imo sinurat`,

'tutorial2_title': 'Pagmaster han Countify+ Editor',
'tutorial2_content': `An editor han Countify+ naghahatag hin kusog pero waray samok nga palibot para ha imo ngatanan nga kinahanglan ha pagsurat. Ini an mga paagi agud mas magamit mo ini hin bug-os:

MGA HIMOON HAN EDITOR:

Real-time Analytics Panel:
- Ihap han pulong samtang nagsusurat ka
- Ihap han karakter (mayda/waray espasyo)
- Analisis han mga talata ngan sentensya
- Tantiya ha oras han pagbasa/pagyakan

Mga Gamit ha Produktibidad:
- Tingog nga Input: Pagsurat pinaagi han tingog (nagsusustenir hin damo nga pinulungan)
- Madagmit nga Tipig: Ctrl+S o pindota an save button
- Pagpabilin han Format: Gintitipigan an mga talata ngan espasyo
- Masanag/Madulom nga Tema: Nagaayon ha imo karuyag

Pagdumara han Sulod:
- I-arkibo imbes paparaon para mas organisado
- Pamiling ha ngatanan mo nga dokumento

MGA SEGURIDAD NGA HIMOON:
- Pula nga button: Para ha peligroso nga mga buhat (paparaon, kuhaa an teksto)
- Berde nga button: Para ha pagsulod nga mga buhat (tingog)
- Kulor purpura nga button: Para ha pagliwat/panigtipig

MODO HIN TINGOG:
1. Pindota an mikropono para magtikang
2. Gamiton an buttom sheet controls para magdumara han tingog nga input
3. An imo tingog nga input ginproseso ha lokal la nga device`
        }
    };

    // Language metadata including RTL support
    const languageMetadata = {
        'en': {
            code: 'en-US',
            name: 'English',
            nativeName: 'English',
            flag: '🇺🇲',
            rtl: false
        },
        'es': {
            code: 'es-ES',
            name: 'Spanish',
            nativeName: 'Español',
            flag: '🇪🇸',
            rtl: false
        },
        'fr': {
            code: 'fr-FR',
            name: 'French',
            nativeName: 'Français',
            flag: '🇫🇷',
            rtl: false
        },
        'de': {
            code: 'de-DE',
            name: 'German',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            rtl: false
        },
        'tl': {
            code: 'fil-PH',
            name: 'Tagalog',
            nativeName: 'Tagalog',
            flag: '🇵🇭',
            rtl: false
        },
        'war': {
            code: 'fil-PH',
            name: 'Waray-Waray',
            nativeName: 'Winaray',
            flag: '🇵🇭',
            rtl: false
        }
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
        modal.setAttribute('aria-label', getTranslation('language'));

        const content = document.createElement('div');
        content.className = 'countify-language-modal-content glass';

        const heading = document.createElement('h3');
        heading.textContent = getTranslation('language');

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'countify-language-options';

        // Create language options
        const supportedLanguages = ['en', 'es', 'fr', 'de', 'tl', 'war', 'ar', 'zh', 'ja', 'ru'];

        supportedLanguages.forEach(lang => {
            const meta = languageMetadata[lang];
            if (!meta) return;

            const button = document.createElement('button');
            button.className = `countify-language-option ${currentLanguage === lang ? 'active' : ''}`;
            button.dataset.lang = lang;
            button.setAttribute('aria-label', `${meta.name} (${meta.nativeName})`);

            const flag = document.createElement('span');
            flag.className = 'countify-language-flag';
            flag.textContent = meta.flag;
            flag.setAttribute('aria-hidden', 'true');

            const span = document.createElement('span');
            span.className = 'countify-language-name';
            span.textContent = meta.name;

            button.appendChild(flag);
            button.appendChild(span);
            optionsContainer.appendChild(button);
        });

        const closeButton = document.createElement('button');
        closeButton.className = 'btn btn-primary countify-language-close';
        closeButton.textContent = getTranslation('ok');
        closeButton.setAttribute('aria-label', getTranslation('ok'));

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
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
}

.countify-language-modal.show {
  opacity: 1;
  visibility: visible;
}

.countify-language-modal-content {
  width: 100%;
  max-width: 520px;
  max-height: 88vh;
  padding: 28px 24px 20px;
  border-radius: 38px 38px 0 0;
  overflow-y: auto;
  background: linear-gradient(to top, 
    color-mix(in srgb, var(--surface) 95%, white),
    color-mix(in srgb, var(--surface) 100%, black) 2%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5), /* Top inner shine */
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 -1px 6px rgba(0, 0, 0, 0.05); /* Base lift */
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  backdrop-filter: none;
}

.countify-language-modal.show .countify-language-modal-content {
  transform: translateY(0);
}

.countify-language-modal h3 {
  margin-bottom: 20px;
  color: var(--text-primary);
  text-align: center;
  font-size: 1.375rem;
  font-weight: 600;
}

.countify-language-options {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.countify-language-option {
  padding: 16px 18px;
  border-radius: 23px;
  background: linear-gradient(to top,
    color-mix(in srgb, var(--gray-100) 96%, white),
    var(--gray-50)
  );
  color: var(--text-primary);
  border: 1px solid var(--gray-300);
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.countify-language-option:hover {
  background: linear-gradient(to top,
    var(--gray-200),
    var(--gray-100)
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 3px 6px rgba(0, 0, 0, 0.1);
}

.countify-language-option.active {
  background: linear-gradient(to top,
    var(--primary-600),
    color-mix(in srgb, var(--primary-600), white 10%)
  );
  color: #fff;
  border-color: var(--primary-600);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    0 4px 8px rgba(139, 92, 246, 0.4);
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
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 17px;
  background: linear-gradient(to top,
    var(--primary-600),
    color-mix(in srgb, var(--primary-600), white 10%)
  );
  color: white;
  cursor: pointer;
  margin-top: 12px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: background-color 0.3s ease;

  /* Center the text */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.countify-language-close:hover {
  background-color: var(--primary-700);
}

/* Dark Mode Support */
[data-theme="dark"] .countify-language-modal-content {
  background: linear-gradient(to top,
    color-mix(in srgb, var(--surface) 95%, black),
    color-mix(in srgb, var(--surface) 90%, white) 2%
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 -1px 6px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .countify-language-option {
  background-color: var(--gray-800);
  border-color: var(--gray-700);
  color: var(--text-primary);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] .countify-language-option:hover {
  background-color: var(--gray-700);
}

[data-theme="dark"] .countify-language-option.active {
  background-color: var(--primary-600);
  color: white;
  border-color: var(--primary-600);
}

[data-theme="dark"] .countify-language-close {
  background: linear-gradient(to top,
    var(--primary-700),
    color-mix(in srgb, var(--primary-700), white 10%)
  );
}

/* RTL support */
[dir="rtl"] .countify-language-option {
  text-align: right;
}

[dir="rtl"] .countify-language-name {
  margin-right: 12px;
  margin-left: 0;
}
[data-theme="dark"] .countify-language-option {
  background: linear-gradient(to top,
    var(--gray-800),
    color-mix(in srgb, var(--gray-800), white 4%)
  );
  border-color: var(--gray-700);
  color: var(--text-primary);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 1px 2px rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] .countify-language-option:hover {
  background: linear-gradient(to top,
    var(--gray-700),
    var(--gray-800)
  );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .countify-language-option.active {
  background: linear-gradient(to top,
    var(--primary-600),
    color-mix(in srgb, var(--primary-600), white 10%)
  );
  border-color: var(--primary-600);
  color: white;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 8px rgba(139, 92, 246, 0.5);
}
`;
        document.head.appendChild(style);
    };

    const getTranslation = function(key, lang = currentLanguage) {
        if (!key || typeof key !== 'string') {
            console.warn('Invalid translation key:', key);
            return '';
        }

        // First try requested language
        if (translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }

        // Fallback to default language
        if (translations[defaultLanguage] && translations[defaultLanguage][key]) {
            console.warn(`Translation missing for key "${key}" in language "${lang}", using default language`);
            return translations[defaultLanguage][key];
        }

        // If still not found, return the key itself
        console.warn(`Translation missing for key "${key}" in all languages`);
        return key;
    };

    const applyRTLStyles = function(lang) {
        const isRTL = languageMetadata[lang]?.rtl || false;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    };

    // Public API
    return {
        getTranslation: getTranslation,

        getLanguageCode: function(lang) {
            return languageMetadata[lang]?.code || 'en-US';
        },

        getCurrentLanguage: function() {
            return currentLanguage;
        },

        getSupportedLanguages: function() {
            return Object.keys(languageMetadata).map(lang => ({
                code: lang,
                name: languageMetadata[lang].name,
                nativeName: languageMetadata[lang].nativeName,
                flag: languageMetadata[lang].flag,
                rtl: languageMetadata[lang].rtl
            }));
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
                    applyRTLStyles(lang);

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

        setCurrentLanguage: function(lang) {
            if (translations[lang]) {
                currentLanguage = lang;
                applyRTLStyles(lang);

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

        getTutorialContent: function(tutorialId, lang = currentLanguage) {
            const tutorialKey = `tutorial${tutorialId}_`;

            return {
                title: getTranslation(tutorialKey + 'title', lang),
                content: getTranslation(tutorialKey + 'content', lang)
            };
        },

        init: function(savedLanguage) {
            try {
                // First try the passed parameter
                if (savedLanguage && translations[savedLanguage]) {
                    currentLanguage = savedLanguage;
                    applyRTLStyles(savedLanguage);
                    return;
                }

                // Fallback to localStorage
                const settings = localStorage.getItem('countify-settings');
                if (settings) {
                    try {
                        const parsedSettings = JSON.parse(settings);
                        if (parsedSettings.language && translations[parsedSettings.language]) {
                            currentLanguage = parsedSettings.language;
                            applyRTLStyles(parsedSettings.language);
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
                        applyRTLStyles(browserLang);
                    } else {
                        // Try to find a matching base language (e.g. 'en-US' -> 'en')
                        const baseLang = browserLang.split('-')[0];
                        if (translations[baseLang]) {
                            currentLanguage = baseLang;
                            applyRTLStyles(baseLang);
                        }
                    }
                }
            } catch (e) {
                console.error('Error initializing language:', e);
                currentLanguage = defaultLanguage;
                applyRTLStyles(defaultLanguage);
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