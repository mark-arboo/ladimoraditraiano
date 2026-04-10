/**
 * Controlla se è la prima volta che l'applicazione viene caricata
 * o se è un refresh di pagina
 * @returns {boolean} true se è la prima volta, false se è un refresh
 */
function isFirstLoad() {
    // Verifica usando Navigation API moderna
    const navigationEntries = performance.getEntriesByType('navigation');
    let isRefresh = false;
    
    if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0];
        isRefresh = navEntry.type === 'reload';
    } else {
        // Fallback per browser più vecchi
        isRefresh = performance.navigation && performance.navigation.type === performance.navigation.TYPE_RELOAD;
    }
    
    // Verifica anche il sessionStorage per distinguere tra nuova sessione e refresh
    const hasSessionData = sessionStorage.getItem('appLoaded');
    
    if (!hasSessionData && !isRefresh) {
        // Prima volta in questa sessione
        sessionStorage.setItem('appLoaded', 'true');
        return true;
    }
    
    return false;
}

/**
 * Inizializza l'applicazione in base al tipo di caricamento
 */
function initializeApp() {
    if (isFirstLoad()) {
        onFirstLoad();
    } else {
        onPageRefresh();
    }
}

/**
 * Logica eseguita al primo caricamento
 */
function onFirstLoad() {
    // Qui puoi aggiungere logica specifica per il primo caricamento
    // Ad esempio: tutorial, animazioni di benvenuto, etc.
    showSplashPanel();
}

/**
 * Logica eseguita durante il refresh
 */
function onPageRefresh() {
    // Qui puoi aggiungere logica per il refresh
    // Ad esempio: ripristinare stato, saltare intro, etc.
    
    // Controlla se c'era un pannello salvato
    const lastPanel = sessionStorage.getItem('lastActivePanel');
    
    if (lastPanel) {
        switch(lastPanel) {
            case 'menu':
                showMenuPanel();
                break;
            case 'contacts':
                showContactsPanel();
                break;
            case 'language':
                showLanguagePanel();
                break;
            case 'welcome':
                showWelcomePanel();
                break;  
            case 'checkin_out':
                showCheckinOutPanel();
                break;
            case 'wifi':
                showWifiPanel();
                break;      
            case 'house_rules':
                showHouseRulesPanel();
                break;
            case 'restaurant':
                showRestaurantPanel();
                break;    
            case 'emergency':
                showEmergencyPanel();
                break;        
            default:
                showSplashPanel();
        }
    } else {
        showSplashPanel();
    }
}

function showEmergencyPanel() {
    hideAllPanels();
    document.getElementById('emergency-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'emergency');
}

function showRestaurantPanel() {
    hideAllPanels(); 
    document.getElementById('restaurant-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'restaurant');
}

function showHouseRulesPanel() {
    hideAllPanels();
    document.getElementById('house-rules-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'house_rules');
}


function showWifiPanel() {
    hideAllPanels();
    document.getElementById('wifi-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'wifi');
}

function showCheckinOutPanel() {
    hideAllPanels();
    document.getElementById('checkin-out-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'checkin_out');
}

function showWelcomePanel() {
    hideAllPanels();
    document.getElementById('welcome-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'welcome');
}

function showSplashPanel() {
    hideAllPanels();
    document.getElementById('splash-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'splash');
}

function showMenuPanel() {
    // carica il menu leggendo il json contenuto nel file /json/menu.json e memorizzandolo nella variabile globale
    hideAllPanels();
   
    // scorre l'array menuInfo e crea l'html da aggiungere nel div con id content-menu
    const contentMenu = document.getElementById('content-menu');
    contentMenu.innerHTML = ""; // pulisce il contenuto precedente";
    menuInfo.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'content-menu-icon';
        menuItem.innerHTML = `
            <div class="icon-container" onclick="${item.link}">
            <i class="fa ${item.icon}" aria-hidden="true"></i>
            </div>
            <div class="icon-text" data-key="${item.text_key}">${item.text_key.toUpperCase()}</div>
        `;
        contentMenu.appendChild(menuItem);
    });
            
    document.getElementById('menu-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'menu');
}

function showContactsPanel() {
    hideAllPanels();
    document.getElementById('contacts-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'contacts');
}

function showLanguagePanel() {
    hideAllPanels();
    document.getElementById('language-screen').style.display = 'block';
    sessionStorage.setItem('lastActivePanel', 'language');
}

function hideAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
    });
}   

