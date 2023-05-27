const express = require('express');
const router = express.Router();
const touristController = require('../Controllers/touristController');

router.get('/', touristController.getAllTourists);
router.post('/', touristController.createTourist);
router.get('/:id', touristController.getTouristById);
router.put('/:id', touristController.updateTouristById);
router.delete('/:id', touristController.deleteTouristById);
router.get('/', touristController.getTouristByName);

module.exports = router;
