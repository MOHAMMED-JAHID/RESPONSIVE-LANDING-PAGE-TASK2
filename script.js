window.onload= function menuslide(){
    const menu1 = document.querySelector('.slide1');
    const menu2 = document.querySelector('.slide2');
    const menu3 = document.querySelector('.slide3');
    const nav1 = document.querySelector('.nav1');
    const nav2 = document.querySelector('.nav2');
    const nav3 = document.querySelector('.nav3');



    nav1.addEventListener('click',()=> {
        menu1.style.display="inline";
        menu2.style.display="none";
        menu3.style.display="none";
    });  
    nav2.addEventListener('click',()=> {
    menu2.style.display="inline";
    menu1.style.display="none";
    menu3.style.display="none";
    });
    nav3.addEventListener('click',()=> {
    menu2.style.display="none";
    menu1.style.display="none";
    menu3.style.display="inline";
    });  
 
}

function mountain(){
    const mount1 = document.querySelector('.mount1');
    const mount2 = document.querySelector('.mount2');
    const mountain1 = document.querySelector('#mountain1');
    const mountain2 = document.querySelector('#mountain2');



    mount1.addEventListener('click',()=> {
        mount1.classList.add('active');
        mount2.classList.remove('active');
        mountain1.style.display="block";
        mountain2.style.display="none";
    });  
    mount2.addEventListener('click',()=> {
        mount2.classList.add('active');
        mount1.classList.remove('active');
        mountain2.style.display="block";
        mountain1.style.display="none";
    }); 

}
window.onscroll=function hidehead(){
const nav =document.querySelector(".navi");
let lastscrollY =window.scrollY;

window.addEventListener('scroll',() =>{
    if(lastscrollY<window.scrollY){
        nav.classList.add('active');
        // console.log("up");
    }
    else{
        nav.classList.remove('active');
        // console.log("down");
    }
    lastscrollY=window.scrollY
});}