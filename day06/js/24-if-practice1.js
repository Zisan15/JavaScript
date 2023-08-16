/*
    1- sayfada bir input olacak
    2- inputa bir fiyat bilgisi girilecek
    3-inputun yanına bir buton olacak ve bu butona tıklandığında aşağıdaki fonksiyonu çalıştıracak
    4- fiyat bilgisi 500'den büyükse 10% indirim uygulayan değilse de herhangi bir değişiklik yapmayan fonksiyon yazılacak
    5- cıktıyı sayfada bir elementin içerisinde gösterecek 
*/


function calculate() {
    const priceEl = document.querySelector("#price");
    const discountedPriceEl = document.querySelector("#discountedPrice");

    let price = priceEl.value;

    if (price > 500) {
        price *= 0.9;
        // price = price - (price * 10/100);
        // price -= price * 10/100;
        // price -= price * 0.1;
    }

    price = price.toFixed();

    discountedPriceEl.innerText = `DISCOUNTED PRICE: ${price}`;

    // clear
    priceEl.value = "";
};


