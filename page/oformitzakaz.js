// событие чекбокс перевзонить вам да/нет?

document.querySelector('.checkboxfortelephon').onclick = function () {
  if (document.querySelector('.checkboxfortelephonicon').style.display == "inline") {
    document.querySelector('.checkboxfortelephonicon').style.display = "none"
    document.querySelector('.checkboxfortelephon').style.backgroundColor = "white"
  }
  else {
    document.querySelector('.checkboxfortelephonicon').style.display = "inline"
    document.querySelector('.checkboxfortelephon').style.backgroundColor = "#FEA526"
  }
}

// событие при клике на кнопку добавить комментарий чтоб один блок пропал а другой появился
document.querySelector('.form-item__kommentariu').onclick = function () {
  if (window.innerWidth <= 600) {
    document.querySelector('.form-item__inputkommentariu').style.display = "none"
    document.querySelector('.form-item__inputkommentarii').style.display = "block"
  }
  else {
    document.querySelector('.form-item__inputkommentariu').style.display = "none"
    document.querySelector('.form-item__inputkommentarii').style.display = "flex"
  }
}
// события открытия менюшки для кнопки доставки

document.querySelector('.form-item__content__dostavka').onclick = function () {
  document.querySelector('.zatemnenieforpageoformleniezakaza').style.display = "block"
  document.querySelector('.diliverioptions').style.display = "block"
}

document.querySelector('.zatemnenieforpageoformleniezakaza').onclick = function () {
  document.querySelector('.zatemnenieforpageoformleniezakaza').style.display = "none"
  document.querySelector('.diliverioptions').style.display = "none"
}

// событие кнопок выбора способа доставки

document.querySelector('.diliverioptions__first_options').onclick = function () {
  document.querySelector('.zatemnenieforpageoformleniezakaza').style.display = "none"
  document.querySelector('.diliverioptions').style.display = "none"
  document.querySelector('.diliverioptions__first_options').style.color = "#72A805"
  document.querySelector('.diliverioptions__second_options').style.color = "black"
  document.querySelector('.form-item__content__inputdiliveri').value = "В отделение Новой почты"
  document.querySelector('.form-item__title__dostavka').innerHTML = "Отделение";
}

document.querySelector('.diliverioptions__second_options').onclick = function () {
  document.querySelector('.zatemnenieforpageoformleniezakaza').style.display = "none"
  document.querySelector('.diliverioptions').style.display = "none"
  document.querySelector('.diliverioptions__second_options').style.color = "#72A805"
  document.querySelector('.diliverioptions__first_options').style.color = "black"
  document.querySelector('.form-item__content__inputdiliveri').value = "Адресная доставка Новой почтой"
  document.querySelector('.form-item__title__dostavka').innerHTML = "Адресс";
}










// события открытия менюшки для кнопки оплата

document.querySelector('.form-item__content__oplata').onclick = function () {
  document.querySelector('.zatemnenieforpageoplata').style.display = "block"
  document.querySelector('.oplataoptions').style.display = "block"
}

document.querySelector('.zatemnenieforpageoplata').onclick = function () {
  document.querySelector('.zatemnenieforpageoplata').style.display = "none"
  document.querySelector('.oplataoptions').style.display = "none"
}

// событие кнопок выбора способа оплаты

document.querySelector('.oplataoptions__first_options').onclick = function () {
  document.querySelector('.zatemnenieforpageoplata').style.display = "none"
  document.querySelector('.oplataoptions').style.display = "none"
  document.querySelector('.oplataoptions__first_options').style.color = "#72A805"
  document.querySelector('.oplataoptions__second_options').style.color = "black"
  document.querySelector('.form-item__content__inputoplata').value = "Оплата при получении"
  document.querySelector('.rekvizituforoplata').style.display = "none"
}

document.querySelector('.oplataoptions__second_options').onclick = function () {
  document.querySelector('.zatemnenieforpageoplata').style.display = "none"
  document.querySelector('.oplataoptions').style.display = "none"
  document.querySelector('.oplataoptions__second_options').style.color = "#72A805"
  document.querySelector('.oplataoptions__first_options').style.color = "black"
  document.querySelector('.form-item__content__inputoplata').value = "Предоплата картой"
  document.querySelector('.rekvizituforoplata').style.display = "block"
}
























if (localStorage.length == 0) {
  location.href = 'https://mywebshop.fun/index.html'
}


if (localStorage.length >= 1) {
  availabilityProductInBusked = JSON.parse(localStorage.availabilityProductInBusked);
  let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
  let counerlocalstoragebuskedallproductsprice = 0;
  // счетчик цены товаров в корзине
  availabilityProductInBusked.forEach(function (item, index, arr) {
    let a = item.prise.replace(/[^0-9]/g, "")
    counerlocalstoragebuskedallproductsprice += a * item.amount;
  });
  counerlocalstoragebuskedallproductsprice += " грн"
  headerrightBlockcounter.innerHTML = counerlocalstoragebuskedallproductsprice;



  availabilityProductInBusked.forEach(function (item, index, arr) {

    let bananaboom = document.querySelector('.efte');
    let baskedproduct = document.createElement("div")
    baskedproduct.classList.add("basked__product", `basked__product${item.id}`);
    bananaboom.appendChild(baskedproduct);


    let baskedproductimgwrapperlink = document.createElement("a")
    baskedproductimgwrapperlink.classList.add("basked__product__img_wrapper_link", `basked__product__img_wrapper_link${item.id}`);
    baskedproductimgwrapperlink.href = item.urlpage;
    let baskedproductimg = document.createElement("div")
    baskedproductimg.classList.add("basked__product__img");
    if (item.src === undefined) {
      baskedproductimg.style.backgroundImage = `${item.url}`;
    }
    else {
      baskedproductimg.style.backgroundImage = `url(${item.src})`;
    }
    let baskedproductwrapper = document.createElement("div")
    baskedproductwrapper.classList.add("basked__product__wrapper");
    baskedproductimgwrapperlink.appendChild(baskedproductimg);
    baskedproduct.appendChild(baskedproductimgwrapperlink);
    baskedproduct.appendChild(baskedproductwrapper);


    let baskedproducttextwrapperlink = document.createElement("a")
    baskedproducttextwrapperlink.classList.add("basked__product__wrapper__text", `basked__product__wrapper__text${item.id}`);
    baskedproducttextwrapperlink.href = item.urlpage;
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

      // отнять у счетчика над корзиной ценность товара выраженой в гривне

      let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
      let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
      headerrightBlockcountersum = Number(headerrightBlockcountersum)
      let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
      headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - item.amount * abvgdiesh) + " грн");


      if (document.querySelector('.main_wrapper_card__hero_text') != null) {
        mainwrappercardbuttombuy.onclick = addToBasked;
        mainwrappercardbuttombuy.innerHTML = "Купить"
      }
      else {
        if (document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`) != null) {
          document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).onclick = addToBasked;
          document.querySelector(`.main_wrapper_card__buttom_buy${item.id}`).innerHTML = "Купить";
        }
      }

      // блокировка и отрисовка блоков после удаления последнего товара в корзине
      if (availabilityProductInBusked.length <= 0) {
        headerrightBlockcounter.style.display = "none";
        delete localStorage.availabilityProductInBusked;
        location.href = 'https://mywebshop.fun/index.html'
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


        // в гривне
        let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
        let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
        headerrightBlockcountersum = Number(headerrightBlockcountersum)
        let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
        headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum - abvgdiesh) + " грн");
      }
    }

    // plus

    b.onclick = function (aaaaaaaa) {
      item.amount += 1;
      let a = document.querySelector(`.basked__product__wrapper__counter__number${item.id}`);
      let c = a.innerHTML;
      a.innerHTML = Number(c) + 1;

      let aaa = JSON.parse(localStorage.availabilityProductInBusked);
      aaa[availabilityProductInBusked.findIndex(function (item) { if (item.id === aaaaaaaa.path[0].classList[3].replace(/[^0-9]/g, "")) { return true } })].amount += 1;
      localStorage.availabilityProductInBusked = JSON.stringify(aaa);


      // в гривне
      let headerrightBlockcounter = document.querySelector(`.header-rightBlock__counter`);
      let headerrightBlockcountersum = headerrightBlockcounter.innerHTML.replace(/[^0-9]/g, "");
      headerrightBlockcountersum = Number(headerrightBlockcountersum)
      let abvgdiesh = Number(item.prise.replace(/[^0-9]/g, ""));
      headerrightBlockcounter.innerHTML = ((headerrightBlockcountersum + abvgdiesh) + " грн");
    }
  })

}





// проверка для кнопки оформить заказ все ли поля заполнены

document.querySelector('.form-item__content__oformitzakaz').onclick = function () {
  let fio = document.querySelector('.form-item__content__inputfio')
  let tel = document.querySelector('.form-item__content__inputtel')
  let citi = document.querySelector('.form-item__content__inputciti')
  let adress = document.querySelector('.form-item__content__inputadress')
  let optiondiliveri = document.querySelector('.form-item__content__inputdiliveri').value
  let optionoplata = document.querySelector('.form-item__content__inputoplata').value
  let checkbox = 0
  let kommentarii = 0;
  if (document.querySelector('.checkboxfortelephonicon').style.display == "inline") {
    checkbox = "Не перезванивать"
  }
  else {
    checkbox = "Перезвонить"
  }
  if (document.querySelector('.input--text__inputkommentarii').value.length > 0) {
    kommentarii = document.querySelector('.input--text__inputkommentarii').value
  }
  else {
    kommentarii = false;
  }
  if (fio.value.length >= 5) {
    if (tel.value.length >= 10) {
      if (citi.value.length >= 2) {
        if (adress.value.length >= 1) {
          let objCliend = {
            fio: fio.value,
            tel: tel.value,
            citi: citi.value,
            adress: adress.value,
            checkbox: checkbox,
            kommentarii: kommentarii,
            optiondiliveri: optiondiliveri,
            optionoplata: optionoplata
          }


          localStorage.infoclient = JSON.stringify(objCliend);
          location.href = 'https://mywebshop.fun/page/thankyouforbuy.html'
        }
        else {
          alert("Пожалуйста заполните поле доставки");
        }
      }
      else {
        alert("Пожалуйста исправьте поле город,название города должно состоять не менее чем из 2-ух букв")
      }
    }
    else {
      alert("Пожалуйста исправьте поле телефон,номер должен состоять не менее чем из 10-ти цифр")
    }
  }
  else {
    alert("Заполните пожалуйста поле Имя и фамилия,поле должно состоять не менее чем из 5-ти букв")
  }
}