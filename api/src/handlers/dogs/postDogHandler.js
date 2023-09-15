const postDogHandler = async (req, res) => {
    const { name, image, height, weight, life_span, temperaments } = req.body;
  
    try {
      const newDog = await postDogsController(
        name,
        image,
        height,
        weight,
        life_span
      );
      if (
        temperaments &&
        Array.isArray(temperaments) &&
        temperaments.length > 0
      ) {
        const temperamentAssociate = await Temperament.findAll({
          where: { id: temperaments },
        });
        await newDog.setTemperaments(temperamentAssociate);
      }
      return res.status(200).json(newDog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
   module.exports = postDogHandler;
  