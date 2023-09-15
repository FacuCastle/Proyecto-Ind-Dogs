const getAllDogsController = require("../../controllers/dogs/getAllDogsController.js");


const getDogsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await getDogsByNameController(name)
            : await getAllDogsController();
        if (results.length === 0) {
            return res.status(404).json({ message: "La raza especificada no existe" });
        }
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = getDogsHandler;