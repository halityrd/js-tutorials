// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.


function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabıKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("1-Hangisi javascript yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]


// bir Quiz Constractor'u oluşturuyoruz ve parametre olarak da dışarıdan gelen sorular listesini alacak.
function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

// Quiz Constractor'un Prototype'ne de soruGetir() adında bir metot ekliyoruz ve dışarıya sorular listesi dizisinin indexini döndürüyor.
// Quiz içerisindeki sorular içerisinden o andaki quiz indexi neyse onu getir.
Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

// burada da quiz ismindeki değişkene Constractor'dan oluşturulmuş bir nesne kopyası atıyoruz.
const quiz = new Quiz(sorular);

// Html sayfasında bulunan .btn-start isimli butonu seçerek bir click eventi ekliyoruz.
document.querySelector(".btn-start").addEventListener("click", function() {
    // eğer sorular listesinin uzunluğu soru adetine eşit değilse ekrana soruGetir() methodunu kullanarak ve her defasında bir arttırarak consola bir soru yazdır.
    if(quiz.sorular.length != quiz.soruIndex) {
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    // eşit olduğu durumda ise başka soru kalmamıştır ve quiz bitti yazdır.
    } else {
        console.log("quiz bitti");
    }
})
