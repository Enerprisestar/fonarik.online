// открытие и закрытие корзины

let headerrightBlock = document.querySelector('.header-rightBlock');
let exitbusked = document.querySelector('.exitbusked');
let backtoshop = document.querySelector('.backtoshop');
let zatemnenie = document.querySelector('.zatemnenie');
let efteme = document.querySelector('.efteme');
function functionRefProduct() {
  document.querySelector('.zatemnenie').style.display = "block";
  document.querySelector('.block_basked').style.display = "block";
  document.querySelector('body').style.overflow = "hidden";
}
function functionRefProductt() {
  document.querySelector('.zatemnenie').style.display = "none";
  document.querySelector('.block_basked').style.display = "none";
  document.querySelector('body').style.overflow = "visible";
}
function functionRefProducttt() {
  document.querySelector('.zatemnenie').style.display = "none";
  document.querySelector('.block_basked').style.display = "none";
  document.querySelector('body').style.overflow = "visible";
}
function functionRefProductttt() {
  document.querySelector('.zatemnenie').style.display = "none";
  document.querySelector('.block_basked').style.display = "none";
  document.querySelector('body').style.overflow = "visible";
}
function functionRefProducttttt() {
  document.querySelector('.zatemnenie').style.display = "block";
  document.querySelector('.block_basked').style.display = "block";
  document.querySelector('body').style.overflow = "hidden";
}
headerrightBlock.onclick = functionRefProduct;
exitbusked.onclick = functionRefProductt;
backtoshop.onclick = functionRefProducttt;
zatemnenie.onclick = functionRefProductttt;
efteme.onclick = functionRefProducttttt;


//

// данные о наличии товаров в корзине


let availabilityProductInBusked = [];


let idProduct = document.querySelector('.ded');
if(idProduct!==null){
  var idproducttttt = idProduct.classList[2].replace(/[^0-9]/g, "");
}

var mainwrappercardbuttombuy = document.querySelector('.main_wrapper_card__buttom_buy');

// отрисовка товара из локал сторадж

if (localStorage.length>=1) {
  availabilityProductInBusked = JSON.parse(localStorage.availabilityProductInBusked);
  let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
  let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
  let counerlocalstoragebuskedallproductsprice=0;
// счетчик цены товаров в корзине
  availabilityProductInBusked.forEach(function(item,index,arr){
    let a=item.prise.replace(/[^0-9]/g, "")
    counerlocalstoragebuskedallproductsprice+=a*item.amount;
  });
  counerlocalstoragebuskedallproductsprice+=" грн"
  headerrightBlockcounter.innerHTML=counerlocalstoragebuskedallproductsprice;
  headerrightBlockcounter1.innerHTML=counerlocalstoragebuskedallproductsprice;

  // счетчик количества товара в корзине
  let buskedmobilecounter = document.querySelector(`.busked__mobile_counter`);
  let buskedmobilecountersum=0;
  availabilityProductInBusked.forEach(function(item,index,arr){
    buskedmobilecountersum+=item.amount;
  });
  buskedmobilecounter.innerHTML=buskedmobilecountersum;
  buskedmobilecounter.style.display="block";



availabilityProductInBusked.forEach(function (item, index, arr) {
    document.querySelector(".block_basked__img").style.display = "none"
    document.querySelector(".oformitzakaz").style.display = "block"

    let bananaboom = document.querySelector('.bananaboom');
    let baskedproduct = document.createElement("div")
    baskedproduct.classList.add("basked__product", `basked__product${item.id}`);
    bananaboom.appendChild(baskedproduct);


    let baskedproductimgwrapperlink = document.createElement("a")
    baskedproductimgwrapperlink.classList.add("basked__product__img_wrapper_link",`basked__product__img_wrapper_link${item.id}`);
    baskedproductimgwrapperlink.href=item.urlpage;
    let baskedproductimg = document.createElement("div")
    baskedproductimg.classList.add("basked__product__img");
    if(item.src===undefined){
      baskedproductimg.style.backgroundImage = `${item.url}`;
    }
    else{
      baskedproductimg.style.backgroundImage = `url(${item.src})`;
    }
    let baskedproductwrapper = document.createElement("div")
    baskedproductwrapper.classList.add("basked__product__wrapper");
    baskedproductimgwrapperlink.appendChild(baskedproductimg);
    baskedproduct.appendChild(baskedproductimgwrapperlink);
    baskedproduct.appendChild(baskedproductwrapper);


    let baskedproducttextwrapperlink = document.createElement("a")
    baskedproducttextwrapperlink.classList.add("basked__product__wrapper__text",`basked__product__wrapper__text${item.id}`);
    baskedproducttextwrapperlink.href=item.urlpage;
    let baskedproductwrappertext = document.createElement("div")
    baskedproductwrappertext.classList.add("basked__product__wrapper__text");
    baskedproductwrappertext.innerHTML = item.nameProduct;
    let baskedproductwrapperprice = document.createElement("div")
    baskedproductwrapperprice.classList.add("basked__product__wrapper__price");
    baskedproductwrapperprice.innerHTML = item.prise;
    let baskedproductwrappercounter_and_buttom_delete_product = document.createElement("div")
    baskedproductwrappercounter_and_buttom_delete_product.classList.add("basked__product__wrapper__counter_and_buttom_delete_product");
    baskedproducttextwrapperlink.appendChild(baskedproductwrappertext);
    baskedproductwrapper.appendChild(baskedproducttextwrapperlink);
    baskedproductwrapper.appendChild(baskedproductwrapperprice);
    baskedproductwrapper.appendChild(baskedproductwrappercounter_and_buttom_delete_product);

    let baskedproductwrappercounter = document.createElement("div")
    baskedproductwrappercounter.classList.add("basked__product__wrapper__counter");
    let baskedproductwrapperdelete_product = document.createElement("div")
    baskedproductwrapperdelete_product.classList.add("basked__product__wrapper__delete_product", `basked__product__wrapper__delete_product${item.id}`);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrappercounter);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrapperdelete_product);

    let wrappercounterleft = document.createElement("i");
    wrappercounterleft.classList.add('fa-solid', 'fa-plus', 'wrapper__counter__left', `counterleft${item.id}`);
    let wrappercounterright = document.createElement("i");
    wrappercounterright.classList.add('fa-solid', 'fa-minus', 'wrapper__counter__right', `counterright${item.id}`);
    let baskedproductwrappercounternumber = document.createElement("span");
    baskedproductwrappercounternumber.classList.add('basked__product__wrapper__counter__number', `basked__product__wrapper__counter__number${item.id}`);
    baskedproductwrappercounternumber.innerHTML = item.amount;
    baskedproductwrappercounter.appendChild(wrappercounterright);
    baskedproductwrappercounter.appendChild(wrappercounterleft);
    baskedproductwrappercounter.appendChild(baskedproductwrappercounternumber);

    let fatrash = document.createElement("i");
    fatrash.classList.add('fa-solid', 'fa-trash');
    baskedproductwrapperdelete_product.appendChild(fatrash);


      let b = document.querySelector(`.counterleft${item.id}`);
      let bb = document.querySelector(`.counterright${item.id}`);
      let deleteProduct = document.querySelector(`.basked__product__wrapper__delete_product${item.id}`);

    // delete

      deleteProduct.onclick = function () {
        document.querySelector(`.basked__product${item.id}`).style.display = "none";

        let searchId = item.id;
        let index = arr.findIndex(function (item) { if (item.id === searchId) { return true } });
        availabilityProductInBusked.splice(index, 1);
        let aaa = JSON.parse(localStorage.availabilityProductInBusked);
        aaa.splice(index, 1);
        localStorage.availabilityProductInBusked = JSON.stringify(aaa);

        // отнять у счетчика над корзиной количество удаленного товара

        let b = document.querySelector(`.busked__mobile_counter`);
        let d = b.innerHTML;
        b.innerHTML = Number(d) - item.amount;

        // отнять у счетчика над корзиной ценность товара выраженой в гривне

        let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
        let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
        let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
        headerrightBlockcountersum = Number(headerrightBlockcountersum)
        let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
        headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - item.amount * abvgdiesh) + " грн");
        headerrightBlockcounter1.innerHTML=((headerrightBlockcountersum - item.amount * abvgdiesh) + " грн");


        if (document.querySelector('.main_wrapper_card__hero_text')!=null) {
          mainwrappercardbuttombuy.onclick = addToBasked;
          mainwrappercardbuttombuy.innerHTML = "Купить"
        }
        else{
          if(document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`)!=null){
            document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).onclick = addToBasked;
            document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).innerHTML = "Купить";
          }
      }

        // блокировка и отрисовка блоков после удаления последнего товара в корзине
        if (availabilityProductInBusked.length <= 0) {
          headerrightBlockcounter.style.display = "none";
          headerrightBlockcounter1.style.display = "none";
          document.querySelector('.block_basked__img').style.display = "block";
          let abcd = document.querySelector(`.busked__mobile_counter`);
          abcd.style.display = "none";
          document.querySelector('.oformitzakaz').style.display = "none";
          delete localStorage.availabilityProductInBusked;
        }
        document.querySelector(`.basked__product${item.id}`).remove();
      }

      // minus

      bb.onclick = function (aaaaaaaa) {
        if (item.amount <= 1) {

        }
        else {
          item.amount -= 1;
          let a = document.querySelector(`.basked__product__wrapper__counter__number${item.id}`);
          let c = a.innerHTML;
          a.innerHTML = Number(c) - 1;

          let aaa = JSON.parse(localStorage.availabilityProductInBusked);
          aaa[availabilityProductInBusked.findIndex(function (item) { if (item.id === aaaaaaaa.path[0].classList[3].replace(/[^0-9]/g, "")) { return true } })].amount -= 1;
          localStorage.availabilityProductInBusked = JSON.stringify(aaa);

          // отнять к счетчику над корзиной
          let b = document.querySelector(`.busked__mobile_counter`);
          let d = b.innerHTML;
          b.innerHTML = Number(d) - 1;

          // в гривне
          let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
          let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
          let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
          headerrightBlockcountersum = Number(headerrightBlockcountersum)
          let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
          headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - abvgdiesh) + " грн");
          headerrightBlockcounter1.innerHTML = ((headerrightBlockcountersum - abvgdiesh) + " грн");
        }
      }

      // plus

      b.onclick = function (aaaaaaaa) {
        item.amount += 1;
        let a = document.querySelector(`.basked__product__wrapper__counter__number${item.id}`);
        let c = a.innerHTML;
        a.innerHTML = Number(c) + 1;

        let aaa = JSON.parse(localStorage.availabilityProductInBusked);
        aaa[availabilityProductInBusked.findIndex(function (item) {if (item.id === aaaaaaaa.path[0].classList[3].replace(/[^0-9]/g, "")) { return true } })].amount += 1;
        localStorage.availabilityProductInBusked = JSON.stringify(aaa);


        // прибавить к счетчику над корзиной
        let b = document.querySelector(`.busked__mobile_counter`);
        let d = b.innerHTML;
        b.innerHTML = Number(d) + 1;

        // в гривне
        let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
        let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
        let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
        headerrightBlockcountersum = Number(headerrightBlockcountersum)
        let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
        headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum + abvgdiesh) + " грн");
        headerrightBlockcounter1.innerHTML = ((headerrightBlockcountersum + abvgdiesh) + " грн");
      }
  })

}

// начало огромной функции отрисовка товара в карзине на странице товара
let idkdkdkddk=null;

function addToBasked(identefikatorProductKatalog) {
alert(111)
  document.querySelector('body').style.overflow = "hidden";
alert(112)
  if(document.querySelector('.main_wrapper_card__hero_text')===null){
    alert(200)
    var identefikatorProductKatalogNumber=identefikatorProductKatalog.path[0].classList[2].replace(/[^0-9]/g, "");
    idkdkdkddk=identefikatorProductKatalogNumber
    availabilityProductInBusked[availabilityProductInBusked.length] = {
      id: identefikatorProductKatalogNumber,
    }
    alert(201)
  }
  else{
    alert(300)
    alert(identefikatorProductKatalog)
    alert(identefikatorProductKatalog.path[0])
    alert(identefikatorProductKatalog.path[0].classList[2])
    alert(identefikatorProductKatalog.path[0].classList[2].replace(/[^0-9]/g, ""))
    var identefikatorProductKatalogNumberProductPage=identefikatorProductKatalog.path[0].classList[2].replace(/[^0-9]/g, "");
    alert(3001)
    availabilityProductInBusked[availabilityProductInBusked.length] = {
      id: identefikatorProductKatalogNumberProductPage,
    }
    alert(301)
  }
alert(99999)

  // добавление товара в базу данных корзины и отрисовка 


if(document.querySelector('.main_wrapper_card__hero_text')===null){
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].nameProduct = document.querySelector(`.catalog-card_header${identefikatorProductKatalogNumber}`).innerHTML;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].prise = document.querySelector(`.catalog-card_price${identefikatorProductKatalogNumber}`).innerHTML;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].url = document.querySelector(`.catalog-card_img${identefikatorProductKatalogNumber}`).style.backgroundImage;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].urlpage = document.querySelector(`.catalogggg${identefikatorProductKatalogNumber}`).href;

    // отрисовка товара в корзине



    let bananaboom = document.querySelector('.bananaboom');
    let baskedproduct = document.createElement("div")
    baskedproduct.classList.add("basked__product", `basked__product${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].id}`);
    bananaboom.appendChild(baskedproduct);
  
  
    let baskedproductimgwrapperlink = document.createElement("a")
    baskedproductimgwrapperlink.classList.add("basked__product__img_wrapper_link",`basked__product__img_wrapper_link${identefikatorProductKatalogNumber}`);
    baskedproductimgwrapperlink.href=document.querySelector(`.catalogggg${identefikatorProductKatalogNumber}`).href;
    let baskedproductimg = document.createElement("div")
    baskedproductimg.classList.add("basked__product__img");
    baskedproductimg.style.backgroundImage = `${document.querySelector(`.catalog-card_img${identefikatorProductKatalogNumber}`).style.backgroundImage}`;
    let baskedproductwrapper = document.createElement("div")
    baskedproductwrapper.classList.add("basked__product__wrapper");
    baskedproductimgwrapperlink.appendChild(baskedproductimg)
    baskedproduct.appendChild(baskedproductimgwrapperlink);
    baskedproduct.appendChild(baskedproductwrapper);
  
  
    let baskedproducttextwrapperlink = document.createElement("a")
    baskedproducttextwrapperlink.classList.add("basked__product__wrapper__text",`basked__product__wrapper__text${identefikatorProductKatalogNumber}`);
    baskedproducttextwrapperlink.href=document.querySelector(`.catalogggg${identefikatorProductKatalogNumber}`).href;
    let baskedproductwrappertext = document.createElement("div");
    baskedproductwrappertext.classList.add("basked__product__wrapper__text");
    baskedproductwrappertext.innerHTML = document.querySelector(`.catalog-card_header${identefikatorProductKatalogNumber}`).innerHTML 
    let baskedproductwrapperprice = document.createElement("div")
    baskedproductwrapperprice.classList.add("basked__product__wrapper__price");
    baskedproductwrapperprice.innerHTML = document.querySelector(`.catalog-card_price${identefikatorProductKatalogNumber}`).innerHTML
    let baskedproductwrappercounter_and_buttom_delete_product = document.createElement("div")
    baskedproductwrappercounter_and_buttom_delete_product.classList.add("basked__product__wrapper__counter_and_buttom_delete_product");
    baskedproducttextwrapperlink.appendChild(baskedproductwrappertext)
    baskedproductwrapper.appendChild(baskedproducttextwrapperlink);
    baskedproductwrapper.appendChild(baskedproductwrapperprice);
    baskedproductwrapper.appendChild(baskedproductwrappercounter_and_buttom_delete_product);
  
  
    let baskedproductwrappercounter = document.createElement("div")
    baskedproductwrappercounter.classList.add("basked__product__wrapper__counter");
    let baskedproductwrapperdelete_product = document.createElement("div")
    baskedproductwrapperdelete_product.classList.add("basked__product__wrapper__delete_product", `basked__product__wrapper__delete_product${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].id}`);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrappercounter);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrapperdelete_product);
  
    let wrappercounterleft = document.createElement("i");
    wrappercounterleft.classList.add('fa-solid', 'fa-plus', 'wrapper__counter__left', `counterleft${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].id}`);
    let wrappercounterright = document.createElement("i");
    wrappercounterright.classList.add('fa-solid', 'fa-minus', 'wrapper__counter__right', `counterright${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].id}`);
    let baskedproductwrappercounternumber = document.createElement("span");
    baskedproductwrappercounternumber.classList.add('basked__product__wrapper__counter__number', `basked__product__wrapper__counter__number${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].id}`);
    baskedproductwrappercounternumber.innerHTML = 1;
    baskedproductwrappercounter.appendChild(wrappercounterright);
    baskedproductwrappercounter.appendChild(wrappercounterleft);
    baskedproductwrappercounter.appendChild(baskedproductwrappercounternumber);
  
  
    let fatrash = document.createElement("i");
    fatrash.classList.add('fa-solid', 'fa-trash');
    baskedproductwrapperdelete_product.appendChild(fatrash);
  
  
    // конец отрисовки товара
}
else{


  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].nameProduct = document.querySelector('.main_wrapper_card__hero_text').innerHTML;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].prise = document.querySelector('.main_wrapper_card__price').innerHTML;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].src = document.querySelector('.imgforcardbusked').src;
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].urlpage = window.location.href;


    // отрисовка товара в корзине

    let bananaboom = document.querySelector('.bananaboom');
    let baskedproduct = document.createElement("div")
    baskedproduct.classList.add("basked__product", `basked__product${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].id}`);
    bananaboom.appendChild(baskedproduct);
  
  
    let baskedproductimgwrapperlink = document.createElement("a")
    baskedproductimgwrapperlink.classList.add("basked__product__img_wrapper_link",`basked__product__img_wrapper_link${identefikatorProductKatalogNumber}`);
    baskedproductimgwrapperlink.href=window.location.href
    let baskedproductimg = document.createElement("div")
    baskedproductimg.classList.add("basked__product__img");
    baskedproductimg.style.backgroundImage = `url(${document.querySelector('.imgforcardbusked').src})`;
    let baskedproductwrapper = document.createElement("div")
    baskedproductwrapper.classList.add("basked__product__wrapper");
    baskedproductimgwrapperlink.appendChild(baskedproductimg)
    baskedproduct.appendChild(baskedproductimgwrapperlink);
    baskedproduct.appendChild(baskedproductwrapper);
  
    let baskedproducttextwrapperlink = document.createElement("a")
    baskedproducttextwrapperlink.classList.add("basked__product__wrapper__text",`basked__product__wrapper__text${identefikatorProductKatalogNumber}`);
    baskedproducttextwrapperlink.href=window.location.href;
    let baskedproductwrappertext = document.createElement("div")
    baskedproductwrappertext.classList.add("basked__product__wrapper__text");
    baskedproductwrappertext.innerHTML = document.querySelector('.main_wrapper_card__hero_text').innerHTML
    let baskedproductwrapperprice = document.createElement("div")
    baskedproductwrapperprice.classList.add("basked__product__wrapper__price");
    baskedproductwrapperprice.innerHTML = document.querySelector('.main_wrapper_card__price').innerHTML
    let baskedproductwrappercounter_and_buttom_delete_product = document.createElement("div")
    baskedproductwrappercounter_and_buttom_delete_product.classList.add("basked__product__wrapper__counter_and_buttom_delete_product");
    baskedproducttextwrapperlink.appendChild(baskedproductwrappertext);
    baskedproductwrapper.appendChild(baskedproducttextwrapperlink);
    baskedproductwrapper.appendChild(baskedproductwrapperprice);
    baskedproductwrapper.appendChild(baskedproductwrappercounter_and_buttom_delete_product);
  
  
    let baskedproductwrappercounter = document.createElement("div")
    baskedproductwrappercounter.classList.add("basked__product__wrapper__counter");
    let baskedproductwrapperdelete_product = document.createElement("div")
    baskedproductwrapperdelete_product.classList.add("basked__product__wrapper__delete_product", `basked__product__wrapper__delete_product${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].id}`);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrappercounter);
    baskedproductwrappercounter_and_buttom_delete_product.appendChild(baskedproductwrapperdelete_product);
  
    let wrappercounterleft = document.createElement("i");
    wrappercounterleft.classList.add('fa-solid', 'fa-plus', 'wrapper__counter__left', `counterleft${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].id}`);
    let wrappercounterright = document.createElement("i");
    wrappercounterright.classList.add('fa-solid', 'fa-minus', 'wrapper__counter__right', `counterright${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].id}`);
    let baskedproductwrappercounternumber = document.createElement("span");
    baskedproductwrappercounternumber.classList.add('basked__product__wrapper__counter__number', `basked__product__wrapper__counter__number${availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === idproducttttt) { return true } })].id}`);
    baskedproductwrappercounternumber.innerHTML = 1;
    baskedproductwrappercounter.appendChild(wrappercounterright);
    baskedproductwrappercounter.appendChild(wrappercounterleft);
    baskedproductwrappercounter.appendChild(baskedproductwrappercounternumber);
  
  
    let fatrash = document.createElement("i");
    fatrash.classList.add('fa-solid', 'fa-trash');
    baskedproductwrapperdelete_product.appendChild(fatrash);
  
  
    // конец отрисовки товара



}
if(idProduct!==null){
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumberProductPage) { return true } })].amount = 1;

}
else{
  availabilityProductInBusked[availabilityProductInBusked.findIndex(function (item) { if (item.id === identefikatorProductKatalogNumber) { return true } })].amount = 1;
}

  // интерфейс корзины счетчик товаров внутри


  function sumcolproductandprice() {
    let buskedmobilecounter = document.querySelector(`.busked__mobile_counter`);
    let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
    let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
    headerrightBlockcounter.style.display = "inline-block";
    headerrightBlockcounter1.style.display = "block";
    let headerrightBlockcountersum = 0;
    let buskedmobilecountersum = 0;
    availabilityProductInBusked.forEach(function (item, index, arr) {
      buskedmobilecountersum += item.amount;
      headerrightBlockcountersum += item.amount * Number(item.prise.replace(/[^0-9]/g, ""));
    })
    headerrightBlockcountersum += " грн"
    headerrightBlockcounter.innerHTML = headerrightBlockcountersum;
    headerrightBlockcounter1.innerHTML = headerrightBlockcountersum;
    buskedmobilecounter.innerHTML = buskedmobilecountersum;

    buskedmobilecounter.style.display = "block"
  }
  sumcolproductandprice();

  availabilityProductInBusked.forEach(function (item, index, arr) {
    let b = document.querySelector(`.counterleft${item.id}`);
    let bb = document.querySelector(`.counterright${item.id}`);
    let deleteProduct = document.querySelector(`.basked__product__wrapper__delete_product${item.id}`);

    // delete

    deleteProduct.onclick = function () {
      document.querySelector(`.basked__product${item.id}`).style.display = "none";

      let searchId = item.id;
      let index = arr.findIndex(function (item) { if (item.id === searchId) { return true } });
      availabilityProductInBusked.splice(index, 1);

      // отнять у счетчика над корзиной количество удаленного товара

      let b = document.querySelector(`.busked__mobile_counter`);
      let d = b.innerHTML;
      b.innerHTML = Number(d) - item.amount;
      localStorage.availabilityProductInBusked = JSON.stringify(availabilityProductInBusked);
      // отнять у счетчика над корзиной ценность товара выраженой в гривне

      let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
      let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
      let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
      headerrightBlockcountersum = Number(headerrightBlockcountersum)
      let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
      headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - item.amount * abvgdiesh) + " грн");
      headerrightBlockcounter1.innerHTML = ((headerrightBlockcountersum - item.amount * abvgdiesh) + " грн");

      if(document.querySelector('.catalog-card_header')===null){
        if (item.nameProduct == document.querySelector('.main_wrapper_card__hero_text').innerHTML) {
          mainwrappercardbuttombuy.onclick = addToBasked;
          mainwrappercardbuttombuy.innerHTML = "Купить";
        }
      }
      else{
          document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).onclick = addToBasked;
          document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).innerHTML = "Купить";
      }

      // блокировка и отрисовка блоков после удаления последнего товара в корзине
      if (availabilityProductInBusked.length <= 0) {
        headerrightBlockcounter1.style.display="none";
        headerrightBlockcounter.style.display = "none";
        document.querySelector('.block_basked__img').style.display = "block";
        let abcd = document.querySelector(`.busked__mobile_counter`);
        abcd.style.display = "none";
        document.querySelector('.oformitzakaz').style.display = "none";
        delete localStorage.availabilityProductInBusked;
      }
      document.querySelector(`.basked__product${item.id}`).remove();
    }

    // minus

    bb.onclick = function () {
      if (item.amount <= 1) {

      }
      else {
        item.amount -= 1;
        let a = document.querySelector(`.basked__product__wrapper__counter__number${item.id}`);
        let c = a.innerHTML;
        a.innerHTML = Number(c) - 1;

        localStorage.availabilityProductInBusked = JSON.stringify(availabilityProductInBusked);

        // отнять к счетчику над корзиной
        let b = document.querySelector(`.busked__mobile_counter`);
        let d = b.innerHTML;
        b.innerHTML = Number(d) - 1;

        // в гривне
        let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
        let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
        let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
        headerrightBlockcountersum = Number(headerrightBlockcountersum)
        let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
        headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - abvgdiesh) + " грн");
        headerrightBlockcounter1.innerHTML = ((headerrightBlockcountersum - abvgdiesh) + " грн");
      }
    }

    // plus

    b.onclick = function () {
      item.amount += 1;
      let a = document.querySelector(`.basked__product__wrapper__counter__number${item.id}`);
      let c = a.innerHTML;
      a.innerHTML = Number(c) + 1;
      localStorage.availabilityProductInBusked = JSON.stringify(availabilityProductInBusked);


      // прибавить к счетчику над корзиной
      let b = document.querySelector(`.busked__mobile_counter`);
      let d = b.innerHTML;
      b.innerHTML = Number(d) + 1;

      // в гривне
      let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
      let headerrightBlockcounter1 = document.querySelector(`.header-rightBlock__counter1`);
      let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
      headerrightBlockcountersum = Number(headerrightBlockcountersum)
      let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
      headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum + abvgdiesh) + " грн");
      headerrightBlockcounter1.innerHTML = ((headerrightBlockcountersum + abvgdiesh) + " грн");
    }

  })


  // конец
  if (availabilityProductInBusked.length >= 0) {
    document.querySelector('.block_basked__img').style.display = "none";
    document.querySelector('.oformitzakaz').style.display = "block";
  }

  document.querySelector('.block_basked').style.display = "block";
  document.querySelector('.zatemnenie').style.display = "block";
  

  if(idProduct!==null){
    document.querySelector(`.main_wrapper_card__buttom_buy${identefikatorProductKatalogNumberProductPage}`).innerHTML = "Товар в корзине"
    document.querySelector(`.main_wrapper_card__buttom_buy${identefikatorProductKatalogNumberProductPage}`).onclick = functionRefProduct;
  }
  else{
    document.querySelector(`.main_wrapper_card__buttom_buy${identefikatorProductKatalogNumber}`).innerHTML = "Товар в корзине"
    document.querySelector(`.main_wrapper_card__buttom_buy${identefikatorProductKatalogNumber}`).onclick = functionRefProduct;
  }

  localStorage.availabilityProductInBusked = JSON.stringify(availabilityProductInBusked);
}




// конец функции












// добавление товара в корзину

if(idProduct!=null){
  let a=availabilityProductInBusked.find(function(item, index, array) {
   if(item.id==idproducttttt){
return true
   }
  })
  if(a){
    document.querySelector(`.main_wrapper_card__buttom_buy`).onclick=functionRefProduct;
    document.querySelector(`.main_wrapper_card__buttom_buy`).innerHTML="Товар в корзине"
  }
  else{
    let aaa = document.querySelector('.main_wrapper_card__buttom_buy');
    aaa.onclick = addToBasked;
  }
}
else{
  let elements=document.getElementsByClassName('main_wrapper_card__buttom_buy');
  for (let item of elements) {
    let b=item.classList[2].replace(/[^0-9]/g, "");
    item.onclick=addToBasked;
let a=availabilityProductInBusked.forEach(function(item,index,arr){
if(item.id==b){
  document.querySelector(`.main_wrapper_card__buttom_buy${b}`).innerHTML="Товар в корзине";
  document.querySelector(`.main_wrapper_card__buttom_buy${b}`).onclick=functionRefProduct;
}
})
}
}

