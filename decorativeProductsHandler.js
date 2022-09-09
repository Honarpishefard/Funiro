import decorativeProductsSource from "./DataBase/decorativeProductsDataBase.js";

const decorSecContainer = document.querySelector(".product-sec-container");

export default function decorativeProductsHandler() {
    decorativeProductsSource().forEach((item)=>{
        const product = `<div style="width: min-content;"> 
        <img src="${item.cover}" alt="">
        <p class="mb-0 mt-2 fw-500 fs-18 ps-1">${item.name}</p>
        <p class="mb-0 mt-1 fw-light fs-6 ps-1">${item.price}</p>
    </div>`
    decorSecContainer.innerHTML += product;
    });
};