// querySelector ile a etiketini seçiyoruz.
const link = document.querySelector('a');
// getAttribute metodu belirtilen html etiket attributenin seçilmesini sağlar.
// burada a etiketinin href attribute nu seçiyoruz. href içerisindeki linke ulaşır. 
console.log(link.getAttribute('href'));

// setAttribute ise belirtilen html tag attribute nin içindeki değeri güncellememizi sağlar.
link.setAttribute('href', 'http://www.boztraining.com');

// textContent ise seçtiğimiz a etkiketinin text yazısını değiştirmemizi sağlar.
link.textContent = 'Boz Training'; 


// p etiketini seçiyoruz.
const pDegeri = document.querySelector('p');

// p etiketinin class attribute na ulaşıyoruz.
console.log(pDegeri.getAttribute('class'));
// p etiketinin ismi icerik olan classını error olarak güncelliyoruz.
pDegeri.setAttribute('class', 'error');


// *** setAttribute belirtilen attribute varsa günceller yoksa baştan oluşturur.
pDegeri.setAttribute('style', 'color:blue');