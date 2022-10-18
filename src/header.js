export default function header() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");

    const logo = document.createElement("div");
    logo.textContent = "SUNDAE SUNDAY";
    logo.classList.add("logo");
    headerContainer.appendChild(logo);

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");

    const navItem1 = document.createElement("li");
    navItem1.textContent = "HOME";
    navItem1.classList.add("nav-item");
    navItem1.setAttribute("id", "home");
    const navItem2 = document.createElement("li");
    navItem2.textContent = "MENU";
    navItem2.classList.add("nav-item");
    navItem2.setAttribute("id", "menu");
    const navItem3 = document.createElement("li");
    navItem3.textContent = "CONTACT";
    navItem3.setAttribute("id", "contact");
    navItem3.classList.add("nav-item");

    navLinks.appendChild(navItem1);
    navLinks.appendChild(navItem2);
    navLinks.appendChild(navItem3);
    headerContainer.appendChild(navLinks);

    header.appendChild(headerContainer);

    return header;
}