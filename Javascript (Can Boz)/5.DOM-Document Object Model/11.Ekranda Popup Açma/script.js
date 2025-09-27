const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');
const close = document.querySelector('.popup-close');

// popup gösterme
button.addEventListener('click', () => {
    mainPopup.style.display = 'block';
})

// popup kapat tuşuyla kapatma
close.addEventListener('click', () => {
    mainPopup.style.display = 'none';
})

// popubu ekranın herhangi bi yerine bastığında kapatma
// main popup da tüm ekranı kapladığı için main popupa event ekliyoruz.
mainPopup.addEventListener('click', e => {
    // tıklandığı elementi consola yazmak için
    console.log(e.target);
    // eğer tıklandığında main popupdaysa gösterme
    if(e.target.className === 'main-popup') {
        mainPopup.style.display = 'none';
    }
})