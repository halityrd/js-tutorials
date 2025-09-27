// this keywordu bulunduğu yer anlamındadır.
// yazıldığı yerin içerdiği bölümü işaret eder.

let ogrenci = {
    ad : 'Can',
    yas : 29,
    email : 'cnboz@hotmail.com',
    sinif : 12,
    dersler : ['matematik', 'fizik', 'kimya'],
    login() {
        console.log('Öğrenci giriş yaptı');
    },
    logout() {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons() {
        // eğer burada this keywordu yazılmazsa fonksiyon çağrıldığında dersler elemanlarına ulaşamadığı için hata verecektir.
        console.log(this.dersler);
        // foreach içerisinde yazılan parametrenin nasıl yazıldığı öenmli değildir. her halikurda dizinin elemanlarını döndürecektir.
        // a, b, ders gibi istenidliği şekilde adlandırılabilir.
        // this.dersler buradaki dersler anlamındadır ve nesnenin içerisini işaret eder.
        this.dersler.forEach(a => {
            console.log(a);
        })
        // this burada kullanıldığında ekranda bulunduğu obje listelenecektir.
        // console.log(this);
    }
};

// this burada kullanıldığında ekranda window objesi çıkacaktır.
// console.log(this);
ogrenci.printLessons();
ogrenci.login();
ogrenci.logout();