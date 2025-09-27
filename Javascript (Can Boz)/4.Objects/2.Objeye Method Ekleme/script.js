let ogrenci = {
    ad : 'Can',
    yas : 29,
    email : 'cnboz@hotmail.com',
    sinif : 12,
    dersler : ['matematik', 'fizik', 'kimya'],
    // function yazıldığında düzenli function olarak tanımlanır.
    // istenirse function yazılmadan alttaki gibi kısa şekilde de yazılabilir.
    // nesnenin içerisinde fonksiyon arrow fonksiyon şeklinde tanımlanamaz.
    // login : function() {
    //     console.log('Öğrenci giriş yaptı');
    // },
    // logout : function(){
    //     console.log('Öğrenci çıkış yaptı');
    // },
    login() {
        console.log('Öğrenci giriş yaptı');
    },
    logout() {
        console.log('Öğrenci çıkış yaptı');
    }
};

ogrenci.login();
ogrenci.logout();