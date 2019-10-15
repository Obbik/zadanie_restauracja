import React,{useEffect, useState} from 'react';
import Recipie from './przepisy'
import './App.css';
import Header from './header';
import {Helmet} from "react-helmet";
import Footer from './footer';

const App = () =>{
  const app_id="6ac2e9c8";
  const app_key="58ee1d7e3a6866893082951d23c2a2c9";
  const [recipies,SetRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
   

useEffect(() =>{
  zbierzPrzepisy()
},[search]);

const zbierzPrzepisy = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
 const data = await response.json();
 console.log(data.hits)
 SetRecipies(data.hits);
 
};
const updatesearch = e =>{
  setSearch(e.target.value);
  console.log(search)
}
const getSearch = e =>{
  e.preventDefault()
  setQuery(search);
  setSearch("");
}
  return(
 
    <div className="app">
      <Helmet htmlAttributes={ {lang: "pl-Pl" }}/> 
     <Header/>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Moja Strona z przepisami!</title>

     </Helmet>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updatesearch} placeholder="wyszukaj przepis"/>
        <button className="search-button" type="submit" >Wyszukaj!</button>
      </form>
      <div className="recipies">
       
      {recipies.map(recipe =>(
        <Recipie 
        key= {recipe.recipe.label}
        title={recipe.recipe.label} 
        kalorie={recipe.recipe.calories.toFixed(0)}
        image={recipe.recipe.image}
        skladniki={recipe.recipe.ingredients}
        />
      ))}
      </div>
      <Footer name="Nobert Dering"/>
    </div>

  );



}

export default App;
