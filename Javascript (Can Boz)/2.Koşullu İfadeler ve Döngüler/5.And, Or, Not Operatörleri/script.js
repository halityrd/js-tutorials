const yeniSifre = "dasda!adasaasds";

if(yeniSifre.length  >= 12 || yeniSifre.includes('!')) {

    console.log("Şifre bayağı güçlü");

} else if(yeniSifre.length >= 8) {

    console.log("Şifre yeterli");

} else {

    console.log("Şifreyi yeniden giriniz.");

}

// ! (Not) Operatörü
const control = false;

// false değil i true dur. dolayısıyle çalışır.
if(!control) {
    console.log("Kontrol başarılı");
}

