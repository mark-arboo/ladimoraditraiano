let menuLoaded = false;
let houseRulesLoaded = false;
let restaurantLoaded = false;
let reviewLoaded = false;
let cafeLoaded = false;

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
            case 'location':
                showLocationPanel();
                break;    
            case 'review':
                showReviewPanel();
                break;    
            case 'recycling':
                showRecyclingPanel();
                break;     
            case 'transport':
                showTransportPanel();
                break;  
            case 'cafes':
                showCafePanel();
                break;        
            default:
                showSplashPanel();
        }
    } else {
        showSplashPanel();
    }
}


function showCafePanel() {
    hideAllPanels();

    // legge il file json dei cafe e monta dinamicamente il pannello
    if (!cafeLoaded) {
        console.log('Caricamento cafe dal JSON');
        const cafeContainer = document.getElementById('cafe-list');
        cafeContainer.innerHTML = ''; // Pulisce il contenuto prima di aggiungere gli elementi
        cafeObj.forEach(cafe => {
            cafeContainer.innerHTML = cafeContainer.innerHTML +  `
                <div class="restaurant-card">
                    <div class="restaurant-image" style="background-image: url('${cafe.image}');"></div>
                    <div class="restaurant-content">
                    <div class="restaurant-header-new">
                        <h3 class="restaurant-name">${cafe.name}</h3>
                        <a href="${cafe.map}" target="_blank" class="restaurant-map-link">
                        <i class="fa fa-map" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div class="restaurant-info">
                        <div class="restaurant-detail">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>${cafe.street}</span>
                        </div>
                        <div class="restaurant-detail">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <a href="tel:${cafe.tel.replaceAll(' ', '')}">${cafe.tel}</a>
                        </div>
                    </div>
                    </div>
                </div>  
            `;
        });
        cafeLoaded = true;
        translate(localStorage.getItem('lang') || 'en', cafeContainer);
    } 

    document.getElementById('cafe-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none';
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'cafes');
}



function showTransportPanel() {
    hideAllPanels();
    document.getElementById('transport-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none';
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'transport');
}


function showRecyclingPanel() {
    hideAllPanels();
    document.getElementById('recycling-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'recycling');
}   

function showReviewPanel() {
    hideAllPanels();

    if (!reviewLoaded) {
        console.log('Caricamento review dal JSON');
        const reviewContainer = document.getElementById('reviews-list');
        reviewContainer.innerHTML = ''; // Pulisce il contenuto prima di aggiungere gli elementi
        reviewObj.forEach(review => {
            reviewContainer.innerHTML = reviewContainer.innerHTML +  `
                <div class="review-card">
                    <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">
                         <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <div class="reviewer-details">
                        <h4 class="reviewer-name">${review.name}</h4>
                        <div class="reviewer-country">
                            <img src="./img/${review.flag}" alt="${review.flag}">
                            <span>${review.country}</span>
                        </div>
                        </div>
                    </div>
                    <div class="review-score">
                        <div class="score-value">${review.score}</div>
                    </div>
                    </div>
                    <div class="review-date"><span data-key="stay">Soggiorno</span>: ${review.date}</div>
                    <div class="review-text">
                    ${review.text}
                    </div>
                 </div>       
            `;
        });
        reviewLoaded = true;
        translate(localStorage.getItem('lang') || 'en', reviewContainer);
    }



    document.getElementById('review-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none';
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'review');
}

function showLocationPanel() {
    hideAllPanels();
    document.getElementById('location-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'location');
}

function showEmergencyPanel() {
    hideAllPanels();
    document.getElementById('emergency-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'emergency');
}

function showRestaurantPanel() {
    hideAllPanels(); 

    // legge il file json dei ristoranti e monta dinamicamente il pannello
    if (!restaurantLoaded) {
        console.log('Caricamento restaurant dal JSON');
        const restaurantContainer = document.getElementById('restaurant-list');
        restaurantContainer.innerHTML = ''; // Pulisce il contenuto prima di aggiungere gli elementi
        restaurantObj.forEach(rule => {
            restaurantContainer.innerHTML = restaurantContainer.innerHTML +  `
            <div class="restaurant-card">
            <div class="restaurant-image" style="background-image: url('${rule.image}');"></div>
            <div class="restaurant-content">
              <div class="restaurant-header-new">
                <h3 class="restaurant-name">${rule.name}</h3>
                <a href="${rule.map}" target="_blank" class="restaurant-map-link">
                  <i class="fa fa-map" aria-hidden="true"></i>
                </a>
              </div>
              <div class="restaurant-info">
                <div class="restaurant-detail">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>${rule.street}</span>
                </div>
                <div class="restaurant-detail">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:${rule.tel.replaceAll(' ', '')}">${rule.tel}</a>
                </div>
              </div>
            </div>
          </div>       
            `;
        });
        restaurantLoaded = true;
        translate(localStorage.getItem('lang') || 'en', restaurantContainer);
    } 
    document.getElementById('restaurant-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'restaurant');
}

function showHouseRulesPanel() {
    hideAllPanels();

    // legge il file json delle house rules e monta dinamicamente il pannello
    if (!houseRulesLoaded) {
        console.log('Caricamento house rules dal JSON');
        const houseRulesContainer = document.getElementById('house-rules-list');
        houseRulesContainer.innerHTML = ''; // Pulisce il contenuto prima di aggiungere gli elementi
        house_rules.forEach(rule => {
            houseRulesContainer.innerHTML = houseRulesContainer.innerHTML +  `
            <div class="house-rule-item">
                <div class="house-rule-icon">
                    <i class="${rule.icon}" aria-hidden="true"></i>
                </div>
                <div class="house-rule-text" data-key="${rule['data-key']}">
                    ${rule['data-key'].toUpperCase()}
                </div>
          </div>          
            `;
        });
        houseRulesLoaded = true;
        translate(localStorage.getItem('lang') || 'en', houseRulesContainer);
    }   

    document.getElementById('house-rules-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'house_rules');
}


function showWifiPanel() {
    hideAllPanels();
    document.getElementById('wifi-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'wifi');
}

function showCheckinOutPanel() {
    hideAllPanels();
    document.getElementById('checkin-out-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'checkin_out');
}

function showWelcomePanel() {
    hideAllPanels();
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'block'; // Mostra il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'welcome');
}

function showSplashPanel() {
    hideAllPanels();
    document.getElementById('splash-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'none'; // Nasconde il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'none'; // Nasconde il pulsante per tornare al menu   
    sessionStorage.setItem('lastActivePanel', 'splash');
}

function showMenuPanel() {
    // carica il menu leggendo il json contenuto nel file /asset/menu.js
    hideAllPanels();

    // Monta il pannello del menu dinamicamente usando il JSON
    if (!menuLoaded) {
        console.log('Caricamento menu dal JSON');
        const menuContainer = document.getElementById('content-menu');
        menuContainer.innerHTML = ''; // Pulisce il contenuto prima di aggiungere gli elementi
        menuObj.forEach(item => {
            menuContainer.innerHTML = menuContainer.innerHTML +  `
            <div class="content-menu-icon">
                <div class="icon-container" onclick="${item.function}" >
                    <i class="${item.icon}" aria-hidden="true"></i>
                </div>
                <div class="icon-text" data-key="${item['data-key']}">${item['data-key'].toUpperCase()}</div>
            </div>            
            `;
        });
        menuLoaded = true;
        translate(localStorage.getItem('lang') || 'en', document.getElementById('content-menu'));
    }

    document.getElementById('menu-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'block'; // Mostra il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'none'; // Nasconde il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'menu');
}

function showContactsPanel() {
    hideAllPanels();
    document.getElementById('contacts-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'block'; // Mostra il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'none'; // Nasconde il pulsante per tornare al menu
    sessionStorage.setItem('lastActivePanel', 'contacts');
}

function showLanguagePanel() {
    hideAllPanels();
    document.getElementById('language-screen').style.display = 'block';
    document.getElementById('go-splash-button').style.display = 'block'; // Mostra il pulsante per tornare alla splash
    document.getElementById('go-menu-button').style.display = 'none'; // Nasconde il pulsante per tornare al menu
    
    sessionStorage.setItem('lastActivePanel', 'language');
}



function hideAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
    });
}   


