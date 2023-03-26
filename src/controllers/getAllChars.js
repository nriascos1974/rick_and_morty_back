const {character} = require("../DB_connection")

const getAllChars = async (req, res) => {
    try {
        const characters = await character.findAll()
        res.status(200).json(characters)
    } catch (error) {
       res.status(500).json({msg: error.message})  
    }
}

module.exports = getAllChars