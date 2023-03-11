const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"


var getCharById = async (req, res) => {

    try {
        const id = req.url.split("/").at(-1);
   
        const resp = await axios.get(URL+id)
        const char = resp.data;
        const result = {
                    id: char.id,
                    name: char.name,
                    species: char.species,
                    gender: char.gender,
                    image: char.image
                }
        res.json({data: result})

    } catch (error) {
        return res.status(404).json(error)
    }
    

    //  axios.get(URL+id)
    // .then((res)=> res.data)
    // .then((char) =>{
        
    //     result = {
    //         id: char.id,
    //         name: char.name,
    //         species: char.species,
    //         gender: char.gender,
    //         image: char.image
    //     }
    //     return res.json({data: result})
    // }).catch((error)=>{
    //     return res.status(404).json(error)
    // });
    
   
    
    // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(res => res.data)
    // .then(char => {
    //     let character = {id: char?.id, image: char.image, name: char.name, gender: char.gender, species: char.species}
    //     res
    //     .writeHead(200, {'Content-type': 'application/json'})
    //     .end(JSON.stringify(character))
    // }).catch(err => {
    //     res
    //         .writeHead(500, {'Content-type':'text/plain'})
    //         .end(err.message)
    // });
    
}

module.exports = getCharById