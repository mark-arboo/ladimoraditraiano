document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enter-button').addEventListener('click', function() {
        showMenuPanel();
    });

    document.getElementById('contact-button').addEventListener('click', function() {
        showContactsPanel();
    });

    document.getElementById('language-button').addEventListener('click', function() {
        showLanguagePanel();
    });

    // Inizializza l'app controllando se è primo caricamento o refresh
    initializeApp();
});