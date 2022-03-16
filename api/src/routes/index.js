const { Router } = require('express');
const countriesRoutes = require('./countries');
const activityRoutes = require('./activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRoutes);
router.use('/activity', activityRoutes);




module.exports = router;
