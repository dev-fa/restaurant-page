import "./style.css";
import Header from "./header.js";
import Home from "./home.js";
import Menu from "./menu.js";
import Footer from "./footer.js";


const header = Header();
document.body.appendChild(header);

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const home = Home();
content.appendChild(home);

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");

const activateTab = (e) => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };

    if (e.target.id === "home") {
        const home = Home();
        content.appendChild(home);
        homeBtn.classList.add("active");
        menuBtn.classList.remove("active");
    } else if (e.target.id === "menu") {
        const menu = Menu();
        content.appendChild(menu);
        homeBtn.classList.remove("active");
        menuBtn.classList.add("active");
    };
};
homeBtn.addEventListener("click", activateTab);
menuBtn.addEventListener("click", activateTab);

const footer = Footer();
document.body.appendChild(footer);