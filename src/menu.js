class Menu {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}


let vesuvioMenu = [];

let quail = new Menu("Quail, a la Bucco", "Baby quail stuffed with fennel sausage.", "Priceless");
vesuvioMenu.push(quail);
let gabagool = new Menu("Gabagool", "Gabagool? Over hereeeee!", "$4/lb");
vesuvioMenu.push(gabagool);
let ziti = new Menu("Ziti", "So what, no flippin ziti now? Oh!", "idk");
vesuvioMenu.push(ziti);

function createMenuItemDiv(menuItem){
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menuItemContainer");

    const itemName = document.createElement("div");
    itemName.classList.add("menuItemName");
    itemName.textContent = menuItem.name;
    menuItemContainer.appendChild(itemName);

    const itemDescription = document.createElement("div");
    itemDescription.classList.add("menuItemDescription");
    itemDescription.textContent = menuItem.description;
    menuItemContainer.appendChild(itemDescription);

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("menuItemPrice");
    itemPrice.textContent = menuItem.price;
    menuItemContainer.appendChild(itemPrice);

    return menuItemContainer;
}

const contentDiv = document.getElementById("content");


export function showMenu(){
    for(let item in vesuvioMenu){
        contentDiv.appendChild(createMenuItemDiv(vesuvioMenu[item]));
    }
    
}