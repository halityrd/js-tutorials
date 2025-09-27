// Math nesnesinin tüm propertylerini ekrana yazdırır.
console.log(Math);

console.log(Math.PI);

let sayi = 5.3;

console.log(Math.round(sayi)); // En yakın tarafa yuvarlama yapar.
console.log(Math.floor(sayi)); // 1 alta yuvarlama yapar.
console.log(Math.ceil(sayi)); // 1 üste yuvarlama yapar.
console.log(Math.trunc(sayi)); // decimal (ondalıkllı kısmı) uçurur.

const rastgele = Math.random(); //  0 ile 1 arasında rastgele sayı üretir.

console.log(rastgele);
console.log(Math.round(rastgele * 100)); // 1 ile 100 arasında sayı üretmek için