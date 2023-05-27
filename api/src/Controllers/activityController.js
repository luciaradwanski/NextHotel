const { Activity, Hotel } = require('../db');

// Get all hotels
const getAllActivities = async (req, res) => {
    try {
        const act = await Activity.findAll();
        res.status(200).json(act);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a hotel by ID
const getActivityById = async (req, res) => {
    try {
        const acthotel = await Activity.findByPk(req.params.id);
        if (acthotel === null) {
        res.status(404).json({ message: 'Hotel not found' });
        } else {
        res.status(200).json(acthotel);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new hotel
const createActivity = async (req, res) => {
    try {
        const {name, description,image, hotel} = req.body;
        const activ = await Activity.create({name, description, image});

        // Asocia la instancia de Hotel correspondiente
        const h = await Hotel.findByPk(hotel);
        if (!h) {
            throw new Error('Hotel not found');
        }
        await activ.setHotel(h);
        res.status(201).json(activ);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hotel by ID
const updateActivity = async (req, res) => {
    try {
        const [ updatedRows, [ updatedHotel ] ] = await Activity.update(req.body, {
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
const deleteActivity = async (req, res) => {
    try {
        const deletedRows = await Activity.destroy({
        where: { id: req.params.id }
        });
        if (deletedRows === 0) {
        res.status(404).json({ message: 'Activity not found' });
        } else {
        res.status(204).json();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getActivityName = async (req, res) => {
    const {name} = req.query;
    try {
        
        const cart = await Activity.findAll({
        attributes: ['id','name', 'description', 'image'],
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
    getAllActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity,
    getActivityName
};
