const open = document.querySelector('.open')
const main = document.querySelector('main')
const menu = document.querySelector('.button')
let isopen = false;
open.addEventListener('click',()=> {
    if(!isopen){
        main.classList.add('open')
        menu.classList.add('open') 
        isopen = true
    }else{
        main.classList.remove('open')
        menu.classList.remove('open') 
        isopen = false
    }
   
})