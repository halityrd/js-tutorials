// dict, json
let kullaniciA = {
    "ad" : "Sadık",
    "soyad" : "Turan",
    "yas" : 38,
    "adres" :{
        "sehir" : "Kocaeli",
        "ilce" : "İzmit"
    },
    "hobiler" : ["sinema", "spor"]
}

let kullaniciB = {
    "ad" : "Çınar",
    "soyad" : "Turan",
    "yas" : 55,
    "adres" :{
        "sehir" : "Kocaeli",
        "ilce" : "İzmit"
    },
    "hobiler" : ["sinema", "spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"]; // nesne elemanına bu şekilde de ulaşılabilir.
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0]; // nesne altındaki dizi elemanına ulaşma
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad; // dizi altındaki nesne elemanına ulaşma

// dizi içerisinde nesne tanımlama
let urunler = [   
    {
        "urun_adi": "samsung s22",
        "urun_fiyat" : 13000
    },
    {
        "urun_adi" : "samsung s23",
        "urun_fiyat" : 15000
    }
]

sonuc = urunler[0].urun_adi; // dizi içerisinde tanımlanan nesne elemanına ulaşma

console.log(sonuc);