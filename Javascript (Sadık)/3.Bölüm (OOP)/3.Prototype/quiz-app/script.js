// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.


function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    // this.cevabıKontrolEt = function(cevap) {
    //     return cevap === this.dogruCevap
    // }
    
    // Burada this Constructor'dan türetilen her bir nesneyi ifade eder.
    // Dolasıyla consola bu şekilde Soru Constructor'dan türetilmiş tüm soruları yazdırabiliriz.
    console.log(this);
}

// Constructor'dan türetilen her bir nesneye Constructor içinde var olan herbir prototype ve metotlar kopyalanır.
// Dolayısıyla 200-300 tane soru olsa prototyplerin yanında tüm metotlar da kopyalanacak.
// Her nesnenin kendi özelliklerinden başka bir de ortak kullanılan Prototype özellikleri vardır.
// Bu yüzden metotlar her bir neseye kopyalanmasın tek bir yerden bu metota ulaşılsın diye metotu Prototypin içerisine alıyoruz.
// Aldıktan sonra consolda Constructor'ın Prototype bölümünde görüntülenecektir.
// Böylelikle daha performanslı bir uygulama oluşturuyoruz.
Soru.prototype.cevabıKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]


console.log(soru1.cevabiKontrolEt("c"));
