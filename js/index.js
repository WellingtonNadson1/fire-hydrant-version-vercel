const menuChange = document.querySelector('.menu')
console.log(menuChange);

function onScroll(){
    scrollY > 0 ? menuChange.classList.add('scroll') : menuChange.classList.remove('scroll')
}