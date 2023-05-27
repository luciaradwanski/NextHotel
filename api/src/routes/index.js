const { Router } = require('express');
const payRouter = require('./payRouter');
const reservationRouter = require('./reservationRouter');
const roomRouter = require('./roomRouter');
const touristRouter = require('./touristRouter')
const roomCartRouter = require('./roomCartRouter')
const hotelRouter = require('./hotelRouter')
const roomTypeRouter = require('./roomTyperRouter')
const activityRouter = require('./activityRouter')
const gastronomyRouter = require('./gastronomyRouter')
const mealtypeRouter = require('./mealtypeRouter')

const router = Router();

router.use('/hotel', hotelRouter);
router.use('/rooms', roomRouter)
router.use('/reservation', reservationRouter)
router.use('/tourist', touristRouter)
// router.use('/pay', payRouter)
router.use('/roomCart', roomCartRouter)
router.use('/roomType', roomTypeRouter)
router.use('/activity', activityRouter);
router.use('/gastronomy', gastronomyRouter)
router.use('/mealtype', mealtypeRouter)


module.exports = router;
