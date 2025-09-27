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
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
           // quiz başlayıp ilk soru listelendikten sonra alt tarafta next buttonun gösterilmesini burada da engelliyoruz.
        document.querySelector(".next_btn").classList.remove("show");
})


document.querySelector(".next_btn").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        // bir soru listelendikten sonra alt tarafta next buttonun gösterilmesini engelleyerek show classını next buttonundan kaldırıyoruz.
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz bitti");
    }
})

// option_liste direk ulaşmak yerine tüm bilgilerine ulaşmak için bir değişkene alıyoruz.
// ve bu üç değişkeni tüm fonkisyonlarda kullanmak için sışarı alıyoruz.
const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options +=
            `<div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>`;
    }

    
    document.querySelector(".question_text").innerHTML = question;
    // değişkene aldığımız option_listi ise burada optiona aktarıyoruz.
    option_list.innerHTML = options;

    // burada da .options_listin altındakki .option classına sahip bütün elemanları alıyoruz.
    const option = option_list.querySelectorAll(".option");

    // bu şekilde de .option_listin altındaki tüm .option elemanlarını consolda listeleyebiliriz.
    // console.log(option);

    // option elemanları yani her bir sorunun cevap seçenekleri içinde for ile dönerek her bir cevap seçeneğine bir click eventi ekleyerek aşağıda oluşturmuş olduğumuz optionSelected() fonksiyonunu ekliyoruz.
    // ve parametre olarak belirttiğimiz optiona buradaki cevap seçeneği anlamına gelen this i ekliyoruz.
    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

// burada optionSelected() fonkisyonunu oluşturup parametre olarak her bir cevap seçeneği olan optionu ekliyoruz.
function optionSelected(option) {
    // option içerisindeki spanın altındaki b içerisindeki cevap textini cevap değişkenine aktarıyoruz.
    let cevap = option.querySelector("span b").textContent;
    // quiz nesnesinin soruGetir() metodunu çağırarak soru değişkenine alıyoruz.
    let soru = quiz.soruGetir();

    // eğer vermiş olduğumuz cevap cevabıKontrolEt fonksiyonunda doğru cevap ise option divine correct clasını ve correctIcon'u ekle.
    // değilse incorrect clasını ve incorretIcon'u ekle
    if(soru.cevabıKontrolEt(cevap)) {
        option.classList.add("correct");
        //iconu da eklerken insertAdjacentHTML() ile konu belirtip sona ekleme yapıyoruz.
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    // option list altındaki option divlerini for ile dönerek bir cevaba tıkladıktan sonra diğer tüm seçeneklerin tıklanma eventlerini kapatıp başka bir seçeneğe tıklanmasını engelliyoruz.
    // disabled classını da css de sayfasında ekliyoruz.
    for(let i=0; i<option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }

    // ayrıca bir soru listelendikten sonra alt tarafta next butonu göstermek için next buttona show classını ekleyip css sayfasında düzenliyoruz.
    document.querySelector(".next_btn").classList.add("show");
}