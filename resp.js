burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.right');
navlist=document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
rightnav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})