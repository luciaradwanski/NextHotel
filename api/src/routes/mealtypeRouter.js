const express = require('express');
const router = express.Router();
const mealtypeController = require('../Controllers/mealtypeController');

// Get all hotels
router.get('/', mealtypeController.getAllMealtype);

// Get a hotel by ID
router.get('/:id', mealtypeController.getMealtypeById);

// Create a new hotel
router.post('/', mealtypeController.createMealtype);

// Update a hotel by ID
router.put('/:id', mealtypeController.updateMealtype);

// Delete a hotel by ID
router.delete('/:id', mealtypeController.deleteMealtype);

//buscar por name de actividad
router.get('/', mealtypeController.getNameMealtype)

module.exports = router;
