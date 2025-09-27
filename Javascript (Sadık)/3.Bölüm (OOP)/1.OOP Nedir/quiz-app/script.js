// OOP: Nesne Tabanlı Programlama
// Object

// *** Nesne Tabanlı Programlama'nın temelinde nesne geçer.

// Burada soru değişkeninde soru nesne verileri oluşturuyoruz ve nesnenin her propertysine özelikler aktarıyoruzç
let soru = {
    soruMetni : "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri : {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap : "c",
    // fonkisyona dışardan gönderilecek cevap parametresi tanımlıyoruz.
    // nesne içerisinde fonksiyonu yazdığımız için soru değişkeniin içerisindeki dogruCevap demek için this keywordunu kullanıyoruz.
    // dışardan bu parametreye a,b,c şeklinde cevaplar göndererek doğru cevabı return ediyoruz.
    // yani buradaki doğruCevap şeklinde yer gösterici olarak. yoksa doğruCevaba ulaşamayız.
    cevabıKontrolEt : function(cevap) {
        return cevap === this.dogruCevap
    }
}

let soru2 = {
    soruMetni : "Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri : {
        a: "Node.js",
        b: "nuget",
        c: "Npm"
    },
    dogruCevap : "b",
    cevabıKontrolEt : function(cevap) {
        return cevap === this.dogruCevap
    }
}

// burada da istersek soru metnini ya da cevabıKontrolEt() fonskiyonuna parametre göndererek consola yazdırabiliriz.
console.log(soru.soruMetni);
console.log(soru.cevabıKontrolEt("c"));
console.log(soru2.cevabıKontrolEt("c"));


// Projede kullandığımız sorular 2 tane değil de 30 tane olabilir.
// Dolayısıyla bunları 30 defa yazmak yerine tek bir yerde tanımlamak için bir kalıp tanımlayıp bu kalıptan kopyalar oluşturmak için başlangıçta bir sınıf oluşturup bu sınıftan da nesneler tanımlayabiliriz.
// Tanımlanan nesneler tamamen sınıfa bağlı olacağından herbir nesne aynı propertylere ve aynı metotlara sahip olacağından işimizi daha kolay hale getirecek.
// Sınıf, Constructor => nesne * 30
// Sınıf kavramı ES6'dan itiaren anılmaktadır.
// ES5'te de bunun için Constructor kavramı kullanılmaktadır.
// Yani ES5'te oluşturalan bir Constructor kavramı diğer  ES6 ve ES7 Sınıf'a karşılık gelir.
// ES5 de tüm tarayıcılarda çalışmaktadır fakat Constructor yapısı ile oluşturduklarımız garanti altına almak gerekir.
// Bunun için önce Constructor yapısını göreceğiz ve kullanacağız.
// ES5, ES6, ES7