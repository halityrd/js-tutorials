
// bir fonksiyonu fonksiyon şeklinde tanımlarsak tanımlamadan da çağırabiliriz.
// fakat değişkene atarak tanımlarsak çağıramayız.
can();
can();
can();

function can() {
    console.log('Can');
}


// bir fonksiyonu değişkene atama ve çağırma
const canboz = function() {
    console.log('canboz');
}

canboz();