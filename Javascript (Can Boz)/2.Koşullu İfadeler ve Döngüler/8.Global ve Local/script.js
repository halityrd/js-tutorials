let yas = 29;

if(true) {

    let yas = 60;
    console.log("İçerideki: ", yas);

    if(true) {
        let yas = 50;
        let ad = "Can";
        let cantest = "Hobaa";
        console.log("İçeridekinin içindeki: ", yas, ad, cantest);
    }
}

// yas değişkeni if in içindeki if de let ile tanımandığı için dışarıdan ulaşılmaya çalışıldığında hata verir.
// eğer var ile tanımlansaydı hata vermezdi.
console.log("Dışarıdaki:", yas, cantest);