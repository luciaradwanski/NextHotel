const express = require('express');
const router = express.Router();
const activityController = require('../Controllers/activityController');

// Get all hotels
router.get('/', activityController.getAllActivities);

// Get a hotel by ID
router.get('/:id', activityController.getActivityById);

// Create a new hotel
router.post('/', activityController.createActivity);

// Update a hotel by ID
router.put('/:id', activityController.updateActivity);

// Delete a hotel by ID
router.delete('/:id', activityController.deleteActivity);

//buscar por name de actividad
router.get('/', activityController.getActivityName)

module.exports = router;
