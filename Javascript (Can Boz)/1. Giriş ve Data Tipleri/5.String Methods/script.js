let adSoyad = "İbrahim Can Boz";

let son = adSoyad.lastIndexOf('n');
console.log(son);

let bastanSona = adSoyad.slice(0, 5);
console.log(bastanSona);

let bastanSonaSubstr=adSoyad.substr(5,6);
console.log(bastanSonaSubstr);

// çift tırnak yerine tek tırnak da kullanılabilir.
let yerDegistir = adSoyad.replace("n", "w");
console.log(yerDegistir);