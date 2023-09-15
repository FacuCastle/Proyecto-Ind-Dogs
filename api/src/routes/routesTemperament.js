const { Router } = require("express");
const {getTemperamentsHandler} =require('../handlers/temper/getTemperamentsHandler')

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperamentsHandler);

module.exports = temperamentsRouter;
