import homePageSource from "./homePageDataBase.js"

const productContainer = document.querySelector(".product-container");

homePageSource().forEach((card) => {
    const productcard = `<div class="product-card col-3 p-0">
<img class="w-100" src="${card.cover}" alt="">
<div class="p-3">
    <p class="fw-semibold fs-24 mb-2">${card.name}</p>
    <p class="gray-text mb-2">${card.details}</p>
    <div class="d-flex align-items-center">
        <p class="fw-semibold fs-5 flex-grow-1">${card.currentPrice}</p>
        <p class="fs-6 fw-normal old-product-price">${card.oldPrice}</p>
    </div>
</div>
</div>`
    productContainer.innerHTML += productcard;
});