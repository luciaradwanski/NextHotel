const { Hotel } = require('../db');

// Get all hotels
const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a hotel by ID
const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        if (hotel === null) {
        res.status(404).json({ message: 'Hotel not found' });
        } else {
        res.status(200).json(hotel);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new hotel
const createHotel = async (req, res) => {
    try {
        const {name, address, phone, email, stars} = req.body;
        const hotel = await Hotel.create({name, address, phone, email, stars});
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hotel by ID
const updateHotel = async (req, res) => {
    try {
        const [ updatedRows, [ updatedHotel ] ] = await Hotel.update(req.body, {
        returning: true,
        where: { id: req.params.id }
        });
        if (updatedRows === 0) {
        res.status(404).json({ message: 'Hotel not found' });
        } else {
        res.status(200).json(updatedHotel);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hotel by ID
const deleteHotel = async (req, res) => {
    try {
        const deletedRows = await Hotel.destroy({
        where: { id: req.params.id }
        });
        if (deletedRows === 1) {
        res.json({ message: 'Hotel deleted successfully' });
        } else {
        res.status(404).send('Hotel not found');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getNameHotel = async (req, res) => {
    const {name} = req.query;
    try {
        
        const cart = await Hotel.findAll({
        attributes: ['id', 'name', 'address', 'phone', 'email', 'stars'],
        where: { name: {[Op.iLike]: "%" + name + "%"} }
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
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
    getNameHotel
};
