import "./style.css";
import Header from "./header.js";
import Footer from "./footer.js";


const header = Header();
document.body.appendChild(header);

const content = document.createElement("main");
content.setAttribute("id", "content");
document.body.appendChild(content);

const footer = Footer();
document.body.appendChild(footer);