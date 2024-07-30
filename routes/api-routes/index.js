const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughtRoutes');
router.use('/user',userRoutes);
routes.use('.thought',thoughtRoutes);
module.exports = router;