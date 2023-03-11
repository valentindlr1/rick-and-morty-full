// var {favs} = require("../utils/favs")
const { Favorite } = require('../DB_connection');


const getFavs = async (req, res)=>{
    const info = await Favorite.findAll()
    console.log(info)
    res.json(info)
}

module.exports = getFavs