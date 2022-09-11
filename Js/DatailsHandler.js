import bathroomProductsSource from "./DataBase/bathroomProductsDataBase.js";
import bedroomProductsSource from "./DataBase/bedroomProductsDataBase.js";
import lightingProductsSource from "./DataBase/lightingDataBase.js";
import decorativeProductsSource from "./DataBase/decorativeProductsDataBase.js";

const productImage = document.getElementById("productImage");
const productTittle = document.getElementById("productTittle");
const ProductPrice = document.getElementById("ProductPrice");

export default function DatailsPageHandler() {
    let clickedLc = localStorage.getItem("clickedOn");

    let chosenProduct = null;
    switch (localStorage.getItem("pageId")) {
        case "bathroomProducts":
            chosenProduct = bathroomProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            break;
        case "lightingProducts":
            chosenProduct = lightingProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            break;
        case "bedroomProducts":
            chosenProduct = bedroomProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            break;
        case "decorativeProducts":
            chosenProduct = decorativeProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            break;
    }

    productTittle.innerHTML = chosenProduct.name;
    ProductPrice.innerHTML = chosenProduct.price;
    productImage.src = chosenProduct.cover;
    productImage.style.width = "375px";
};