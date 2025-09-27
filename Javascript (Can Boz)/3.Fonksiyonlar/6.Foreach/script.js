
// calback function
const a = (callBacka) => {
    let yas = 40;
    callBacka(yas);
};

a (function(value) {
    console.log(value);
})


// foreach tanımlanan dizinin elemanı kadar dönerek işlem yapar.
let ogrencilerim = ['can', 'hakan', 'elif', 'tuba'];

ogrencilerim.forEach(function() {
    console.log("Selam");
})

// parametre alan foreach döngüsü
ogrencilerim.forEach(function(kisi, index) {
    console.log(kisi, index);
})


// arrow fonkisyon şeklinde foreach döngüsünü değişkene atarak kullanma
const ogrenci = (kisi, index) => {

    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);