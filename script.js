window.onload = starter;

function starter(){
    document.addEventListener('scroll', fixNavbar);
    document.addEventListener('scroll', cancelScrollHint);
    cancelScrollHint();
}

/**
 * Makes the navbar stick to the top of the page after scrolling down past the top image.
 */
function fixNavbar(){
    const navbar = document.querySelector('.navbar');
    //console.log('scrolling .. offsetTop '+navbar.offsetTop + ' '+window.pageYOffset);
    //navbar.offsetTop
    if(window.pageYOffset >= window.innerHeight){
        navbar.classList.add('fixNavbarToTop');
    }
    else{
        navbar.classList.remove('fixNavbarToTop');
    }
}

/**
 * Cancels scroll hint when user has already scrolled down.
 */
function cancelScrollHint(){
    if(window.pageYOffset > 0){
        //console.log('scroll from top '+ window.pageYOffset);
        document.querySelector('.background-holder').style.animationDuration = '0s'

    }
}

//TODO add css grid 2 colum then one for mobile, autofill?.