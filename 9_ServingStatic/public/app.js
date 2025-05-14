const button = document.querySelector('button');
const Content = document.querySelector('.content');

button.addEventListener('click', ()=>{
    Content.innerHTML = '<h1>You Clicked ME!!</h1>';
})