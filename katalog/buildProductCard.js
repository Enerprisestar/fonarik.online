let main = document.createElement("main");
main.classList.add("main");
let mainkatalogherotext = document.createElement("h1");
mainkatalogherotext.classList.add("main__katalog__hero_text");
let wrappercardnewProduct = document.createElement("div");
wrappercardnewProduct.classList.add("wrapper-card-newProduct");

main.appendChild(mainkatalogherotext);
main.appendChild(wrappercardnewProduct);



function renderCardProduct(text, price, linkImg) {
    let catalogcard = document.createElement("div");
    catalogcard.classList.add("catalog-card");
    let catalogcardimg = document.createElement("div");
    catalogcardimg.classList.add("catalog-card_img");
    catalogcardimg.style.backgroundImage=`url(${linkImg})`;
    let catalogcardheader = document.createElement("div");
    catalogcardheader.classList.add("catalog-card_header");
    catalogcardheader.innerHTML = text;
    let catalogcardprice = document.createElement("div");
    catalogcardprice.classList.add("catalog-card_price");
    catalogcardprice.innerHTML = price+"грн";
    let buttonsellproduct = document.createElement("div");
    buttonsellproduct.classList.add("button__sell_product");
    buttonsellproduct.innerHTML = "Купить";

    catalogcard.appendChild(catalogcardimg);
    catalogcard.appendChild(catalogcardheader);
    catalogcard.appendChild(catalogcardprice);
    catalogcard.appendChild(buttonsellproduct);

    wrappercardnewProduct.appendChild(catalogcard);

    document.body.appendChild(main);
}

arr.forEach(function(item, i, arr) {
if(item.hasOwnProperty("Название категории")){
    mainkatalogherotext.innerHTML = item["Название категории"];
}
else{
    let arr2 = [];
    for (i in item) {
        arr2.push(item[i]);
    };
    renderCardProduct(arr2[0], arr2[1], arr2[2]);
}
});