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


let sorular = [
    new Soru("1-Hangisi javascript yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]


function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}


Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function() {
        // burayı da biraz sadeleştirip quiz_boxun gelmesi ve soruların başlaması için active classının eklenmesini ve soru göstermeye başlaması için soruGöster() fonksiyonu çağırıyoruz
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
})

// quiz başladıktan sonra birsonraki soruya geçmek için de .next_btn butonunu seçip bir click eventi ekleyip if şart bloğunu buraya ekliyoruz.
document.querySelector(".next_btn").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        // aşağıdaki oluşturmuş olduğumuz soruGöster() fonksiyonuna burada çağırıp parametre olarak soruGetir() metodunu gönderiyoruz.
        soruGoster(quiz.soruGetir());
    } else {
        console.log("quiz bitti");
    }
})

// soruGoster() fonksiyonu soru nesnesine göre bir listeleme yapacak.
function soruGoster(soru) {
    // Nesnenin soru.soruMetni propertysini question adlı değişkene html deki span etiketleri arasına gelecek şekilde atıyoruzç
    let question = `<span>${soru.soruMetni}</span>`;
    // bir de cevap seçeneklerini tutacak olan options değişkeni oluşturup başlangıçta boş bırakıyoruz.
    let options = '';

    // daha sonra nesnenin cevap seçenekleri arasında dönecek bir for döngüsü oluşturuyoruzç
    // her bir cevap seçeneğini bir arttırarak html içerisindeki option divleri arasında gösteriyoruz
    // her cevap a, b, c şeklindeki bilgilere karşılık geliyor.
    // burdan da cevapSecenekleri[cevap] dediğimizde de keye karşılık gelen value, yani a nın yanındaki örneğin Typescript cevabına ulaşıyoruz.
    for(let cevap in soru.cevapSecenekleri) {
        options +=
            `<div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>`;
    }

    // html sayfasındaki .question_text adlı elementini seçerek yukarıda oluşturmuş olduğumuz question bilgisini aktarıyoruz.
    document.querySelector(".question_text").innerHTML = question;
    // aynı şekilde .option_listi seçerek yukarıda oluşturup for ile doldurduğumuz option bilgisii aktarıyoruz.
    document.querySelector(".option_list").innerHTML = options;
}