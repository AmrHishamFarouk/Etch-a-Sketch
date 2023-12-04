console.log('zeko');

const main = document.createElement('div');
document.body.appendChild(main);
main.classList.add('main');
main.setAttribute('style','width:45vw;height: 45vw;margin: 0 auto;background-color: aqua;');

const row = document.createElement('div');
row.className= 'row';

for(let i=0;i<16;i++){
    main.appendChild(row.cloneNode(true));
};

const allrow = document.querySelectorAll('.row')

allrow.forEach(box =>{
    for(let i=0;i<16;i++){
        const part =document.createElement('div');
        part.className = 'part';
        box.appendChild(part.cloneNode(true));
    }
})

