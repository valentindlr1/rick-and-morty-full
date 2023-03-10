const axios = require('axios')
// const { character } = require('../models/Character');
const { Character } = require('../DB_connection')
let allChars = []

const getApiData = async () => {
    try {
        
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        let characters = response.data
        
        for (let i = 0; i < 5; i++) {
            characters.results.forEach(element => {
                allChars.push({
                    id: element.id,
                    name: element.name,
                    species: element.species,
                    status: element.status,
                    origin: element.origin.name,
                    gender: element.gender,
                    image: element.image
                })
            });
            let aux = await axios.get(characters.info.next)
            characters = aux.data
            
        }
        return allChars
        
    } catch (error) {
        throw new Error(error) 
    }
}

const saveApiData = async (req, res) => {

    try {
        let result = await getApiData()
        // result.forEach(element => {
        // Character.findOrCreate({
        //     where: {id: element.id},
        //     defaults: {...element}
        // })
        // })
        console.log(Character)
        await Character.bulkCreate(result)
        return res.json(result)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
    
}

module.exports = { saveApiData }