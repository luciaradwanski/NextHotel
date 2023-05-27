const { Reservation, Room, Tourist } = require('../db');

// Get all reservations
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a reservation by ID
const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation === null) {
        res.status(404).json({ message: 'Reservation not found' });
        } else {
        res.status(200).json(reservation);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new reservation
const createReservation = async (req, res) => {
    try {
        const {id, startDate, endDate, price, touristName, message, phone, rooms, adults, children, touristEmail, country, roomId, touristId} = req.body;
        const reservation = await Reservation.create({id, startDate, endDate, price, touristName, touristEmail, message, phone, rooms, adults, children, country});
        
        // Asocia la instancia de room correspondiente
        const r = await Room.findByPk(roomId);
        if (!r) {
            throw new Error('Room not found');
        }
        await reservation.setRoom(r);

        // Asocia la instancia de tourist correspondiente
        const t = await Tourist.findByPk(touristId);
        if (!t) {
            throw new Error('Tourist not found');
        }
        await reservation.setTourist(t);

        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a reservation by ID
const updateReservation = async (req, res) => {
    try {
        const [ updatedRows, [ updatedReservation ] ] = await Reservation.update(req.body, {
        returning: true,
        where: { id: req.params.id }
        });
        if (updatedRows === 0) {
        res.status(404).json({ message: 'Reservation not found' });
        } else {
        res.status(200).json(updatedReservation);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a reservation by ID
const deleteReservation = async (req, res) => {
    try {
        const deletedRows = await Reservation.destroy({
        where: { id: req.params.id }
        });
        if (deletedRows === 1) {
        res.json({ message: 'Reservation delete successfully' });
        } else {
        res.status(404).send('Reservation not found');
        }
    } catch (error) {
        res.status(400).json({ message: 'Reserva eliminada' });
    }
};

const getReservaDate = async (req, res) => {
    /* startDate, endDate, price, touristName, touristEmail */
    const {startDate} = req.query;
    try {
        
        const reserva = await Reservation.findAll({
        attributes: ['id', 'startDate', 'endDate', 'price', 'touristName', 'message', 'phone', 'rooms', 'adults', 'children', 'touristEmail', 'country'],
        where: { startDate: {[Op.iLike]: "%" + startDate + "%"} }
        });
        if (reserva === null) {
        res.status(404).json({ message: 'Room not found' });
        } else {
        res.status(200).json(reserva);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  getReservaDate
};
