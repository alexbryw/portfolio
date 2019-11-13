window.onload = starter;

function starter(){
    document.addEventListener('scroll', fixNavbar);
}

function fixNavbar(){
    
    const navbar = document.querySelector('.navbar');
    console.log('scrolling .. offsetTop '+navbar.offsetTop + ' '+window.pageYOffset);
    //navbar.offsetTop
    if(window.pageYOffset >= window.innerHeight){
        navbar.classList.add('fixNavbarToTop');
    }
    else{
        navbar.classList.remove('fixNavbarToTop');
    }
}