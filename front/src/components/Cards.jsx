import Card from './Card';
import style from "styled-components"
import React from 'react';


const CardsStyle = style.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 100%

`



export default function Cards(props) {
   
   const { characters, onClose} = props;
   const personajes = characters?.map(per => {
   return <Card key={per.id} per={per} onClose={onClose} detailId={per.id} ></Card>
})
   return (
   <CardsStyle>
      {personajes}
   </CardsStyle>
   )
}
