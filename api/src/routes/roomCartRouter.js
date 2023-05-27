const express = require('express');
const router = express.Router();
const roomCartController = require('../Controllers/roomCartController');

// Get all room carts
router.get('/', roomCartController.getAllRoomCarts);

// Get a room cart by ID
router.get('/:id', roomCartController.getRoomCartById);

// Create a new room cart
router.post('/', roomCartController.createRoomCart);

// Update a room cart by ID
router.put('/:id', roomCartController.updateRoomCart);

// Delete a room cart by ID
router.delete('/:id', roomCartController.deleteRoomCart);

//get por quantity 

router.get('/', roomCartController.getQuantityCart)

module.exports = router;
