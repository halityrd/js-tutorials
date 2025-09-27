const notlar = [15, 45, 32, 0, 100, 90, 7];

for(let i = 0; i < notlar.length; i++) {

    // 32'yi ekrana yazdırmaz ama devam eder.
    if(notlar[i] === 32) {
        continue;
    }

    console.log(notlar[i]);

    // 100'ü gördüğü anda çalışmayı bitirir.
    if(notlar[i] === 100) {
        break;
    }

}