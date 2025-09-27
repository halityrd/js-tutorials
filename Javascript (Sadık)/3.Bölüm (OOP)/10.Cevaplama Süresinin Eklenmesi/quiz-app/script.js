// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.

const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
        ui.quiz_box.classList.add("active");
        // aşağıda oluştuduğumuz startTimer() fonksiyonu burada yani btn_starta tıkladığı zaman çağırıyoruz.
        startTimer(10);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
});


ui.btn_next.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        // diğer soru buttonuna tıkladığımız ilk önce counteri sıfırla
        clearInterval(counter);
        // daha sonra süreyi tekrar başlat
        startTimer(10);
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        // her soru geçişinde süreyi sıfırla
        clearInterval(counter);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

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
    // herhangi bir cevap seçeneğine tıkladığımızda da süreyi durduruyoruz.
    clearInterval(counter);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabıKontrolEt(cevap)) {
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

// aşağıda kullandığımız setInterval() metodunu counter isminde bir değişkene aktarıyoruz çünkü setInterval()'ın bellekten temizlenmesi için clearInterval() metodunda hem de dışarıda da kullanıyoruz.
let counter;
// StartTimer() isminde bir fonkisyon oluşturuyoruz.
function startTimer(time) {
    // setInterval() metodu içinde tanımalanan metodu belirtilen sürede, yani 1 saniyede bir çağırır.
    counter = setInterval(timer, 1000);

    // daha sonra fonksiyon içerisinde fonkisyon oluşturup setInterval() metodu içerisinde eklediğimiz timer fonksiyonunu tanımlıyoruz.
    function timer() {
        //ui içerisinde tanımlanana time_second'ub text içeriğine time bilgisini aktarıyoruz.
        ui.time_second.textContent = time;
        // ve her seferinde de verilen time değerini 1 azaltıyoruz.
        time--;

        // eğer verilen süre azaldğında 0 dan küçük olursa clearInterval() metodunu çağır counter bilgisini temizle.
        if(time < 0) {
            clearInterval(counter);
            // ayrıca .time_text divinin textine de Süre Bitti içeriğini ekle
            ui.time_text.textContent = "Süre Bitti";

            // quizin soruGetir() metoduyla sorunun doğru cevabına ulaşıyoruz ve cevap değişkenine aktarıyoruz.
            let cevap = quiz.soruGetir().dogruCevap;

            // her cevap seçeneğininin içerisinde dönerek her defasında option değişkenine aktarıyoruz.
            for(let option of ui.option_list.children) {
                // eğer bu seçeneklerdeb hangisi yukarıda cevap değişkenine aktardığımız doğru cevaba eşitse
                if(option.querySelector("span b").textContent == cevap) {
                    // option class listesine correc classını ve yanına da correctIconu ekle
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                // ve ayrıca süre bittiğinde de tüm seçeneklerin tıklanmasını kapat.
                option.classList.add("disabled");
            }

            // sonra da btn_next buttonunu göstermek için show classını ekle
            ui.btn_next.classList.add("show");
        }
    }
}