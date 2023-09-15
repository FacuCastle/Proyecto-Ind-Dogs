const { Router } = require("express");
const getDogsHandler = require("../handlers/dogs/getDogHandler.js")
const getDogsIdHandler =require('../handlers/dogs/getDogsIdHandler.js')
const dogsRouter = Router();

dogsRouter.get("/", getDogsHandler );
 dogsRouter.get("/:idRaza", getDogsIdHandler );
// dogsRouter.get("/name?", postDogsHandler );

module.exports = dogsRouter;