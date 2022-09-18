const cardContainer = document.querySelector(".card-container");
const couponInput = document.getElementById("couponInput");
const applyCouponBttn = document.getElementById("applyCouponBttn");
const Subtotal = document.getElementById("Subtotal");
const Shipping = document.getElementById("Shipping");
const Total = document.getElementById("Total");
const totalParent = document.getElementById("totalParent");
const i = document.getElementsByTagName("i")[0];



export default function cardHandler() {
    const addProductToCard = JSON.parse(localStorage.getItem("card"));
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
    <div class="w-65">
        <p class="fw-bold fs-24 black-text">${item.name}</p>
      <div class="d-flex align-items-center mb-2">
        <p class="pe-5 fw-semibold fs-18 mb-0 black-text">Quantity</p>
          <div class="d-flex align-items-center gap-4 px-3 py-2">
              <p class="fw-semibold fs-18 mb-0 black-text">${quantity}</p>
          </div>
      </div>
      <div class="d-flex align-items-center gap-3">
        <p class="mb-0 fw-500 fs-36 pe-3 black-text flex-grow-1">${((item.price)*quantity).toFixed(2)} ${"USD"}</p>
        <img class="wishlist px-2 py-1" src="./../Img/shopping-card/Trash Bin.svg" alt="">
        <p class="mb-0 fw-semibold fs-6 wishlist px-2 py-1 black-text cursor-pointer">Add to
            Wishlist</p>
      </div>
   </div>
   </div>`
        cardContainer.innerHTML += el;
    });



    cardContainer.addEventListener("click", (e) => {
        if (e.target.src === "http://127.0.0.1:5500/Img/shopping-card/Trash%20Bin.svg") {
            const element = e.target.parentNode.parentNode.parentNode;


            const filtered = addProductToCard.filter((item) => {
                item.id === parseInt(element.id);
                console.log(item.id);
                console.log(parseInt(element.id));
            });
            console.log(filtered);
        };
    });

    const lcPriceCheck = JSON.parse(localStorage.getItem("price"));



    const sum = lcPriceCheck.reduce(function (a, b) {
        return a + b;
    }, 0);

    Subtotal.innerHTML = "$" + " " + sum;


    Total.innerHTML = (sum + Number(Shipping.innerHTML)).toFixed(2);


    let discountApplied = false;
    applyCouponBttn.addEventListener("click", () => {
        if (discountApplied === true) return alert("Discount is Already Applied");
        if (couponInput.value === "BLACKFRIDAY" && discountApplied === false) {
            const discount = ((Total.innerHTML) * .2).toFixed(2);
            const finalPrice = (Total.innerHTML - discount).toFixed(2);
            const discountPrice = document.createElement("p");
            discountPrice.innerHTML = "$" + " " + finalPrice;
            Total.style.textDecoration = "line-through";
            i.style.textDecoration = "line-through";
            i.style.color = "#848484";
            Total.style.color = "#848484";

            const test = document.createElement("p");
            test.innerHTML = "-20%";
            test.style.display = "inline-block";
            test.style.marginLeft = "2rem";
            test.style.color = "#cb0000";
            test.style.textDecoration = "none";
            totalParent.append(test);

            totalParent.appendChild(discountPrice);
            discountApplied = true;
        } else {
            alert("please enter a valid coupon code");
        };
    });
};