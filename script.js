const menu = document.querySelector('.menu');
const mobilenav = document.querySelector('.mobilenav')

menu.addEventListener('click',()=>{
    mobilenav.classList.toggle('hide')
})