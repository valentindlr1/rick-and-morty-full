import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DEL_FAVORITE = "DEL_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFavorite(character){
    try {
        return async function(dispatch){
            const response = await axios.post("http://localhost:3001/rickandmorty/fav", character)
            return dispatch({
                type: ADD_FAVORITE,
                payload: response.data
            })
        }
    } catch (error) {
        return error
    }
   
}
export function delFavorite(id){
    try {
        return async function(dispatch){
        
            const response = await axios.delete("http://localhost:3001/rickandmorty/fav/" + id)
            return dispatch({
                    type: DEL_FAVORITE,
                    payload: response.data
                })   
        }  
    } catch (error) {
        return error
    }
    
}
export function getFavorites(){
    try {
        return async function(dispatch){
            const response = await axios.get("http://localhost:3001/rickandmorty/fav/")
            return dispatch({
                type: GET_FAVORITES,
                payload: response.data
            })
        }
    } catch (error) {
        return error
    }
   
}
export function filterCards(status){
    return{
        type: FILTER,
        payload: status
    }
}
export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}

