import bedroomProductsSource from "./DataBase/bedroomProductsDataBase.js";

const bedroomSecContainer = document.querySelector(".product-sec-container");

export default function bedroomProductsHandler() {
    bedroomProductsSource().forEach((item)=>{
        const product = `<div style="width: min-content;"> 
        <img src="${item.cover}" alt="">
        <p class="mb-0 mt-2 fw-500 fs-18 ps-1">${item.name}</p>
        <p class="mb-0 mt-1 fw-light fs-6 ps-1">${item.price}</p>
    </div>`
    bedroomSecContainer.innerHTML += product;
    });
};