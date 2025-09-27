// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.

const quiz = new Quiz(sorular);
// UI Constructor'dan ui isimli bir nesne oluşturup sayfada UI içinde tanımlamış olduğumuz tüm özelliklere UI içerisinden ulaşıyoruz.
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
        ui.quiz_box.classList.add("active");
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
});


ui.btn_next.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("quiz bitti");
        // score_box ekranda görüntüledindiğinde quiz box ile üstüste gelmemesi için quiz_box'ı göstermemek için active classını siliyoruz.
        ui.quiz_box.classList.remove("active");
        // css ve html sayfalarında eklemiş olduğumuz score_box kartına quiz bittiğinde göstermek için active classını ekliyoruz.
        ui.score_box.classList.add("active");
        // UI Constructor'unda tanımladığımız skoruGöster metodunu kodlar yukarıdan aşağı okunduğu için sorular cevaplandıktan sonra gösteriyoruz ve parametre olarak quiz içindeki soruların adetini ve doğruCevapSayisini gönderiyoruz.
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// UI Constructor'unda tanımlamış olduğumuz btn_quit buttonuna bir click eventi ekliyoruz.
// Ve window nesnesi üzerinde reload() metoduyla sayfayı tekrar yüklüyoruz.
ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabıKontrolEt(cevap)) {
        // quiz içerisinde tanımlayıp ilk basşta 0 değerini verdiğimiz dogruCevapSayisi'ni burda 1 arttırıyoruz.
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}