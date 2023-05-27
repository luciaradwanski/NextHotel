const { Tourist } = require('../db');
const { Op } = require('sequelize');

const getAllTourists = async (req, res) => {
    try {
        const tourists = await Tourist.findAll();
        res.json(tourists);
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred');
    }
};

const createTourist = async (req, res) => {
    try {
        const { firstName, lastName, email, password, country } = req.body;
        const newTourist = await Tourist.create({ firstName, lastName, email, password, country });
        res.json(newTourist);
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred');
    }
};

const getTouristById = async (req, res) => {
    try {
        const { id } = req.params;
        const tourist = await Tourist.findByPk(id);
        if (tourist === null) {
        res.status(404).send('Tourist not found');
        } else {
        res.json(tourist);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred');
    }
};

const updateTouristById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const [updated] = await Tourist.update({ name, email, phone }, { where: { id } });
        if (updated === 1) {
        res.json({ message: 'Tourist updated successfully' });
        } else {
        res.status(404).send('Tourist not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred');
    }
};

const deleteTouristById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tourist.destroy({ where: { id } });
        if (deleted === 1) {
        res.json({ message: 'Tourist deleted successfully' });
        } else {
        res.status(404).send('Tourist not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An unexpected error occurred');
    }
};

const getTouristByName = async (req, res) => {
    const {firstName} = req.query;
    try {
        
        const tourist = await Tourist.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'password', 'country'],
        where: { firstName: {[Op.iLike]: "%" + firstName + "%"} }
        });
        if (tourist === null) {
        res.status(404).json({ message: 'Room not found' });
        } else {
        res.status(200).json(tourist);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllTourists,
    createTourist,
    getTouristById,
    updateTouristById,
    deleteTouristById,
    getTouristByName,
};
