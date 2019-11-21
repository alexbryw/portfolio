//Runs starter function after page has finished loading.
window.addEventListener('load', starter);

function starter(){
    document.addEventListener('scroll', fixNavbar);
    document.addEventListener('scroll', cancelScrollHint);
    cancelScrollHint();
    fixNavbar();
}

/**
 * Makes the navbar stick to the top of the page after scrolling down past the top image.
 */
function fixNavbar(){
    const navbar = document.querySelector('.navbar');
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
        document.querySelector('.background-holder').style.animationDuration = '0s'

    }
}

/**
 * Changes background color of body and cards to black if not already black,
 * and back to white again.
 */
function darkMode(){
    const bodyElement = document.querySelector('body');
    const cardHolderElement = document.querySelector('.card-holder');
    const cardElementList = document.querySelectorAll('.card');
    const darkButtonElement = document.querySelector('.navbar button')

    if(bodyElement.style.backgroundColor !== 'black'){
        cardHolderElement.style.backgroundColor = 'black';
        bodyElement.style.backgroundColor = 'black';
        darkButtonElement.style.backgroundColor = 'black'
        darkButtonElement.style.color = 'white'
        
        //loop over all cards in list and change text color to white/back.
        for(let card of cardElementList){
            card.style.color = 'white'
        }

        changeBackground();
    }
    else{
        cardHolderElement.style.backgroundColor = 'white';
        bodyElement.style.backgroundColor = 'white';
        darkButtonElement.style.backgroundColor = 'white'
        darkButtonElement.style.color = 'black'
        
        //loop over all cards in list and change text color to white/back.
        for(let card of cardElementList){
            card.style.color = 'black'
        }

        changeBackground();
    }
}

/**
 * Changes background images in body and footer.
 */
function changeBackground(){
    const bgHolderElement = document.querySelector('.background-holder');
    const footerElement = document.querySelector('footer');

    if(bgHolderElement.style.backgroundImage !== 'url("./img/night-photograph-2183637_1920.jpg")'){
        bgHolderElement.style.backgroundImage = "url('./img/night-photograph-2183637_1920.jpg')";
        footerElement.style.backgroundImage = "url('./img/night-photograph-2183637_1920.jpg')";
    }
    else{
        bgHolderElement.style.backgroundImage = "url('./img/rocket-1245696.jpg')";
        footerElement.style.backgroundImage = "url('./img/rocket-1245696.jpg')";
    }
}