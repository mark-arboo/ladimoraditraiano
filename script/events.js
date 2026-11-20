document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enter-button').addEventListener('click', function() {
        showMenuPanel();
    });

    // Inizializza l'app controllando se è primo caricamento o refresh
    initializeApp();
});