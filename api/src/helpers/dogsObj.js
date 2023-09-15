const dogsObj = ({ id, image, name, weight, height, life_span, temperament }) => {
    return {
        id,
        image: image.url,
        name,
        weight: weight.imperial,
        height: height.imperial,
        life_span,
        temperament,
    }
};
module.exports = dogsObj;