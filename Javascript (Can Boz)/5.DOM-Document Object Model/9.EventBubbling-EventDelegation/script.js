const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('Tıklandı');
// })


const liElemanlari = document.querySelectorAll('li');

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        console.log(e);
        console.log(e.target);
        console.log('Liye tıklandı');
        e.target.style.color = 'blue';

    })
})

// *** aşsağıda li elemanlarını silebiliyoruz fakat yeni eklediğimiz li elemanlarını kaldıramıyoruz.
// *** bunun için burada li etiketlerinin kapsayıcı etiketi ul ye EventListener ile tagName properysini kullnarak kaldırma işlemi yapıyoruz. 
const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    // console.log(e);
    console.log(e.target);
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
})
// ul.remove();


liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // *** hem ul ve hem de li elemeanlarında click eventi olduğundan li etiketlerine tıklandığında ikisi de çalışacaktır.
        // bunun önüne geçmek için burada stopPropagation() metodu kullanıoruz.
        // yani liler için click eventi çalışsın ul ler için çalışmasın demektir. yayılmayı durdurmak anlamındadır.
        e.stopPropagation();
        // e.target.remove();
    })
})


button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Javascript';
    // ul.append(li);
    ul.prepend(li);
})
