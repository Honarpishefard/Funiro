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
    };

    productTittle.innerHTML = chosenProduct.name;
    ProductPrice.innerHTML = chosenProduct.price + " " + "USD";
    productImage.src = chosenProduct.cover;
    productImage.style.width = "400px";


    quantityHandler();


    function addToCardFn() {
        const lcCardCheck = JSON.parse(localStorage.getItem("card"));
        const lcPriceCheck = JSON.parse(localStorage.getItem("price"));


        if (lcCardCheck) {
            const searchIndex = lcCardCheck.findIndex((item) => item.id == chosenProduct.id);
            if (searchIndex !== -1) return alert("This Item is Already Added To Your Card");
            
            const merge = [...lcCardCheck, chosenProduct];
            localStorage.setItem("card", JSON.stringify(merge));
        } else {
            localStorage.setItem("card", JSON.stringify([chosenProduct]));
        };


        const num = Number((chosenProduct.price) * (Number(quantity.innerHTML)));
        if (lcPriceCheck) {
            const merge = [...lcPriceCheck, num];
            localStorage.setItem("price", JSON.stringify(merge));
        } else {
            localStorage.setItem("price", JSON.stringify([num]));
        };
    };

    addToCard.addEventListener("click", addToCardFn);
};