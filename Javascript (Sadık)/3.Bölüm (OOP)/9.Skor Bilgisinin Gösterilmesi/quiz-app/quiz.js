// Quiz ile alakalı işlemleri quiz.js adlı bir js dosyasına alıyoruz.
function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    // Skor bilgisini almak için Quiz Constructor'unda doğruCevapSayisi adında değişken oluşturuyoruz.
    this.dogruCevapSayisi = 0;
}


Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}