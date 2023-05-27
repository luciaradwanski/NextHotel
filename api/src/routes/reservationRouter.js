const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/reservationController');

// Get all reservations
router.get('/', reservationController.getAllReservations);

// Get a reservation by ID
router.get('/:id', reservationController.getReservationById);

// Create a new reservation
router.post('/', reservationController.createReservation);

// Update a reservation by ID
router.put('/:id', reservationController.updateReservation);

// Delete a reservation by ID
router.delete('/:id', reservationController.deleteReservation);

router.get('/', reservationController.getReservaDate)

module.exports = router;
