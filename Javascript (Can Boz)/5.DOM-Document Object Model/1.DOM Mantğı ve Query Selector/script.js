// burada sadece ilk gördüğü p tagini seçecektir.
// const hata = document.querySelector('p');
// burada sadece ilk gördüğü .error classına sahip html elementini seçecektir.
// const hata = document.querySelector('.error');
// burada .error classına sahip div tagini seçecektir.
// const hata = document.querySelector('div.error');
// console.log(hata);

// burada ise tüm p html elementlerini seçecektir. 
// NodeList şeklinde seçecektir.
const hatalar = document.querySelectorAll('p');
console.log(hatalar);

// NodeList elemanlarına tek ulaşmak için 
console.log(hatalar[1]);

// querySelectorAll NodeList şeklinde seçtiği için elemanları yazdırmak için forEach döngüsü kullanıyoruz.
hatalar.forEach(hata => {
    console.log(hata);
})

