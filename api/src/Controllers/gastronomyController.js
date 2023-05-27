const {Gastronomy, Hotel, MealType} = require('../db')

const getAllGastronomy = async (req, res) => {
    try {
        const gas = await Gastronomy.findAll();
        res.status(200).json(gas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getGastronomyById = async (req, res) => {
    try {
        const gastroH = await Gastronomy.findByPk(req.params.id);
        if (gastroH === null) {
        res.status(404).json({ message: 'Gastronomy not found' });
        } else {
        res.status(200).json(gastroH);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// const createGastronomy = async (req, res) => {
//     try {
//         const {name, description, cusine, hours} = req.body;
//         const hotel = await Gastronomy.create({name, description, cusine, hours});
//         res.status(201).json(hotel);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }
const createGastronomy = async (req, res) => {
    try {
        const { name, description, cuisine, hours,image, cel, dress,  mealTypes, hotel } = req.body;

        // Crea la instancia de Gastronomy
        const gastronomy = await Gastronomy.create({ name, description, cuisine, hours, image, cel, dress });

        // Asocia la instancia de Hotel correspondiente
        const h = await Hotel.findByPk(hotel);
        if (!h) {
            throw new Error('Hotel not found');
        }
        await gastronomy.setHotel(h);

        // Asocia las instancias de MealType correspondientes
        if (mealTypes && mealTypes.length > 0) {
            const mealTypeInstances = await MealType.findAll({ where: { id: mealTypes } });
            await gastronomy.addMealTypes(mealTypeInstances);
        }

        res.status(201).json(gastronomy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateGastronomy = async (req, res) => {
    try {
        const [ updatedRows, [ updatedHotel ] ] = await Gastronomy.update(req.body, {
        returning: true,
        where: { id: req.params.id }
        });
        if (updatedRows === 0) {
        res.status(404).json({ message: 'Gastronomy not found' });
        } else {
        res.status(200).json(updatedHotel);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteGastronomy = async (req, res) => {
    try {
        const deletedResto = await Gastronomy.destroy({where: { id: req.params.id }});
        if (deletedResto === 1) {
            res.json({ message: 'Restaurant deleted successfully' });
        } else {
        res.status(404).json({message: 'Restaurant not found'});
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getGastronomyName = async (req, res) => {
    const {name} = req.query;
    try {
        
        const cart = await Gastronomy.findAll({
        attributes: ['id','name', 'description', 'cuisine', 'hours'],
        where: { name: {[Op.iLike]: "%" + name + "%"} }
        });
        if (cart === null) {
        res.status(404).json({ message: 'Gastronomy not found' });
        } else {
        res.status(200).json(cart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports  = {
    getAllGastronomy, 
    getGastronomyById,
    createGastronomy,
    updateGastronomy,
    deleteGastronomy,
    getGastronomyName
}