var favs = require("../utils/favs")


const deleteFav = (req, res)=>{   

        const {id} = req.params;
        

        // if(!Number(id)) throw new Error("id debe ser numero")
        // if(!favs.length) throw new Error("no hay favs")
        let result = favs.filter(fav => fav.id !== Number(id));
        favs = result; 

        return res.status(200).json(favs)
   
}

module.exports = deleteFav