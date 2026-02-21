
const reveal=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveal.forEach(el=>{
const top=el.getBoundingClientRect().top;
const windowHeight=window.innerHeight;

if(top < windowHeight - 100){
el.classList.add('active');
}
});
});
