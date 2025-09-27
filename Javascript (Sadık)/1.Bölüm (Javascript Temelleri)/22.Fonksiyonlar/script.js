function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi günler");

// burdan dönecek değere farklı bir işlemde ihtiyaç duyuluyorsa return ifadesi ile geriye döndürülür.
// örneğin buradan dönen yaş ile farklı bir işlem yapılabilir. (örneği aşağıda)
// yukarıdaki fonksiyon sadece ekrana mesaj yazdırdığı için return ifadesi kullanılmaz.
function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

// geri dönen değer bu şekilde satıra da yazdırılabilir.
console.log(yasHesapla(1985));

// ya da bu şekilde değişkende de saklanabilir.
let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) {
    // burada yukarıdaki yasHesapla fonksiyonundan dönen yas değerini alıyoruz. (Fonksiyon hesaplayıp geri gönderiyor.)
    // yani yasHesapla fonksiyonuna doğum yılını gönderip yaşı hesaplatıyoruz ve yas değişkenine aktarıyoruz.
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if(kalan_sene > 0) {
        console.log(`${isim}, ememekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");