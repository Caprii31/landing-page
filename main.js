const mobileMenu = document.querySelector('.mobile__menu')
const navbarLinks = document.querySelector('.navbar__menu')

const menu = () =>{
    mobileMenu.classList.toggle('is-active');
    navbarLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click',menu);

const underLine = () => {
    const element = document.querySelector('.highlight');
    const homePage = document.querySelector('#nav__home');
    const aboutPage = document.querySelector('#nav__about');
    const servicesPage = document.querySelector('#nav__services');
    let scrollPosition = window.scrollY;


    if(window.innerWidth>960 && scrollPosition <600 ){
        homePage.classList.add('highlight');
        aboutPage.classList.remove('highlight');
        servicesPage.classList.remove('highlight');

        return;
    }else if(window.innerWidth>960 && scrollPosition<1400){
        aboutPage.classList.add('highlight');
        homePage.classList.remove('highlight');
        servicesPage.classList.remove('highlight');
          return;
    }else if(window.innerWidth>960 && scrollPosition<2345){
        servicesPage.classList.add('highlight');
        homePage.classList.remove('highlight');
        aboutPage.classList.remove('highlight')
        
        return;
    }

    if(window.innerWidth>980 && element && scrollPosition<600){
        homePage.classList.remove('highlight');
    }
};
window.addEventListener('scroll',underLine);
window.addEventListener('click',underLine);


const hideMobileMenu = () =>{

    const menuMobi = document.querySelector('.active');
    if(window.innerWidth<=768 && menuMobi){
        menuMobi.classList.toggle('active');
     }
    };
    

navbarLinks.addEventListener('click' , hideMobileMenu);

   
