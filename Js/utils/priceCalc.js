const Shipping = document.getElementById("Shipping");

export default function priceCalc() {
    let lcPriceCheck = JSON.parse(localStorage.getItem("price"));
    const sum = lcPriceCheck.reduce(function (a, b) {
        return a + b;
    }, 0);
    Subtotal.innerHTML = ("$" + " " + (sum).toFixed(2));
    Total.innerHTML = (sum + Number(Shipping.innerHTML)).toFixed(2);
};