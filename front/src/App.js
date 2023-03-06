import './App.css'
import React from "react";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { Routes , Route, useNavigate, useLocation } from 'react-router-dom';
import Form from "./components/Form"
import { useEffect, useState } from 'react';
import Favorites from "./components/Favorites/Favorites"





function App () {
  const [characters, setCharacters] = React.useState({
    characters: []
  });
const navigate = useNavigate();
const [access, setAccess] = useState(false)
const username = "rick@mail.com";
const password = "morty123";



function login(userData){
  if(userData.user === username && userData.pass === password){
      setAccess(true);
      navigate("/home");
  } else window.alert("Usuario o contraseña incorrectos")
}

  function onSearch(text){
    let repe = false;
    characters.characters.forEach(element => {
      if (element.id.toString() === text) repe = true;
    });
    if(!repe){
      fetch(`http://localhost:3001/onsearch/${text}`)
      .then((response) => response.json())
      .then(res =>res.data)
      .then((data) => {
        navigate("/home");
         if (data.name) {
            setCharacters({characters: [...characters.characters, data]})
         } else {
            window.alert('No hay personajes con ese ID');
         }})} else return window.alert("Ya agregaste este personaje");
    } 
    
 
  function onClose(key){
    var cambio = characters.characters.filter(num => num.id !== key);
    setCharacters({
      characters: cambio
    })

  }
 
  
  function onRandom(){
   const num = Math.floor(Math.random() * 826);
   navigate("/home");
    onSearch(num);
  }
  const location = useLocation()

  function logout(){
    setAccess(false)
  }
  
  useEffect(() => {
    if (!access) navigate("/");
 }, [access]);
  

 
  return (
    <div className='App' >
      <div>
        {location.pathname !== "/" && <Nav onSearch = {onSearch} onRandom={onRandom} logout={logout}></Nav>}
      
      </div>
      <hr />
      <Routes>
        <Route path="/home" element={<Cards characters={characters.characters} onClose = {onClose} />} />
        <Route path="/" element={<Form login = {login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>  
    </div>
  )
}

export default App

