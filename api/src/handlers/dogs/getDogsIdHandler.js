const getDogById = require('../../controllers/dogs/getDogsById')

const getDogsIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "BD" : "API";
  
    try {
      const dog = await getDogById(id, source);
      if (!dog) {
        return res.status(404).json({ error: "La raza especificada no existe" });
      }
      return res.status(200).json(dog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
   module.exports = getDogsIdHandler;