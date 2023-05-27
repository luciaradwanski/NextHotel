const { RoomCart } = require('../db');

// Get all room carts
const getAllRoomCarts = async (req, res) => {
    try {
        const roomCarts = await RoomCart.findAll();
        res.status(200).json(roomCarts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a room cart by ID
const getRoomCartById = async (req, res) => {
    try {
        const roomCart = await RoomCart.findByPk(req.params.id);
        if (roomCart === null) {
        res.status(404).json({ message: 'Room cart not found' });
        } else {
        res.status(200).json(roomCart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new room cart
const createRoomCart = async (req, res) => {
    try {
        const roomCart = await RoomCart.create(req.body);
        res.status(201).json(roomCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a room cart by ID
const updateRoomCart = async (req, res) => {
    try {
        const [ updatedRows, [ updatedRoomCart ] ] = await RoomCart.update(req.body, {
        returning: true,
        where: { id: req.params.roomCartId }
        });
        if (updatedRows === 0) {
        res.status(404).json({ message: 'Room cart not found' });
        } else {
        res.status(200).json(updatedRoomCart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a room cart by ID
const deleteRoomCart = async (req, res) => {
    try {
        const deletedRows = await RoomCart.destroy({
        where: { id: req.params.id }
        });
        if (deletedRows === 1) {
        res.json({ message: 'Room deleted successfully' });
        } else {
        res.status(404).send('RoomCart not found');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getQuantityCart = async (req, res) => {
    const {quantity} = req.query;
    try {
        
        const cart = await RoomCart.findAll({
        attributes: ['id', 'quantity', 'checkIn', 'checkOut', 'totalPrice'],
        where: { quantity: {[Op.iLike]: "%" + quantity + "%"} }
        });
        if (cart === null) {
        res.status(404).json({ message: 'Room not found' });
        } else {
        res.status(200).json(cart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllRoomCarts,
    getRoomCartById,
    createRoomCart,
    updateRoomCart,
    deleteRoomCart,
    getQuantityCart
};
