var {favs} = require("../utils/favs")
// var {favs} = require("./deleteFav")

const getFavs = (req, res)=>{
    res.json(favs)
}

module.exports = getFavs