import React from 'react';


const Header = () =>{

    const navSlide =()=>{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.linki')
        if(burger){
        burger.addEventListener('click',()=>{
            nav.classList.toggle('linki-mobile');
            console.log('klikniecie');
        });
    }
    }
 
    return(
        
        <div>
       
<header>
   
<img style={{animation: `spin ${10}s linear infinite`}} src="./logo.png" alt="img"/>
        
        <ul className="linki">
            <li><a href="#">Oferta </a></li>
            <li><a href="#">O mnie </a></li>
            <li><a href="#">Kontakt </a></li>
        </ul>
        <div className="burger" onClick={navSlide()}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>

        </div>
    
</header>
     <hr/>
     <div className="zdjecie">
        <img src="./restaurant.jpg" alt="restauracja" />
 </div>
 <hr></hr>
    </div>
 
    )
    
}


export default Header