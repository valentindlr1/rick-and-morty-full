import React, { useEffect } from "react";
import "./Favorites.modules.css";
import Card from "../Card";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

export function Favorites(props){

const favos = props.allCharacters?.map((fav) =>{

    return <Card key={fav.id} per={fav} detailId={fav.id} />
})
const dispatch = useDispatch()
function handleSelectOrder(e){
    dispatch(orderCards(e.target.value))
}
function handleSelectGender(e){
    dispatch(filterCards(e.target.value))
}

useEffect(()=>{
    
    dispatch(orderCards("Select"))
    dispatch(filterCards("Select"))
},[props.myFavorites])

return (
    <div className="favorites">
        <div className="custom-select">
            <select onClick={handleSelectOrder} className="select">
                <option value="Select" >Selecciona Orden:</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onClick={handleSelectGender} className="select">
                <option value="Select">Selecciona Género:</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <hr />
        {favos}
    </div>
    )
}

export const mapStateToProps = (state) => {
    return{
        allCharacters: state.allCharacters,
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);