const express = require('express');
const router = express.Router();
const roomTypeController = require('../Controllers/roomTypeController');

// Get all rooms
router.get('/', roomTypeController.getAllRoomsType);

// Get a room by ID
router.get('/:id', roomTypeController.getRoomTypeById);

// Create a new room
router.post('/', roomTypeController.createRoomType);

// Update a room by ID
router.put('/:id', roomTypeController.updateRoomType);

// Delete a room by ID
router.delete('/:id', roomTypeController.deleteRoomType);

// Get a room by name
router.get('/', roomTypeController.getRoomByNameType);

module.exports = router;