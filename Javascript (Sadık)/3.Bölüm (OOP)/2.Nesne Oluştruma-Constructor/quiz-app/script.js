// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.

// let soru2 = {
//     soruMetni : "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri : {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap : "b",
//     cevabıKontrolEt : function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// Constructor tanımlarken küçük harf de kullanılabilir. 
// Fakat bunun kalıp olduğunu anamak için ve bundan nesneler oluşturacağımız kalıbı büyük harle, oluşturduğumuz nesneleri de küçük harfle başlatmaya özen gösteriyoruz.
// Constructor'da gönderdiğimiz parametler aslında yukarıda oluşturduğumuz soru nesne verisinin propertyleri.
// Soru Constructor'dan nesne türetirken bunları kullanacağız.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    // burada oluşturuduğumuz her bir property örneğin 30 tane türeteceğimiz her bir sorunun propertylerini temsil eecek.
    // yani burada oluşturduğumuz soruMetni nesne oluştururken dışarıdan göndereceğimiz soru metnine eşit olacak bunun için this keywordu kullanıyoruz.
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    // Constructor'a bir metot da ekleyerek dışarıdan gelen cevabı kontrol edip return ile geri gönderebiliriz.
    // Her nesnye artık bu özelliği de eklemiş oluyoruz.
    this.cevabıKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    }
}

// Soru Constructor'dan soru nesnesi türetirken bu şekilde new keywordu kullanıyoruz.
// Ve bizden beklediği parametleri giriyoruz.
let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

// Oluşturmuş olduğumuz nesnelere ila bir değişkene almamaız gerekmiyor.
// Bu şekilde bir dizi içerisinde direk Constructor'dan nesneler türetebiliriz.
let sorular = [
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]

console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);
// burada da Constructor'da oluşturduğumuz cevabıKontrolEt() metodu her nesneye de eklendiği için bu şekilde kullanailiriz.
console.log(soru1.cevabıKontrolEt("c"));
console.log(soru2.cevabıKontrolEt("c"));

// bu şekilde oluşturduğumuz Sorular dizisindeki nesnenin propertysine erişebiliriz.
console.log(sorular[0].soruMetni);

// ya da bu şekilde bir for döngüsü oluşturup dizinin içindeki tüm soruların soru metinlerini consola yazdırabiliriz.
for(let s of sorular) {
    console.log(s.soruMetni);
}


