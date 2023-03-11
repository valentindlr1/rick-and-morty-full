// var {favs} = require("../utils/favs")
const {Favorite} = require("../DB_connection")

const postFav = async (req, res)=>{
      
    try {
        const character = req.body;
        console.log(character)
    await Favorite.create(character)
   
    return res.json(character)
    } catch (error) {
        return res.status(400).json(error)
    }
    
}

module.exports = postFav