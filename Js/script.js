"use strict";

const humburger=document.getElementById("humburger"); 
const header=document.getElementById("header");
const navLinks=document.querySelectorAll(".nav-link");

humburger.addEventListener("click",()=>{
    header.classList.toggle("active");
});
navLinks.forEach(function(nav){
    nav.addEventListener("click",function(){
        //console.log(this);
        this.classList.toggle("open");

        if(nav.classList.contains("open")){
            navLinks.forEach(function(nav){
                nav.classList.remove("open");
            });
            nav.classList.toggle("open");
        }
    });
});