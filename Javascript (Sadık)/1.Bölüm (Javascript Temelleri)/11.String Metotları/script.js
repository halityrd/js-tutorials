let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLocaleLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu");
sonuc = kursAdi.trim();         // sağ ve soldaki bütün boşluk karakterlerini siler.
sonuc = kursAdi.trimEnd();      // sondakini sil.
sonuc = kursAdi.trimStart();    // baştakini sil.

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0]; // boşluktan ayır ve 0. indexteki elemanı al. ("Komple")
sonuc = kursAdi.split(" ")[3]; // boşluktan ayır ve 3. indexteki elemanı al. ("Geliştirme")

console.log(sonuc);