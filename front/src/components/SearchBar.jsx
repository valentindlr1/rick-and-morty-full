import style from "styled-components";
import { useState } from "react";

const InputStyle = style.input`
font-size: large;
padding: 5px;

width: 50%;
box-shadow: 0 0 8px #FFFFFF;
border-radius: 10px;
&:hover{
   box-shadow: 0 0 16px #FFFFFF; 
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
`;
const DivS = style.div`
display: flex;
max-width: 100%;
justify-content: center;
align-items: center;
`;


export default function SearchBar(props) {
   const [text, setText] = useState("");

   function handleInputChange (event){
      const texto = event.target.value
      setText(texto)
   }
   
   return (
      <DivS>
         <InputStyle type='search' value={text} onChange={handleInputChange} placeholder=" Buscar por ID"/>
         <ButtonStyle onClick={() => {
            props.onSearch(text)
            setText("")}}>
               Agregar
               </ButtonStyle> 
      </DivS>
   );
}
