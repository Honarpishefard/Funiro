import homePageSource from "./../Js/DataBase/homePageDataBase.js"
import homePageCardsHandler from "./../Js/homePageCardsHandler.js"
import productListHandler from "./productListHandler.js";



let page = document.body.id;







switch (page) {
    case "homePage":
        homePageCardsHandler();
        break;
    case "productList":
        productListHandler();
        break;
    case "":
        
};