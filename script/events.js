document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enter-button').addEventListener('click', function() {
        showMenuPanel();
    });

    document.getElementById('contact-button').addEventListener('click', function() {
        showContactsPanel();
    });

 
   showSplashPanel();   
});