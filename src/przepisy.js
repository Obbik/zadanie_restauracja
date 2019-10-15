import React from 'react';


const Recipie = ({title,kalorie,image,skladniki}) =>{
    return(
            <div className="single_page">
                <h1>    {title} </h1>
                <p> ilość Kalorii: {kalorie} </p>
                    <ol>
                    {skladniki.map(skladniki=>(
                        <li key={skladniki.id}>{skladniki.text} </li>
                    ))}
                    
                    </ol>
                    
                <img className="image"src={image} alt=" "/>
            </div>
    );
}


export default Recipie