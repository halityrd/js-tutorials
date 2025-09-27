/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarihi = "2012";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
console.log(parseInt(ogr1_ortalama)); //sonuç ondalıklı çıktığı iiçin tam sayı değerini almak için parseInt fonkisyonunu kullandık.
                                      // eğer ondalıklı almak istiyorsak parseFloat fonkisyonu da kullanılabilir.
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "Yiğit";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarihi = "2010";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
console.log(parseInt(ogr2_ortalama));

console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getFullYear(); // bilgisayarın şu anki yılını almak için kullanılan fonksiyon
let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi); // normalde numberdan strgint çıkarıldığında ekrana doğru yazdırır. 
                                                       //fakat burada tam sayı değeri almak için parseInt fonkisyonu kullandık.
console.log(ogr1_yas);

let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
console.log(ogr2_yas);

