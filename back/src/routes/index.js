const { Router } = require("express")
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const postFav = require("../controllers/postFav")
const getFavs = require("../controllers/getFavs")
const {deleteFav} = require("../controllers/deleteFav")
const router = Router()

router.get("/onsearch/:id", getCharById)
router.get("/detail/:id", getCharDetail)

router.post("/rickandmorty/fav", postFav)
router.get("/rickandmorty/fav", getFavs)
router.delete("/rickandmorty/fav/:id", deleteFav )


module.exports = router