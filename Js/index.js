import homePageCardsHandler from "./../Js/homePageCardsHandler.js"
import productListHandler from "./productListHandler.js";
import DatailsPageHandler from "./DatailsHandler.js";
import cardHandler from "./cardHandler.js";


let page = document.body.id;







switch (page) {
    case "homePage":
        homePageCardsHandler();
        break;
    case "productList":
        productListHandler();
        break;
    case "productDatails":
        DatailsPageHandler();
        break;
    case "yourCard":
        cardHandler();
};