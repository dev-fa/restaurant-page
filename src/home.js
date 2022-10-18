import Image from "./hero.jpg";


export default function home () {
    const home = document.createElement("main");
    home.classList.add("home");

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const heroImg = document.createElement("img");
    heroImg.classList.add("hero-img")
    heroImg.src = Image;

    const heroHeader = document.createElement("h1");
    heroHeader.classList.add("hero-header");
    heroHeader.textContent = "Serving the best!"

    const heroPara = document.createElement("p");
    heroPara.classList.add("hero-para");
    const paraText = `
        The best sundaes you can find. So good you wil be
        craving for more! From the classic ice cream sundae
        to banana splits and parfaits, we have them all. Get
        a taste of our sundaes now!
    `;
    heroPara.textContent = paraText;

    const callToAction = document.createElement("button");
    callToAction.classList.add("btn", "btn-primary");
    callToAction.textContent = "Menu";

    hero.appendChild(heroImg);
    hero.appendChild(heroHeader);
    hero.appendChild(heroPara);
    hero.appendChild(callToAction);
    home.appendChild(hero);

    return home;
}