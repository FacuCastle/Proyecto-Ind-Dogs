const cleanArray = require('../../helpers/cleanArray')
const {Dog, Temperament} =require ('../../db')


const getDogById = async (id, source) => {
    let dogData;
    if (source === "API") {
      dogData = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
      ).data;
  
      const cleanedData = cleanArray([dogData]);
      return cleanedData[0];
    } else {
      dogData = await Dog.findOne({
        where: { id },
        include: [{ model: Temperament, through: 'dog_temperament' }],
      });
      return dogData;
    }
  };
  module.exports = getDogById;