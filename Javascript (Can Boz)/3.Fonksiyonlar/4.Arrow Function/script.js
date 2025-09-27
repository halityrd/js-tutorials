// const karealani = function(kenar) {
    
//     // let alan = kenar ** 2;
//     // console.log(alan);
//     // return alan;
//     return kenar ** 2;
// }

// const sonuc = karealani(6);

// console.log(sonuc);

// eğer tek bir parametre varsa istenilirse parantez kullanılmaz.
// ve eğer return ifadesi tek satırsa {} 'ler istenirse kullanılmaz. birden falza satır varsa kullanılır.
// ve return ifadesi return edilirken yazılmaz.
const karealani = kenar => kenar ** 2;

const sonuc = karealani(6);

console.log(sonuc);


// const can = function() {
//     return 'Can';
// }

// const sonuc2 = can();
// console.log(sonuc2);

// eğer fonksiyon hiçbir parametre almıyorsa parantezler kaldırılmaz. sadece bir parametre aldığında kaldırılabilir.
const can = () => 'Can';

const sonuc2 = can();
console.log(sonuc2);


// const fatura = function(urunler, vergi) {
//     let toplam = 0;
//     for(let i = 0; i < urunler.length; i++) {
//         toplam += urunler[i] + urunler[i] * vergi;
//     }
//     return toplam;
// }

// console.log(fatura([10,20,30], 0.25));

// üstteki fonksiyonun arrow fonksiyon şeklinde yazılmış hali
// iki parametre aldığı için parantezler kaldırılmaz.
// fonksiyon içi birden fazla satır olduğu için {}'ler kaldırılmaz.
const fatura = (urunler, vergi) => {
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}

console.log(fatura([10,20,30], 0.25));
