const {Room, Hotel, RoomType} = require('../db');
const { Op } = require('sequelize');

// GET all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// GET a specific room
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).send('Room not found');
    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// POST a new room
// const createRoom = async (req, res) => {
//   const {number, name, capacity, image, price, description, status, hotel, roomType} = req.body;
//   try {
//     const room = await Room.create({number, name, capacity, image, price, description, status});
    
//     // Asocia la instancia de Hotel correspondiente
//     const h = await Hotel.findByPk(hotel);
//     if (!h) {
//         throw new Error('Hotel not found');
//     }
//     await room.setHotel(h);

//     // Asocia la instancia de roomT correspondiente
//     const roomT = await RoomType.findByPk(roomType);
//     if (!roomT) {
//         throw new Error('roomT not found');
//     }
//     await room.setHotel(roomT);
    

//     res.json(room);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// };

const createRoom = async (req, res) => {
  try {
    const { number, name, capacity, image, price, description, status, bedSheets, decor, entertainment, characteristics, foodsDrinks, bathroom, internetCel, hotelId, roomTypeId } = req.body;

    const room = await Room.create({ number, name, capacity, image, price, description, status, bedSheets, decor, entertainment, characteristics, foodsDrinks, bathroom, internetCel });
    
    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(400).json({ message: "Hotel not found" });
    }
    
    await room.setHotel(hotel);

    const roomType = await RoomType.findByPk(roomTypeId);
    if (!roomType) {
      return res.status(400).json({ message: "Room type not found" });
    }
    
    await room.setRoomType(roomType);

    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// PUT an existing room
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).send('Room not found');
    await room.update(req.body);
    res.json(room);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// DELETE an existing room
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) return res.status(404).send('Room not found');
    await room.destroy();
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

// Get a room by name
const getRoomByName = async (req, res) => {
  const {name} = req.query;
  try {
    
    const room = await Room.findAll({
      attributes: ['id','name', 'number', 'capacity', 'image', 'price', 'description', 'status', 'bedSheets', 'decor', 'entertainment', 'characteristics', 'foodsDrinks', 'bathroom', 'internetCel'],
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
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomByName
};

