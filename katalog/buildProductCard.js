let main = document.createElement("main");
main.classList.add("main");
let mainkatalogherotext = document.createElement("h1");
mainkatalogherotext.classList.add("main__katalog__hero_text");
let wrappercardnewProduct = document.createElement("div");
wrappercardnewProduct.classList.add("wrapper-card-newProduct");

main.appendChild(mainkatalogherotext);
main.appendChild(wrappercardnewProduct);



function renderCardProduct(text, price, linkImg,linkPageProduct,id) {
    let catalogcard = document.createElement("div");
    catalogcard.classList.add("catalog-card",`catalog-card${id}`);
    let catalogggg = document.createElement("a");
    catalogggg.classList.add("catalogggg",`catalogggg${id}`);
    catalogggg.href=`${linkPageProduct}`;
    let catalogcardimg = document.createElement("div");
    catalogcardimg.classList.add("catalog-card_img",`catalog-card_img${id}`);
    catalogcardimg.style.backgroundImage=`url(${linkImg})`;
    let catalogcardheader = document.createElement("div");
    catalogcardheader.classList.add("catalog-card_header",`catalog-card_header${id}`);
    catalogcardheader.innerHTML = text;

    catalogggg.appendChild(catalogcardimg);
    catalogggg.appendChild(catalogcardheader);
    let catalogcardprice = document.createElement("div");
    catalogcardprice.classList.add("catalog-card_price",`catalog-card_price${id}`);
    catalogcardprice.innerHTML = price+" грн";
    let buttonsellproduct = document.createElement("div");
    buttonsellproduct.classList.add("button__sell_product","main_wrapper_card__buttom_buy",`main_wrapper_card__buttom_buy${id}`);
    buttonsellproduct.innerHTML = "Купить";

    catalogcard.appendChild(catalogggg);
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
    renderCardProduct(arr2[0], arr2[1], arr2[2],arr2[3],arr2[4]);
}
});