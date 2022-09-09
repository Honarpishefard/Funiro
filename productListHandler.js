import bathroomProductsHandler from "./bathroomProductsHandler.js";
import bedroomProductsHandler from "./bedroomProductsHandler.js";
import lightingProductsHandler from "./lightingProductsHandler.js";
import decorativeProductsHandler from "./decorativeProductsHandler.js";


const productSecContainer = document.querySelector(".product-sec-container");
const Decorative = document.getElementById("Decorative");
const Bedroom = document.getElementById("Bedroom");
const Lighting = document.getElementById("Lighting");
const Bathroom = document.getElementById("Bathroom");

export default function productListHandler() {
    document.body.id = "bathroomProducts";
    bathroomProductsHandler();


    function catagorieIdentifier() {
        Bathroom.addEventListener("click", () => {
            document.body.id = "bathroomProducts";
            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #E89F71;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                bathroomProductsHandler();
            }, 2000)
        });

        Bedroom.addEventListener("click", () => {
            document.body.id = "bedroomProducts";
            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #E89F71;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                bedroomProductsHandler();
            }, 2000)
        });

        Lighting.addEventListener("click", () => {
            document.body.id = "lightingProducts";
            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #E89F71;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                lightingProductsHandler();
            }, 2000)
        });

        Decorative.addEventListener("click", () => {
            document.body.id = "decorativeProducts";
            productSecContainer.innerHTML = '';
            productSecContainer.innerHTML = `<div class="spinner-border d-flex m-auto" style="color: #E89F71;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;
            setTimeout(() => {
                productSecContainer.innerHTML = '';
                decorativeProductsHandler();
            }, 2000)
        })
    }
    catagorieIdentifier();
}