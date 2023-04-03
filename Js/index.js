import homePageCardsHandler from "./../Js/homePageCardsHandler.js"
import productListHandler from "./productListHandler.js";
import DatailsPageHandler from "./DatailsHandler.js";
import cardHandler from "./cardHandler.js";
import checkIfLogedIn from "./utils/checkLogedIn.js"

let page = document.body.id;

switch (page) {
    case "homePage":
        homePageCardsHandler();
        checkIfLogedIn();
        break;
    case "productList":
        productListHandler();
        checkIfLogedIn();
        break;
    case "productDatails":
        DatailsPageHandler();
        checkIfLogedIn();
        break;
    case "yourCard":
        cardHandler();
        checkIfLogedIn();
};