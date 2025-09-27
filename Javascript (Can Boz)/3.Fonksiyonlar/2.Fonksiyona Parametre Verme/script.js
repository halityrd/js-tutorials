
const canboz = function(ad, soyad) {
    
    console.log(`Ad Soyad ${ad} ${soyad}`);

}

// fonskiyonda parametre tanımlandığı için verilmeden çağrılırsa hatalıdır.
canboz();
canboz('Hakan', 'Enis');


// default parametreli fonksiyon
const defparametre = function(ad = 'Can', soyad = 'Boz') {
    
    console.log(`Ad Soyad ${ad} ${soyad}`);

}

defparametre();
defparametre('Hakan', 'Enis');