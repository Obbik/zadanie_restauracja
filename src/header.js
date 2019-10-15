import React from 'react';

const Header = () =>{

    
    return(
        <div>
       
<header>
   
<img style={{animation: `spin ${10}s linear infinite`}} src="./logo.png" alt="img"/>
        
        <ul className="linki">
            <li><a href="#">Oferta </a></li>
            <li><a href="#">O mnie </a></li>
            <li><a href="#">Kontakt </a></li>
        </ul>
    
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