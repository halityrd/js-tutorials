// ilk önce button html etiketini seçiyoruz.
const button = document.querySelector('button');
// *** buttona arrow funciton şeklinde addEventListner ile bir click olayı ekliyoruz.
// button.addEventListener('click', () => {
//     console.log('Tıklandı');
// })

// querySelectorAll li elemanlarını NodeList olarak listeleceği için foreach kullanabiliriz.
const liElemanlari = document.querySelectorAll('li');

liElemanlari.forEach(eleman => {
// *** yukarıdaki addEventlistnerda boş bir EventListener versek de yine EventListeneri çağırır.
// *** burada e de yazsak başka bir şey de yazsak farketmez.
    eleman.addEventListener('click', e => {
        // *** burada consolda tüm mouse eventleri listelenecektir.
        console.log(e);
        // *** burada mouse eventlerinden target ile sayfada tıkladığımız li elemanını consolda yazdırabiliyoruz.
        console.log(e.target);
        console.log('Liye tıklandı');
        // burada da tıkladığımız li elemanına style özelliği ile mavi renk ekliyoruz.
        e.target.style.color = 'blue';

    })
})

// sayfadaki ul etiketini seçiyoruz.
const ul = document.querySelector('ul');
// istersek remove() metoduyla sayfadaki ul etiketini silebiliriz.
// ul.remove();

// li elemanlarını foreach ile döndürerek tıkladğımız li elemanını EventListener ile siliyoruz.
liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        e.target.remove();
    })
})

// en üstte zaten querySelector ile button elementini seçmiştik.
// buttona EventListener fonkisyonu ve createElement ile li elementi ekleme işlemi ekliyoruz.
// ve li elementinin textine de 'Javascript' texti ekliyoruz.
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Javascript';

    // yukarıda zaten ul etiketini querySelector ile seçmiştik.
    // buradaki append() methodu li etiketini ul içerisinde en sona ekler.
    // ul.append(li);
    // prepend() metodu ise en başa ekleme yapar.
    ul.prepend(li);
})
