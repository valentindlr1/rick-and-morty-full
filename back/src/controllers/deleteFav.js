// let {favs} = require("../utils/favs")
const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res)=>{   

        try {
                const {id} = req.params;

                await Favorite.destroy({where: {id: id}})

        // let result = []
        
        // while (favs.length > 0){
        //         result.push(favs.shift())
        // }

        // result = result.filter(fav => fav.id !== Number(id))

        // while (result.length > 0){
        //         favs.push(result.shift())
        // }

        return res.status(200).json(id)
        } catch (error) {
                
        }

        
   
}
module.exports = {deleteFav}