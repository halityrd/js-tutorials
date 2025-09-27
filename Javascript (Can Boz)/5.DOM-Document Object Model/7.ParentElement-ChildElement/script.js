// querySelector ile section html elementini seçiyoruz.
const section = document.querySelector('section');
// bu şekilde ekrana section elementinin children elementlerine ulaşıyoruz.
// *** fakat HTMLCollection şeklinde ulaştığı için foreach kullanılmaz.
console.log(section.children);
// *** foreach kullanmak için children elementleri listesini diziye çeviriyouz.
console.log(Array.from(section.children));

// diziye çevrildikten sonra her bir children elemanını foreach ile döndürerek 'section-element' adlı classı ekliyoruz.
Array.from(section.children).forEach(child =>{
    child.classList.add('section-element');
})

// h2 etiketini seçiyoruz.
const baslik = document.querySelector('h2');
// h2 etiketinin parent elemanına (bir üst eleman) bu şekilde ulaşıp içindeki elemanları listeliyoruz.
console.log(baslik.parentElement);
// h2 etiketinin parentitin parentine ulaşmak için (iki üst eleman)
console.log(baslik.parentElement.parentElement);
// h2 elementinin bir sonraki kardeş elemanına ulaşmak için
console.log(baslik.nextElementSibling);
// h2 elementinin önceki kardeş elemanına ulaşmak için
console.log(baslik.previousElementSibling);
// h2 etiketinin bir sonraki kardes etiketinin parent etiketinin child etiketlerini listelemek için
console.log(baslik.nextElementSibling.parentElement.children);