const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            toggle.classList.toggle('humburger')
        })
    }
}

showMenu('header_toggle','nav-menu')