import discountHandler from "./utils/discountCoupon.js";
import priceCalc from "./utils/priceCalc.js";

const cardContainer = document.querySelector(".card-container");
const applyCouponBttn = document.getElementById("applyCouponBttn");
const Subtotal = document.getElementById("Subtotal");
const Total = document.getElementById("Total");
const checkoutBttn = document.getElementById("checkoutBttn");


export default function cardHandler() {
    let addProductToCard = JSON.parse(localStorage.getItem("card"));
    const quantity = localStorage.getItem("quantity");
    if (!addProductToCard) {
        const ifEmpty = `<div class="d-flex justify-content-center align-items-center h-100">
        <p id="ifEmpty" class="display-6 text-black-50 fw-light">Empty</p>
    </div>`;
        cardContainer.innerHTML = ifEmpty;
        return console.log("empty");
    };


    addProductToCard.forEach(item => {
        const el = `<div id="${item.id}" class="d-flex gap-2rem align-items-center mb-4 bg-white">
    <img class="product_img"
      src="${item.cover}" alt="">
    <div class="w-65 me-4">
        <p class="fw-bold fs-24 black-text">${item.name}</p>
      <div class="d-flex align-items-center mb-2">
        <p class="pe-5 fw-semibold fs-18 mb-0 black-text">Quantity</p>
          <div class="d-flex align-items-center gap-4 px-3 py-2">
              <p class="fw-semibold fs-18 mb-0 black-text">${quantity}</p>
          </div>
      </div>
      <div class="d-flex align-items-center gap-3">
        <p class="mb-0 fw-500 fs-32 pe-3 black-text flex-grow-1">${((item.price)*quantity).toFixed(2)} ${"USD"}</p>
        <img class="wishlist px-2 py-1" src="./../Img/shopping-card/Trash Bin.svg" alt="">
        <p class="mb-0 fw-semibold fs-6 wishlist px-2 py-1 black-text cursor-pointer">Add to
            Wishlist</p>
      </div>
   </div>
   </div>`
        cardContainer.innerHTML += el;
    });



    cardContainer.addEventListener("click", (e) => {
        if (e.target.src === "http://127.0.0.1:5501/Img/shopping-card/Trash%20Bin.svg") {
            const element = e.target.parentNode.parentNode.parentNode;

            const filtered = addProductToCard.filter((item) => item.id === parseInt(element.id));

            const updated = addProductToCard.filter((item) => item.id !== parseInt(filtered[0].id));
            localStorage.setItem("card", JSON.stringify(updated));
            addProductToCard = JSON.parse(localStorage.getItem("card"));



            if (updated.length === 0) {
                const ifEmpty = `<div class="d-flex justify-content-center align-items-center h-100">
                <p id="ifEmpty" class="display-6 text-black-50 fw-light">Empty</p>
            </div>`;
                cardContainer.innerHTML = ifEmpty;
                localStorage.removeItem("card");
                localStorage.removeItem("price");
                Subtotal.innerHTML = "00";
                Total.innerHTML = "00";
                return console.log("empty");
            };

            cardContainer.innerHTML = "";
            updated.forEach(item => {
                const el = `<div id="${item.id}" class="d-flex gap-2rem align-items-center mb-4 bg-white">
            <img class="product_img"
              src="${item.cover}" alt="">
            <div class="w-65 me-4">
                <p class="fw-bold fs-24 black-text">${item.name}</p>
              <div class="d-flex align-items-center mb-2">
                <p class="pe-5 fw-semibold fs-18 mb-0 black-text">Quantity</p>
                  <div class="d-flex align-items-center gap-4 px-3 py-2">
                      <p class="fw-semibold fs-18 mb-0 black-text">${quantity}</p>
                  </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <p class="mb-0 fw-500 fs-32 pe-3 black-text flex-grow-1">${((item.price)*quantity).toFixed(2)} ${"USD"}</p>
                <img class="wishlist px-2 py-1" src="./../Img/shopping-card/Trash Bin.svg" alt="">
                <p class="mb-0 fw-semibold fs-6 wishlist px-2 py-1 black-text cursor-pointer">Add to
                    Wishlist</p>
              </div>
           </div>
           </div>`
                cardContainer.innerHTML += el;
            });

            console.log(parseFloat(filtered[0].price));
            const updatedPrice = lcPriceCheck.filter((item) => item !== parseFloat(filtered[0].price));
            console.log(updatedPrice);
            localStorage.setItem("price", JSON.stringify(updatedPrice));
            lcPriceCheck = JSON.parse(localStorage.getItem("price"));
            priceCalc();
        };
    });

    let lcPriceCheck = JSON.parse(localStorage.getItem("price"));

    priceCalc();

    applyCouponBttn.addEventListener("click", discountHandler);

    checkoutBttn.addEventListener("click", () => {

        const checkLc = localStorage.getItem("userName");

        if(checkLc){
            document.body.innerHTML = `<div class="d-flex vh-100 justify-content-center flex-column align-items-center black-text">
            <p class="fw-bolder display-6">Thank You For Choosing Us</p>
            <a href="./home-page.html" class="fs-18 fw-semibold">Go Back To Home Page</a>
            </div>`;
        }else{
            alert("Please sign up first!");
        }
    });

};