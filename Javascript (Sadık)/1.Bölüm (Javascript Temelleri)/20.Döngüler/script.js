// 1'den 10'a kadar olan sayıların toplamı (10 dahil)
// let toplam = 0;

// for(let i = 1; i <= 10; i++) {
//     toplam += i;
// }
// console.log(toplam);

// dizi şeklinde verilen karışık sayıların toplamı
let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];

let toplam = 0;

// for(let i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
// }

// yukarıdaki döngünün in operatörü ile dizideki sayıların indeks numaralarına erişip kısa şekilde yazılmış hali
// for(let i in sayilar) {
//     toplam += sayilar[i];
// }

// kaç eleman varsa index numaraları ekrana yazılabilir.
// sayılar in aracılığı ile index değişkenine atılır.
// for(let index in sayilar) {
//     console.log(index);
// }

// of operatörü ise elemanların index numaraları değil kendilerine ulaşılmasını sağlar.
// for(let sayi of sayilar) {
//     console.log(sayi);
// }

for(let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name" : "Sadık Turan",
    "username" : "sadikturan",
    "password" : "12345",
    "email" : "info@sadikturan.com"
};

// nesne elemanlarına ulaşıp in operatörü aracılığı ile key değişkenine atılması (index numarası key'e karşılık geliyor)
// daha sonra ekrana key adlarının yazılması
// ve eleman değerlerinin ekrana yazılması
for(let key in user) {
    console.log(key);
    console.log(user[key]);
}