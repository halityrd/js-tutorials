const icerik = document.querySelector('p');
// *** classList seçilen htm etiketinin sahip olduğu classları listeler.
console.log(icerik.classList);
// seçilen html etiketine class eklenmesini sağlar.
icerik.classList.add('can');
// seçilen html etiketinden class silinmesini sağlar.
icerik.classList.remove('error');


// sayfada bulunan p etiketlerinin text içeriklerinde success varsa classa succes isimli classın, error texti varsa, error isimli classın eklenmesi örneği.
const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(can => {
    
    if(can.textContent.includes('error')) {
        can.classList.add('error');
    }
    if(can.textContent.includes('success')) {
        can.classList.add('success');
    }
});