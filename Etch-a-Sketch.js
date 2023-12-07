console.log('zeko');

let size = 16;
function gridsize(){
    do{
        let gridsize =prompt("enter grid size between 1 and 100:");
        console.log(gridsize)
        if(gridsize != null &&  gridsize!=''){
            size= parseInt(gridsize);
        }
    }while(size>100 || size<=0);

    //i putted the main here because it was not seen in this domain
    let main = document.querySelector('.main')
    document.body.removeChild(main);
    mainTask(size);
}

mainTask(size);

function mainTask(size){
    const main = document.createElement('div');
    document.body.appendChild(main);
    main.classList.add('main');

    const columb = document.createElement('div');
    columb.className= 'columb'
    main.appendChild(columb);


    const row = document.createElement('div');
    row.className= 'row';

    for(let i=0;i<size;i++){
       columb.appendChild(row.cloneNode(true));
    };

    const allrow = document.querySelectorAll('.row')

    allrow.forEach(box =>{
        for(let i=0;i<size;i++){
            const part =document.createElement('div');
            part.className = 'part';
            box.appendChild(part.cloneNode(true));
        }
    })

    const allparts = document.querySelectorAll('.part');

    allparts.forEach(part =>{
        part.addEventListener("mouseover",()=>{
            part.style.backgroundColor='red';
        });
    })

}
