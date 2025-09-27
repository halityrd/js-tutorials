// UI User Interface'in kısaltmasıdır.
// yani birçok yerde kullandığımız element seçme işlemlerini ya da methotları genl bir UI Constructor'unda tanımlyoruz.
function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    // html sayfasında score_box içinde tanımladığımız replay ve qit butonlarını UI Constructor'u içinde tanımlıyoruz.
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    // score_box propertysini de UI Constructor'una ekliyoruz.
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options +=
            `<div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>`;
    }

    
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}


UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

// UI Constructor'una skoru göster adında bir fonksiyon tanımlayıp toplamSoru ve dogruCevap parametlerini almasını sağlıyoruz.
UI.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}