const enMenu = document.getElementById('en-menu');
    enBtn = document.getElementById('en-btn');
    enClose = document.getElementById('en-close')

if(enBtn){
    enBtn.addEventListener('click', () =>{
        enMenu.classList.add('en-open')
    })
}
if(enClose){
    enClose.addEventListener('click', () =>{
        enMenu.classList.remove('en-open')
    })
}
