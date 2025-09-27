let ogrenci = {
    ad : 'Can',
    yas : 29,
    email : 'cnboz@hotmail.com',
    sinif : 12,
    dersler : ['matematik', 'fizik', 'kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

// obje elemanı güncelleme
ogrenci.yas = 20;
console.log(ogrenci.yas);

// alternatif obje elemanına ulaşma
console.log(ogrenci['ad']);

// alternatif bje elemanı güncelleme
ogrenci['ad'] = 'Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);