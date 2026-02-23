let translations = {};

document.addEventListener('DOMContentLoaded', function() {
    
    const savedLang = localStorage.getItem('lang') || 'en';
    loadTranslations(savedLang);

});


async function loadTranslations(savedLang) {
    try {
        // 1. "Scarica" il file (percorso corretto nella cartella i18n)
        const response = await fetch('./i18n/language-' + savedLang + '.json');
        
        // 2. Controlla se la risposta è ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - File non trovato: language-${savedLang}.json`);
        }
        
        // 3. Converte il contenuto in un oggetto JavaScript
        translations = await response.json();
                
        // 4. Applica immediatamente le traduzioni agli elementi esistenti
        translate(savedLang);
       
    } catch (error) {
        console.error("Errore nel caricamento del JSON:", error);
        translate(savedLang);
    }
}

function translate(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        // Correzione: translations contiene direttamente le traduzioni, non nested per lingua
        if (translations[key]) {
            elem.innerText = translations[key];
        }
    });
}