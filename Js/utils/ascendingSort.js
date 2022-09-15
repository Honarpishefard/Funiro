import bathroomProductsSource from "../DataBase/bathroomProductsDataBase.js";
import bedroomProductsSource from "../DataBase/bedroomProductsDataBase.js";
import lightingProductsSource from "../DataBase/lightingDataBase.js";
import decorativeProductsSource from "../DataBase/decorativeProductsDataBase.js";




const productSecContainer = document.querySelector(".product-sec-container");
const switchPriceSort = document.getElementById("switchPriceSort");




export default function sortByPriceAscending() {

    let sorted = null;
    switch (localStorage.getItem("page")) {
        case "bathroom":
            sorted = bathroomProductsSource().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #D4AF8C;" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                ascendingsort();
            }, 2000);
            break;

        case "lighting":
            sorted = lightingProductsSource().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #D4AF8C;" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                ascendingsort();
            }, 2000);

            break;

        case "bedroom":
            sorted = bedroomProductsSource().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #D4AF8C;" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                ascendingsort();
            }, 2000);

            break;

        case "decor":
            sorted = decorativeProductsSource().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #D4AF8C;" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                ascendingsort();
            }, 2000);

            break;
    };

    function ascendingsort() {
        switchPriceSort.style.display = "flex";
        productSecContainer.innerHTML = '';
        const test = document.createElement("p");
        test.style.width = "100%";
        test.innerHTML = `By Ascending Order`;
        productSecContainer.appendChild(test);
        sorted.forEach((item) => {
            const product = `<div style="width: min-content;" id="${item.id}"> 
            <img src="${item.cover}" alt="">
            <p class="mb-0 mt-2 fw-500 fs-18 ps-1">${item.name}</p>
            <p class="mb-0 mt-1 fw-light fs-6 ps-1">${item.price} ${"USD"}</p>
            </div>`
            productSecContainer.innerHTML += product;
        });
    };
};