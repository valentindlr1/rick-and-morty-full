const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"
const getCharDetail = async (req, res)=>{

    try {
        
        const { id } = req.params;
        
        const resp = await axios.get(URL+id)
        const char = resp.data;
        const result = {
                    id: char.id,
                    name: char.name,
                    species: char.species,
                    gender: char.gender,
                    image: char.image,
                    origin: char.origin.name,
                    status: char.status
                }

        res.json({data: result})

    } catch (error) {
        return res.status(404).json(error)
    }
    
    // let result;

    // axios.get(URL+detailId)
    // .then((res)=> res.data)
    // .then((char) =>{
    //     result = {
    //         id: char.id,
    //         name: char.name,
    //         species: char.species,
    //         gender: char.gender,
    //         image: char.image,
    //         origin: char.origin.name
    //     }
    //     return res.json(result)
    // }).catch((error)=>{
    //     res.status(500).json(error.message)
    // })
    
    // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(res => res.data)
    // .then(char => {
    //     let character = {id: char.id, image: char.image, name: char.name, gender: char.gender, species: char.species, status: char.status, origin: char.origin?.name}
    //     res
    //     .writeHead(200, {'Content-type': 'application/json'})
    //     .end(JSON.stringify(character))
    // }).catch(err => {
    //     res
    //         .writeHead(500, {'Content-type':'text/plain'})
    //         .end(err.message)
    // });
    
}

module.exports = getCharDetail