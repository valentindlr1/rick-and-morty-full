import React from "react"
import SearchBar from "./SearchBar";
import style from "styled-components";
import { Link } from "react-router-dom";

const DivStyle = style.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;

position: sticky;
top: 0px;
width: 100%;
flex-direction: row;
justify-content: center;
@media (max-width: 600px){
   flex-direction: column;
   align-items: center;
   height: 220px;
   
}

`;
const ButtonStyle = style.button`
font-size: large;
padding: 5px;
cursor: pointer;
border-radius: 10px;
margin-left: 20px;
color: black;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;

box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}

@media (max-width: 600px){
width: 50%;
position: relative;
}
`;
const HomeBut = style.button`
font-size: large;
padding: 5px;
position: absolute;
left: 50px;
cursor: pointer;
border-radius: 10px;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;

box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}
@media (max-width: 600px){
width: 100%;
position: relative;
left: 0px;
}
`;
const FavBut = style.button`
font-size: large;
padding: 5px;
position: absolute;
left: 150px;
cursor: pointer;
border-radius: 10px;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;

box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}
@media (max-width: 600px){
width: 100%;
position: relative;
left: 0px;
}
`;
const AboutBut = style.button`
font-size: large;
padding: 5px;
position: absolute;
right: 50px;
cursor: pointer;
border-radius: 10px;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;

box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}
@media (max-width: 600px){
width: 100%;
position: relative;
right: 0px;
}
`;
const Logout = style.button`
font-size: large;
padding: 5px;
position: absolute;
right: 130px;
cursor: pointer;
border-radius: 10px;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;

box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}
@media (max-width: 600px){
width: 50%;
position: relative;
right: 0px;
}
`;

export default function Nav(props){
   const {onRandom, onSearch, logout} = props;
   
         return (
         <DivStyle >
             <Link to="/home"><HomeBut>HOME</HomeBut></Link>
             <Link to="/favorites"><FavBut>Mis Favoritos</FavBut></Link>
             
             <SearchBar onSearch={onSearch}/>
             <ButtonStyle onClick={()=> onRandom() }>Random</ButtonStyle>
     
            <Logout onClick={()=> logout()}>Log out</Logout>
             <Link to="/about"><AboutBut>About</AboutBut></Link>
             
         </DivStyle>
         )
  
   
   
}