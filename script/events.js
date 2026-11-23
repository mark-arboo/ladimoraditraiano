document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enter-button').addEventListener('click', function() {
        showMenuPanel();
    });

    document.querySelectorAll('.copy-button').forEach(button => {
        let resetTimer;
        button.addEventListener('click', async function() {
            const value = document.getElementById(button.getAttribute('aria-describedby')).textContent.trim();
            const status = button.closest('.panel').querySelector('.copy-status');
            clearTimeout(resetTimer);
            button.classList.remove('copied');
            status.removeAttribute('data-key');
            status.textContent = '';

            try {
                if (!navigator.clipboard) {
                    throw new Error('Clipboard API is not available');
                }
                await navigator.clipboard.writeText(value);
                button.classList.add('copied');
                clearTimeout(resetTimer);
                resetTimer = setTimeout(() => button.classList.remove('copied'), 2000);
            } catch (error) {
                console.error('Unable to copy value:', error);
                status.setAttribute('data-key', 'copy_error');
                status.textContent = translations.copy_error || 'Unable to copy.';
            }
        });
    });

    // Inizializza l'app controllando se è primo caricamento o refresh
    initializeApp();
});