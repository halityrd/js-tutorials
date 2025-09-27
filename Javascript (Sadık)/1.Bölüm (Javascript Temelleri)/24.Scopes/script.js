// *** geniş kapsamda tanımlanan değişkenlere alt kapsam da ulaşabilir.
// *** fakat dar kampsamda tanımlanan değişkenlere geniş kapsam ulaşamaz.


var isim = "Ahmet"; // global scope

function yazdir() {
    // global scope da tanımlanan bir değişkene fonksiyon içinde ulaşılabilir.
    // console.log(isim);

    // fonksiyon ilk başta kendi kapsamında isim değişkenini arayacağı için dışarıdan çağırıldığında Ayşe ismini yazdıracaktır.
    // eğer bulamazsa gider global socape içerisinden alır.
    var isim = "Ayşe";
    // değişken fonsiyon içersinde tanımlandığı için fonskiyon içerisinde ulaşılabilir.
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

yazdir();
console.log(isim);

// fakat değişken fonksiyon içerisinde tanımlandığı için global socope dan ulaşılamaz, hata verir.
// console.log(yas);

// *** if bloğu for bloğu gibi bloklar ayrı bir kapsam oluşturmadığı için içlerinde var ile tanımlanan değişkenlere globalde de ulaşılabilir.
if(true) {
    var isim = "Zeynep";
    console.log(isim);
}

console.log(isim);

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (let,const)

// *** blokların içlerinde let veya const ile değişken tanımlanırsa globaleden bu değişkenlere ulaşılmaz.
if(true) {
    let cinsiyet = "Kadın";
    let isim = "Zeynep";
    console.log(isim, cinsiyet);
}

// if bloğunda let ile tanımlandığı için hata verir.
console.log(cinsiyet);

console.log(isim);