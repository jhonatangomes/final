

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu.png";
    }
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "menux.png";
    }
}

function menuShow1() {
    let menuMobile = document.querySelector('.mobile-menu1');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon');
    }
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon');
    }
}

