const { Mealtype } = require('../db');

// Get all hotels
const getAllMealtype = async (req, res) => {
    try {
        const comida = await Mealtype.findAll();
        res.status(200).json(comida);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a hotel by ID
const getMealtypeById = async (req, res) => {
    try {
        const tipo = await Mealtype.findByPk(req.params.id);
        if (tipo === null) {
        res.status(404).json({ message: 'Mealtype not found' });
        } else {
        res.status(200).json(tipo);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new hotel
const createMealtype = async (req, res) => {
    try {
        const {name, ingredients, price, image} = req.body;
        const c = await Mealtype.create({name, ingredients, price, image});
        res.status(201).json(c);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hotel by ID
const updateMealtype = async (req, res) => {
    try {
        const [ updatedRows, [ updatedHotel ] ] = await Mealtype.update(req.body, {
        returning: true,
        where: { id: req.params.id }
        });
        if (updatedRows === 0) {
        res.status(404).json({ message: 'Mealtype not found' });
        } else {
        res.status(200).json(updatedHotel);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hotel by ID
const deleteMealtype = async (req, res) => {
    try {
        const deletedMealtype = await Mealtype.destroy({
        where: { id: req.params.id }
        });
        if (deletedMealtype === 1) {
        res.json({ message: 'Mealtype deleted successfully' });
        } else {
        res.status(404).send('Mealtype not found');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getNameMealtype = async (req, res) => {
    const {name} = req.query;
    try {
        
        const m = await Mealtype.findAll({
        attributes: ['id', 'name', 'ingredients', 'price'],
        where: { name: {[Op.iLike]: "%" + name + "%"} }
        });
        if (m === null) {
        res.status(404).json({ message: 'Mealtype not found' });
        } else {
        res.status(200).json(m);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllMealtype,
    getMealtypeById,
    createMealtype,
    updateMealtype,
    deleteMealtype,
    getNameMealtype
};
