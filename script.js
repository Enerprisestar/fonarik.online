let headerbottomBlockwrapper__iconMenu = document.querySelector('.header-bottomBlock-wrapper__iconMenu');
let fachevronleft = document.querySelector('.fa-chevron-left');
function functionRef() {
    document.querySelector('.nav__menu').style.display = "block";
    document.querySelector('body').style.overflow = "hidden";

    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        event: "gtm-enhanced-ecommerce",
        ecommerce: {
            transaction_id: "12345",
            affiliation: "Online Store",
            value: "59.89",
            tax: "4.90",
            shipping: "5.99",
            currency: "UAH",
            coupon: "SUMMER_SALE",
            items: [{
                item_name: "Triblend Android T-Shirt",
                item_id: "12345",
                price: "15.25",
                item_brand: "Google",
                item_category: "Apparel",
                item_variant: "Gray",
                quantity: 1
            }]
        }
    });
}
function functionReff() {
    document.querySelector('.nav__menu').style.display = "none";
    document.querySelector('body').style.overflow = "visible";
}
headerbottomBlockwrapper__iconMenu.onclick = functionRef;
fachevronleft.onclick = functionReff;