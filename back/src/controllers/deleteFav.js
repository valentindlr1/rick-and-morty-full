let {favs} = require("../utils/favs")


const deleteFav = (req, res)=>{   
        console.log("FAVS ANTES>>", favs)
        const {id} = req.params;
        console.log("ID>> ", id)

        // if(!Number(id)) throw new Error("id debe ser numero")
        // if(!favs.length) throw new Error("no hay favs")
        let result = favs.filter(fav => fav.id !== Number(id));
        console.log("RESULT> ", result)
        while(favs.length > 1){
                favs.shift()
        }
        for (let i = 0; i < result.length; i++) {
                favs.push(result[i])         
        }
        // favs = result; 
        console.log("FAVS DESPUES>>", favs)
        return res.status(200).json(favs)
   
}

module.exports = deleteFav