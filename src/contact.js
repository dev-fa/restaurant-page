import Image from "./imgs/indianajasper.png";


export default function contact () {
    const contact = document.createElement("main");
    contact.classList.add("contact");

    const contactAdd = document.createElement("p");
    contactAdd.classList.add("contact-add");
    contactAdd.textContent = "🏘️ 550 Conaway Street, Jasper, Indiana, 47546"

    const contactTel = document.createElement("p");
    contactTel.classList.add("contact-tel");
    contactTel.textContent = "📞 812-403-1217";

    const contactImage = document.createElement("img");
    contactImage.classList.add("contact-img");
    contactImage.src = Image;

    contact.appendChild(contactAdd);
    contact.appendChild(contactTel);
    contact.appendChild(contactImage);

    return contact;
}