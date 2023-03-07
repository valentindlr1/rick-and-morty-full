var {favs} = require("../utils/favs")
// var {favs} = require("./deleteFav")

const postFav = (req, res)=>{
    console.log(req.body)
    const character = req.body;
    favs.push(character)
    res.json(favs)
}

module.exports = postFav