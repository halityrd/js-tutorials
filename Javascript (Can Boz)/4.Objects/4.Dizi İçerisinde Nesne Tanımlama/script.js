// const dersler = [
//     {isim: 'matematik', puan: 90},
//     {isim: 'fizik', puan: 80},
//     {isim: 'kimya', puan: 85}
// ]

let ogrenci = {
    ad : 'Can',
    yas : 29,
    email : 'cnboz@hotmail.com',
    sinif : 12,
    // yukarıda tanımladığımız dizi içeresindeki nesneleri buraya alıyoruz.
    dersler : [
        {isim: 'matematik', puan: 90},
        {isim: 'fizik', puan: 80},
        {isim: 'kimya', puan: 85}
    ],
    login() {
        console.log('Öğrenci giriş yaptı');
    },
    logout() {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons() {
        console.log(this.dersler);
        this.dersler.forEach(a => {
            // dersler dizisinin elemanları nesne olarak tanımlandığı için
            // foreach ile dizi elemanlarını döndürürken ve dizi elemanları da nesne oldukları için  bu şekilde ulaşılırlar.
            console.log(a.isim, a.puan);
        })
        // console.log(this);
    }
};


// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();