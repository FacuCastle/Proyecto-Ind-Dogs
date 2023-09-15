const { Dog, Temperament } = require('../../db.js')
const axios = require('axios');
require("dotenv").config();
const { API_KEY } = process.env;
const dogsObj = require("../../helpers/dogsObj.js");


const getAllDogsController = async () => {

    const results = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const obj = results.map((dog) => {
        return dogsObj(dog);
    })

    const dogsFromDataBase = await Dog.findAll({
        include: [
            {
                model: Temperament,
            },
        ],
    });

    return [...dogsFromDataBase, ...obj];
}
module.exports = getAllDogsController;
