import bathroomProductsSource from "./DataBase/bathroomProductsDataBase.js";
import bedroomProductsSource from "./DataBase/bedroomProductsDataBase.js";
import lightingProductsSource from "./DataBase/lightingDataBase.js";
import decorativeProductsSource from "./DataBase/decorativeProductsDataBase.js";
import quantityHandler from "./utils/quantityHandler.js";


const productImage = document.getElementById("productImage");
const productTittle = document.getElementById("productTittle");
const ProductPrice = document.getElementById("ProductPrice");
const addToCard = document.getElementById("addToCard");
const relatedProductsDiv = document.getElementById("relatedProductsDiv");


export default function DatailsPageHandler() {
    let clickedLc = localStorage.getItem("clickedOn");

    let chosenProduct = null;
    let dataLength = null;
    let productList = null;
    switch (localStorage.getItem("pageId")) {
        case "bathroomProducts":
            chosenProduct = bathroomProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            productList = bathroomProductsSource().filter((item) => item.id !== chosenProduct.id);
            dataLength = bathroomProductsSource().length;
            break;
        case "lightingProducts":
            chosenProduct = lightingProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            productList = lightingProductsSource().filter((item) => item.id !== chosenProduct.id);
            dataLength = lightingProductsSource().length;
            break;
        case "bedroomProducts":
            chosenProduct = bedroomProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            productList = bedroomProductsSource().filter((item) => item.id !== chosenProduct.id);
            dataLength = bedroomProductsSource().length;
            break;
        case "decorativeProducts":
            chosenProduct = decorativeProductsSource().filter(item => item.id === parseInt(clickedLc))[0];
            productList = decorativeProductsSource().filter((item) => item.id !== chosenProduct.id);
            dataLength = decorativeProductsSource().length;
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


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const rndInt = randomIntFromInterval(productList[0].id, dataLength);


    let product1 = null;
    let product2 = null;
    let product3 = null;
    if (rndInt !== dataLength && rndInt !== 1) {
        product1 = rndInt - 1;
        product2 = rndInt;
        product3 = rndInt + 1;
    } else if (rndInt === dataLength) {
        product1 = rndInt - 2;
        product2 = rndInt - 1;
        product3 = rndInt;
    } else if (rndInt === productList[0].id) {
        product1 = rndInt;
        product2 = rndInt + 1;
        product3 = rndInt + 2;
    };

    const relatedProduct1 = productList.filter((item) => item.id === product1);
    const relatedProduct2 = productList.filter((item) => item.id === product2);
    const relatedProduct3 = productList.filter((item) => item.id === product3);
    const relatedProducts = [...relatedProduct1, ...relatedProduct2, ...relatedProduct3];

    relatedProducts.forEach((item) => {
        const el = `<div style="width: min-content;" id="">
    <img src="${item.cover}" width="300px" alt="">
    <p class="mb-0 mt-2 fw-500 fs-18 ps-1">${item.name}</p>
    <p class="mb-0 mt-1 fw-light fs-6 ps-1">${item.price}</p>
    </div>`;

        relatedProductsDiv.innerHTML += el;
    });



};