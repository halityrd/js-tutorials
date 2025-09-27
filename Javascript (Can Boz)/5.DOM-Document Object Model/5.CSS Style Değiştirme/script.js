// *** SetAttribute ile html etiketinin style değerleri değiştirilebilir. fakat kötü bir özelliği yeni bir style değeri eklediğimizde var olan style özelliklerini ezerek üstüne yazar. bu yüzden doğru bir kullanım değildir.
const baslik = document.querySelector('h1');
// baslik.setAttribute('style', 'padding: 50px;');

// *** bunun yerine style değiştirmek için style özelliğini kullanmak daha doğrudur.
// bu şekilde yazıldığında consolda kullanabileceğimiz tüm style propertylerini yazar.
console.log(baslik.style);

// hem var olan style özelliklerini koruyor hem de istediğimiz özellikleri ekleyebiliyoruz.
baslik.style.padding = '50px';
baslik.style.fontSize = '60px';
baslik.style.fontWeight = 'bold';
