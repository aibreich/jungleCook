// this is my function to set up each of the var
const navMove = () => {
    const burger = document.querySelector(".fas")
    const nav = document.querySelector(".link-nav")
    // the listener on the burger menu
    burger.addEventListener('click', () => {
        // using the nav-active to move the nav over
        nav.classList.toggle('nav-active');
    });
};

navMove();