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

async function loadBasicData() {
    const data = (await fetchData()).basic
    document.getElementsByClassName('sidebar__name')[0].textContent = data.firstName + " " + data.middleName + " " + data.lastName

    const jobText = document.createTextNode(data.job);
    let spanElement = document.createElement('span');

    spanElement.className = 'sidebar__country';
    spanElement.textContent = " " + "in" + " " + data.country

    let jobElement = document.getElementsByClassName('sidebar__job')[0]
    jobElement.appendChild(jobText);
    jobElement.appendChild(spanElement);

}

loadBasicData()