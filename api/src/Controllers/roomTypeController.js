const {RoomType} = require('../db');
const { Op } = require('sequelize');

// GET all rooms
const getAllRoomsType = async (req, res) => {
    try {
        const rooms = await RoomType.findAll();
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// GET a specific room
const getRoomTypeById = async (req, res) => {
    try {
        const room = await RoomType.findByPk(req.params.id);
        if (!room) return res.status(404).send('Room not found');
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// POST a new room
const createRoomType = async (req, res) => {
    const {name, description, price, capacity} = req.body;
    try {
        const room = await RoomType.create({name, description, price, capacity});
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// PUT an existing room
const updateRoomType = async (req, res) => {
    try {
        const room = await RoomType.findByPk(req.params.id);
        if (!room) return res.status(404).send('Room not found');
        await room.update(req.body);
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// DELETE an existing room
const deleteRoomType = async (req, res) => {
    try {
        const room = await RoomType.findByPk(req.params.id);
        if (!room) return res.status(404).send('Room not found');
        await room.destroy();
        res.json({ message: 'Room deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// Get a room by name
const getRoomByNameType = async (req, res) => {
    const {name} = req.query;
    try {
        
        const room = await RoomType.findAll({
        attributes: ['name', 'description', 'price', 'capacity'],
        where: { name: {[Op.iLike]: "%" + name + "%"} }
        });
        if (room === null) {
        res.status(404).json({ message: 'Room not found' });
        } else {
        res.status(200).json(room);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    getAllRoomsType,
    getRoomTypeById,
    createRoomType,
    updateRoomType,
    deleteRoomType,
    getRoomByNameType
};

