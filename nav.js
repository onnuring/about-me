let navText = document.querySelector(".header");
let homeH = document.querySelector(".sec_home").offsetHeight;
let contactTop = document.querySelector(".sec_contact").offsetTop;

let logo = document.querySelector(".logo_white");
// let navA = navText.querySelectorAll("a");

window.addEventListener('scroll', function(e){
    e.preventDefault();
    let currentScroll = window.scrollY;

    if(currentScroll >= homeH){
        navText.style.display = "flex"
        navText.style.animation="nav .5s ease-out forwards"
    }else{
        navText.style.animation="navHide .5s ease-out forwards"
    }

    if(currentScroll >= contactTop){
        // for ( var i = 0; i < navA.length; i++ ) {
        //     navA[i].style.animation="navColor .5s ease-out forwards"
        // }
        document.documentElement.style.setProperty('--navbar-color', '#f7f7e9');
        logo.style.opacity="1"
    }else {
        // for ( var i = 0; i < navA.length; i++ ) {
        //     navA[i].style.animation="colorRed .5s ease-out"
        // }
        document.documentElement.style.setProperty('--navbar-color', '#ae360e');
        logo.style.opacity="0"
    }
});
