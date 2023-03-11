// import { post } from "../../../back/src/routes";
import { ADD_FAVORITE, DEL_FAVORITE, FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
  
   let filtrado = false;
   let filtrado2 = false;
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites , action.payload]
            }
        case DEL_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites].filter(fav => fav.id !== Number(action.payload))
            }
        case FILTER:
            if(action.payload === "Select") return {...state, allCharacters: [...state.myFavorites]}

            
                let arrFilter = [...state.myFavorites].filter(char => char.gender === action.payload)
            return{
                ...state,
                allCharacters: arrFilter
            }
            
            
        case ORDER:
            if(action.payload === "Select" && !filtrado) return {...state, allCharacters: [...state.myFavorites]}
            if(action.payload === "Select" && filtrado) return {...state}
            filtrado2 = true;
            let arrOrderAscendente = [...state.myFavorites].sort((a, b)=> a.id - b.id);
            let arrOrderDescendente = [...state.myFavorites].sort((a, b)=> b.id - a.id);
            if(action.payload === "Ascendente"){
                return{
                    ...state,
                    allCharacters: arrOrderAscendente
                }
            }
            if(action.payload === "Descendente"){
                return{
                    ...state,
                    allCharacters: arrOrderDescendente
                }
            }
            
        default: return {...state}
    }

}

export default rootReducer