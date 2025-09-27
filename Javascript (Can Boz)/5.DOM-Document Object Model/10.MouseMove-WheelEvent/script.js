// classı kutu olan div elementini seçiyoruz.
const kutu = document.querySelector('.kutu');

// mousemove eventi mouse hareketlerine x ve y kordinatı şeklinde ulaşmamızı sağlar.
kutu.addEventListener('mousemove', e => {
    //ilk önce mousemoove eventinin tüm propertylerini ekrana yazdırıyoruz.
    console.log(e);
    // daha sonra offsetX ve offsetY propertyleri ile console mousenin bulunduğu koordinatları yazdırıyoruz.
    console.log(e.offsetX, e.offsetY);
    // daha sonra da bu koordinatları kutu isimli divin içine ekliyoruz.
    kutu.textContent = `x koordinatı ${e.offsetX}, y koordinatı ${e.offsetY}`;
})

// wheel eventi mousenin tekerleği ile ilgili işlemleri yapar.
document.addEventListener('wheel', e => {
    // burada wheel eventinin tüm propertylerini consola yazdırıyoruz.
    console.log(e);
    // burada ise pageX ve PageY propertyleri ile mouseun scroolunun tetiklendiği yerin x ve y koordinatlarını consola yazdırıryoruz.
    console.log(e.pageX, e.pageY);
})