let catalog = {
    "naushniki": 1,
    "telephone": "2",
    "powerbank": "3",
}

let arr = [
    {"headerText":"1",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"2",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"3",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"4",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"5",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"6",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"7",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"8",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
     {"headerText":"9",
     "deskriptionText":"lorem impus",
     "linkImg":"../../imgCatalog/imgonline-com-ua-Resize-fEjkjf4ii57H.jpg"},
        ];

catalog["naushniki"]=arr

let main = document.createElement("main");
main.classList.add("catalog");
document.body.appendChild(main);


function renderCardProduct(headerText, deskriptionText, linkImg) {

    let header = document.createElement("div");
    header.classList.add("catalog-card_header");
    header.innerHTML = headerText;
    let description = document.createElement("div");
    description.classList.add("catalog-card_deskription");
    description.innerHTML = deskriptionText;
    let link = document.createElement("a");
    link.classList.add("catalog-card");
    let img = document.createElement("img");
    img.classList.add("catalog-card_img");
    img.setAttribute("src", linkImg);

    link.appendChild(header);
    link.appendChild(img);
    link.appendChild(description);

    main.appendChild(link);
}

catalog["naushniki"].forEach(function(item, i, arr) {
    let arr2=[];
    for(i in item){
    arr2.push(item[i]);
    };
    renderCardProduct(arr2[0],arr2[1],arr2[2]);
  });

  


  