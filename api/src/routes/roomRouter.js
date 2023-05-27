const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomController');

// Get all rooms
router.get('/', roomController.getAllRooms);

// Get a room by ID
router.get('/:id', roomController.getRoomById);

// Create a new room
router.post('/', roomController.createRoom);

// Update a room by ID
router.put('/:id', roomController.updateRoom);

// Delete a room by ID
router.delete('/:id', roomController.deleteRoom);

// Get a room by name
router.get('/', roomController.getRoomByName);

module.exports = router;