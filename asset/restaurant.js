const restaurantObj = [
    {
        "image": "./img/restaurant/vicoletto.png",
        "name": "Hostaria del Vicoletto",
        "map": "https://www.google.it/maps/place/Hostaria+del+Vicoletto/data=!4m7!3m6!1s0x1325236626c0e53f:0x7ae9d08fa2fc4b37!8m2!3d41.2866667!4d13.255!16s%2Fg%2F1v5drvct!19sChIJP-XAJmYjJRMRN0v8oo_Q6Xo?authuser=0&hl=it&rclk=1",
        "street": "Via del Quartiere, 9",
        "tel": "+39 0773 703781"    
    },
    {
        "image": "./img/restaurant/laspasella.png",
        "name": "Hostaria La Spasella 2.0",
        "map": "https://www.google.it/maps/place/Hostaria+La+Spasella+2.0/data=!4m7!3m6!1s0x132523e370dd1569:0xe6f9e86e3a541e85!8m2!3d41.288296!4d13.2506233!16s%2Fg%2F11nx1ht6b2!19sChIJaRXdcOMjJRMRhR5UOm7o-eY?authuser=0&hl=it&rclk=1",
        "street": "Via Lungolinea Pio VI",
        "tel": "+39 0773 59126"    
    },
    {
        "image": "./img/restaurant/ostematto.png",
        "name": "L'Oste Matto",
        "map": "https://www.google.it/maps/place/L%E2%80%99Oste+Matto/data=!4m7!3m6!1s0x132523232cd41ec1:0x8cee934a08fc3cee!8m2!3d41.2921306!4d13.2480667!16s%2Fg%2F11f130wjzg!19sChIJwR7ULCMjJRMR7jz8CEqT7ow?authuser=0&hl=it&rclk=1",
        "street": "Corso Anita Garibaldi, 98-100",
        "tel": "+39 348 350 0910"    
    },
    {
        "image": "./img/restaurant/ilgranchio.png",
        "name": "Il Granchio",
        "map": "https://www.google.it/maps/place/Il+Granchio/@41.2912292,13.2470598,17z/data=!4m17!1m9!2m8!1sRistoranti!3m5!2sVia+Traiano!3s0x132523689f011981:0x18e99287f92a0a3d!4m2!1d13.2549574!2d41.2864409!6e5!3m6!1s0x4067b678308c2595:0x3c38ad170f2e9f16!8m2!3d41.2912292!4d13.2518234!15sCgpSaXN0b3JhbnRpWgwiCnJpc3RvcmFudGmSAQpyZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5VZDI5NUxUWm5SUkFC4AEA-gEECAAQRg!16s%2Fg%2F11b6c67wh6?hl=it&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
        "street": "Via S. Francesco Nuovo, 80",
        "tel": "+39 0773 709696"    
    },
    {
        "image": "./img/restaurant/centroittico.png",
        "name": "Centro Ittico da Ernesto",
        "map": "https://www.google.it/maps/place/Centro+Ittico+da+Ernesto/@41.2845026,13.2431119,17z/data=!4m17!1m9!2m8!1sRistoranti!3m5!2sVia+Traiano!3s0x132523689f011981:0x18e99287f92a0a3d!4m2!1d13.2549574!2d41.2864409!6e5!3m6!1s0x1325236c5a549771:0xa449549b36eed15e!8m2!3d41.2845026!4d13.2474893!15sCgpSaXN0b3JhbnRpWgwiCnJpc3RvcmFudGmSAQpyZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJtZGtsRExVeEJFQUXgAQD6AQQIABBH!16s%2Fg%2F11bzs3pk3l?hl=it&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
        "street": "Piazzale Lido",
        "tel": "+39 0773 723043"    
    },
    {
        "image": "./img/restaurant/tavernabafio.png",
        "name": "La Taverna di Bafio",
        "map": "https://www.google.it/maps/place/La+Taverna+di+Bafio/@41.2886308,13.2477082,17z/data=!4m17!1m9!2m8!1sRistoranti!3m5!2sVia+Traiano!3s0x132523689f011981:0x18e99287f92a0a3d!4m2!1d13.2549574!2d41.2864409!6e5!3m6!1s0x13252300796a3b23:0xe44d9214e27da07a!8m2!3d41.2883794!4d13.2525176!15sCgpSaXN0b3JhbnRpWgwiCnJpc3RvcmFudGmSAQpyZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDI1T1JrMXBNVlprVlZad1pWZEtTbVZ0Y0c1YVJuQXpVVmN4VEZKSVl4QULgAQD6AQQIERA6!16s%2Fg%2F11x690vx_h?hl=it&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
        "street": "Piazza Giuseppe Garibaldi, 17",
        "tel": "+39 328 2640913"    
    },
    {
        "image": "./img/restaurant/locandaruggieri.png",
        "name": "Locanda Ruggieri",
        "map": "https://www.google.it/maps/place/Locanda+Ruggieri/@41.2886308,13.2477082,17z/data=!3m1!5s0x132523684d5d16b7:0x302a897cd0eecd43!4m17!1m9!2m8!1sRistoranti!3m5!2sVia+Traiano!3s0x132523689f011981:0x18e99287f92a0a3d!4m2!1d13.2549574!2d41.2864409!6e5!3m6!1s0x132523a962e831bf:0xcbbd641de2b7e811!8m2!3d41.2886308!4d13.2520856!15sCgpSaXN0b3JhbnRpWgwiCnJpc3RvcmFudGmSAQpyZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5hTm5aTGNVOW5FQUXgAQD6AQQIABAz!16s%2Fg%2F11h42rk3x8?hl=it&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
        "street": "Via del Rio, 10",
        "tel": "+39 333 4758507"    
    },
    {
        "image": "./img/restaurant/anticadogana.png",
        "name": "Antica Dogana",
        "map": "https://www.google.it/maps/place/Antica+Dogana/@41.2873579,13.2541956,18z/data=!4m15!1m8!3m7!1s0x132523689f011981:0x18e99287f92a0a3d!2sVia+Traiano,+04019+Terracina+LT!3b1!8m2!3d41.2864409!4d13.2549574!16s%2Fg%2F1tg0h3tq!3m5!1s0x1325236709937413:0xe09559a85c5e80d6!8m2!3d41.2880707!4d13.2582388!16s%2Fg%2F1ptxqbcjw?hl=it&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
        "street": "Via G. Marconi, 21",
        "tel": "+39 0773 702307"    
    }
];