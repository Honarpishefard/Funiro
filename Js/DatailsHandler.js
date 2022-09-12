import bathroomProductsSource from "./DataBase/bathroomProductsDataBase.js";
import bedroomProductsSource from "./DataBase/bedroomProductsDataBase.js";
import lightingProductsSource from "./DataBase/lightingDataBase.js";
import decorativeProductsSource from "./DataBase/decorativeProductsDataBase.js";
import quantityHandler from "./utils/quantityHandler.js";


const productImage = document.getElementById("productImage");
const productTittle = document.getElementById("productTittle");
const ProductPrice = document.getElementById("ProductPrice");
const addToCard = document.getElementById("addToCard");


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
    productImage.style.width = "400px";


    quantityHandler();

    addToCard.addEventListener("click", () => {
        console.log("added to card");
        console.log(chosenProduct);
        localStorage.setItem("addProductToCard", JSON.stringify(chosenProduct));
    });

};