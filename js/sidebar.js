const hamburgerSection = document.getElementById('hamburger');  // Main container of hamburger section
const hamburgerLines = document.getElementsByClassName("hamburger__lines__section")[0];  // Container of Lines
const hamburgerLine = document.getElementsByClassName("hamburger__line"); // Array of Lines
const sidebarContent = document.getElementsByClassName("sidebar__content")[0];

hamburgerLines.addEventListener('click', function () {
    hamburgerSection.classList.toggle('sidebar__hamburger__translate');
    for (let i = 0; i < hamburgerLine.length; i++) {
        i == 0 && hamburgerLine[i].classList.toggle('hamburger__line1__onhover')
        i == 2 && hamburgerLine[i].classList.toggle('hamburger__line3__onhover')
        hamburgerLine[i].classList.toggle('hamburger__line__cross')
    }
    sidebarContent.classList.toggle('sidebar__content__open')
});