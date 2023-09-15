const cleanArray = require('../../helpers/cleanArray')
const {Dog, Temperament} =require('../../db')
require("dotenv").config();
const {API_KEY} =process.env;
const axios =require('axios')
const {Op} =require('sequelize')

const getDogsByNameController = async (name) => {
    const tolowercaseName = name.toLowerCase();
    const dogsDataBase = await Dog.findAll({
      where: { name: { [Op.iLike]: "%" + tolowercaseName + "%" } },
      include: Temperament,
    });
  
    const dogsDataBaseByNameClean = dogsDataBase.map((dog) => {
      const dogsWithTemperamentName = dog.temperaments.map(
        (temperament) => temperament.name
      );
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        created: true,
        temperaments: dogsWithTemperamentName,
      };
    });
  
    const allDogsApiRaw = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
      .data;
    const allDogsResults = cleanArray(allDogsApiRaw);
  
    const allDogsResultByName = allDogsResults.filter((elem) =>
      elem.name.toLowerCase().includes(tolowercaseName)
    );
  
    return [...dogsDataBaseByNameClean, ...allDogsResultByName];
  };

  module.exports = getDogsByNameController;