import "./style.css";
import Header from "./header.js";
import Home from "./home.js";
import Footer from "./footer.js";


const header = Header();
document.body.appendChild(header);

const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const home = Home();
content.appendChild(home);

const footer = Footer();
document.body.appendChild(footer);