const { Router } = require("express")
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const postFav = require("../controllers/postFav")
const getFavs = require("../controllers/getFavs")
const {deleteFav} = require("../controllers/deleteFav")
const { saveApiData } = require("../controllers/saveApiData")
const {Character} = require('../DB_connection')
const router = Router()

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)
router.get("/", saveApiData)
router.get("/db", async (req, res)=>{
    try {
        const info = await Character.findAll()
        return res.json(info)
    } catch (error) {
        return res.json({error: error.message})
    }  
})


router.post("/rickandmorty/fav", postFav)
router.get("/rickandmorty/fav", getFavs)
router.delete("/rickandmorty/fav/:id", deleteFav )


module.exports = router