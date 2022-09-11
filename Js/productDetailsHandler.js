
const productSecContainer = document.querySelector(".product-sec-container");


export default function chosenProduct() {
    const allProducts = [...productSecContainer.children];
    allProducts.forEach((card) => {
        card.addEventListener("click", (e) => {
            localStorage.setItem("clickedOn", e.currentTarget.id);
            location.href = "product-datails.html";
            // window.open("product-datails.html");
            const pageId = document.body.id;
            localStorage.setItem("pageId" , pageId);
        });
    });
};