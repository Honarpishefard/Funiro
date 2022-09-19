const i = document.getElementsByTagName("i")[0];
const totalParent = document.getElementById("totalParent");
const couponInput = document.getElementById("couponInput");

let discountApplied = false;

export default function discountHandler(){
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
};