const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("../routes/routesDogs.js")

const router = Router();

router.use('/dogs', dogsRouter )
// router.use('/temperaments', )
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
