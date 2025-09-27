// // querySelector ile seçilen ilk p değeri
// const pdegeri = document.querySelector('p');
// // innertext html etiketinin içindeki texte ulaşılmasını sağlar.
// console.log(pdegeri.innerText);

// // burada da p elementine .innertText ile yeni bir text değeri giriyoruz.
// // değişiklik konsolda değil direk html içerisinde görünecektir.
// pdegeri.innerText = 'Can Boz Fullstack Developer';


// querySelectorAll ile bütün p etiketlerini seçiyoruz.
// const pdegeri = document.querySelectorAll('p');

// arrow functio şeklinde tüm p değerlerininin textlerini dönderip ilk ekrana yazdırıyoruz sonra içerik silinmeyecek şekilde üzerine yeni bir text ekliyoruz. 
// pdegeri.forEach(a => {
//     console.log(a.innerHTML);
//     a.innerText += ' yeni alan';
// })

// icerik classına sahip div etiketini seçip innerHtml ile içeriğini consola yazdırıyoruz.
// innerText html elementinin text içeriği ile innerHtml ise html içeriği ile işlem yapar.
const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

// bu şekilde var olan içeriği silip üzerine belirrtiğimiz htmli yazacaktır.
// icerik.innerHTML = '<h2>Vue JS, React JS, Angular JS</h2>';

// bu şekilde de var olan içeriği silmeden ekleme yapacaktır.
icerik.innerHTML += '<h2>Vue JS, React JS, Angular JS</h2>';

// ogrenciler dizisi elemanlarını foreach ile arrow function şeklinde döndürüp her bir eleman p taglari arasına gelecek şekilde ekliyoruz.
const ogrenciler = ['can', 'tuğba', 'elif'];
ogrenciler.forEach(ogrenci => {
    icerik.innerHTML += `<p>${ogrenci}</p>`;
})