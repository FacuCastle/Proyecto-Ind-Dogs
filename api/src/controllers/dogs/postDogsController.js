const {Dog} = require('../../db')

const postDogsController = async (name, image, height, weight, life_span) => {
    const newDog = await Dog.create({
      name,
      image,
      height,
      weight,
      life_span,
    });
  
    return newDog;
  };
  module.exports = postDogsController;
  