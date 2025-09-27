// burada id si can olan html etkiketini seçer ve # işaretinin yazılmasına gerek yoktur.
const baslik = document.getElementById('can');
console.log(baslik);

// burada class ismi error olan html etiketlerini seçer.
// HTMLCollection şeklinde bir dizi olarak ekranda görüntülenir.
// queryselectordan farkı queryselector de elemeanlar NodeList şeklinde bir diziye aktarılır.
// NodeList şeklindeki dizilerde forEach döngüsü kullanılabilirken HTMLCollection şeklinde olanlarda kullanılamaz.
// bu da HTMLCollection'un bir dizi olarak algılanmamasına neden olur.
const hatalar = document.getElementsByClassName('error');
console.log(hatalar);
// ekrana 0. indexkteki elemanı yazma
console.log(hatalar[0]);

// getElementsByTagName de aynı getElementsByClassName gibi HTMLCollection olarak görüntülenir ve forEach kuullanılamaz.
// burada sayfaki tüm p etiketleri seçilir.
const pEtiketleri = document.getElementsByTagName('p');
console.log(pEtiketleri);
// ekrana 1. indexteki eleamnı yazma
console.log(pEtiketleri[1]);