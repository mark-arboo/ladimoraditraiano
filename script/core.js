function showSplashPanel() {
    hideAllPanels();
    document.getElementById('splash-screen').style.display = 'block';
}

function showMenuPanel() {
    hideAllPanels();
    document.getElementById('menu-screen').style.display = 'block';
}

function showContactsPanel() {
    hideAllPanels();
    document.getElementById('contacts-screen').style.display = 'block';
}

function hideAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
    });
}   

