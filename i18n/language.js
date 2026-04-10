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
    
    // Lista delle chiavi che contengono HTML e devono essere renderizzate
    const htmlKeys = ['contact_text', 'welcome_text', 'checkin', 'checkout','house_rules_list', 'checkout_list', 'wifi_text', 'emergency_text'];
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[key]) {
            // Usa innerHTML per le chiavi che contengono HTML, innerText per le altre
            if (htmlKeys.includes(key)) {
                elem.innerHTML = translations[key];
            } else {
                elem.innerText = translations[key];
            }
        }
    });
}