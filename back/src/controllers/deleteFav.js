let {favs} = require("../utils/favs")

const deleteFav = (req, res)=>{   

        const {id} = req.params;

        let result = []
        
        while (favs.length > 0){
                result.push(favs.shift())
        }

        result = result.filter(fav => fav.id !== Number(id))

        while (result.length > 0){
                favs.push(result.shift())
        }

        return res.status(200).json(favs)
   
}
module.exports = {deleteFav, favs}