/*
    1- 2 tane input olacak
    2- 1 tane buton olacak
    3- inputlar sayı değeri alacak
    4- butona tıklandığında inputlardaki değerler toplayacak bir fonksiyon oluşturulacak
    5- toplam sonucu başka bir sonuç etiketi içine yazdırılacak

*/



function topla(){

    //DOM'A ERİŞİM
    const sayi1 = document.querySelector("#sayi1").value;
    const sayi2 = document.querySelector("#sayi2").value;
    const sonucEl= document.querySelector("#sonuc");

    
    const toplam = +sayi1 + +sayi2;// const toplam = Number(sayi1) + Number(sayi2);
    console.log(toplam);

    sonucEl.innerText=`TOPLAM: ${toplam}`;

};


// DOM'A ERISIM
/* const inputEl1 = document.querySelector("#sayi1");
const inputEl2 = document.querySelector("#sayi2");
const sonucEl = document.querySelector("#sonuc");

function topla() {
    const toplam = +inputEl1.value + +inputEl2.value;
    // const toplam = Number(sayi1) + Number(sayi2);

    sonucEl.innerText = `TOPLAM: ${toplam}`;

    // clear
    inputEl1.value = "";
    inputEl2.value = "";
}; */




