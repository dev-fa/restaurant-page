import Classic from "./imgs/classicsundae.jpg";
import BananaSplit from "./imgs/bananasplit.jpg";
import Parfait from "./imgs/parfait.jpg";
import Knickerbocker from "./imgs/knickerbocker.jpg";
import Fruit from "./imgs/fruitsundae.jpg";
import Heated from "./imgs/hotfudge.jpg";


export default function menu () {
    const menu = document.createElement("main");
    menu.classList.add("menu");

    const itemOneImg = Classic;
    const itemOnePara = `
        The original sundae consists of vanilla ice cream
        topped with a flavored sauce or syrup, whipped cream,
        and a maraschino cherry.`;
    const itemOne = createMenuItem
        (itemOneImg, "CLASSIC SUNDAE", itemOnePara);

    const itemTwoImg = BananaSplit;
    const itemTwoPara = `
        Two halves of a banana. Consists of 
        strawberry ice cream topped with chocolate syrup, 
        chocolate ice cream with crushed pineapple, and 
        vanilla ice cream with strawberry syrup.`;
    const itemTwo = createMenuItem
        (itemTwoImg, "BANANA SPLIT", itemTwoPara);

    const itemThreeImg = Parfait;
    const itemThreePara = `
        Parfait is a sundae served in a tall glass filled 
        with layers of ice cream or yogurt, gelatine, and 
        flavorings such as syrups, whipped cream, granola, 
        fresh fruit, and/or liqueurs.`;
    const itemThree = createMenuItem
        (itemThreeImg, "PARFAIT", itemThreePara);

    const itemFourImg = Knickerbocker;
    const itemFourPara = `
        This ice cream sundae is served in a large tall glass, 
        consisting of layers of ice cream, jelly, fruit, and cream, 
        topped with syrup, nuts, whipped cream, and often a cherry.`;
    const itemFour = createMenuItem
        (itemFourImg, "KNICKERBOCKER GLORY", itemFourPara);

    const itemFiveImg = Fruit;
    const itemFivePara = `
        Sliced or chopped fruit that has been sugared and let 
        to sit for an hour or more to form a sweet syrup may be 
        substituted for the flavored sauce or syrup 
        of the classic sundae.`;
    const itemFive = createMenuItem
        (itemFiveImg, "FRUIT SUNDAE", itemFivePara);

    const itemSixImg = Heated;
    const itemSixPara = `
        Heated-sauce sundaes are those in which the 
        flavored sauce or syrup is heated before being poured 
        over the ice cream, creating appealing differences in 
        temperature as well as texture.`;
    const itemSix = createMenuItem
        (itemSixImg, "HEATED-SAUCE", itemSixPara);

    menu.appendChild(itemOne);
    menu.appendChild(itemTwo);
    menu.appendChild(itemThree);
    menu.appendChild(itemFour);
    menu.appendChild(itemFive);
    menu.appendChild(itemSix);
    return menu;
}


const createMenuItem = (imgSrc, header, para) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-img");
    menuImg.src = imgSrc;

    const menuHeader = document.createElement("h2");
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = header;

    const menuPara = document.createElement("p");
    menuPara.classList.add("menu-para");
    menuPara.textContent = para;

    menuItem.appendChild(menuImg);
    menuItem.appendChild(menuHeader);
    menuItem.appendChild(menuPara);

    return menuItem;
}