var favs = require("../utils/favs")

const getFavs = (req, res)=>{
    res.json(favs)
}

module.exports = getFavs