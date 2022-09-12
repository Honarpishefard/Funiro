const decreaseBttn = document.getElementById("decrease");
const increaseBttn = document.getElementById("increase");
const quantity = document.getElementById("quantity");


export default function quantityHandler() {

    quantity.setAttribute("data-num", "1");
    // quantity.dataset.num = "1";


    decreaseBttn.addEventListener("click", () => {
        if (quantity.innerHTML == 1) return;
        quantity.innerHTML--;
        quantity.dataset.num = quantity.innerHTML;
        localStorage.setItem("quantity", quantity.dataset.num);
    });

    increaseBttn.addEventListener("click", () => {
        quantity.innerHTML++;
        quantity.dataset.num = quantity.innerHTML;
        localStorage.setItem("quantity", quantity.dataset.num);
    });

    const lcQuantity = localStorage.getItem("quantity");



    if (!lcQuantity) {
        localStorage.setItem("quantity", quantity.dataset.num);
        quantity.innerHTML = quantity.dataset.num;
    } else {
        quantity.innerHTML = lcQuantity;
        quantity.dataset.num = quantity.innerHTML;
    }

}