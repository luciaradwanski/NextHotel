require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_NAME, DB_PORT
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Hotel, Reservation, Room, RoomCart, RoomType, Tourist, Activity, Gastronomy, Mealtype} = sequelize.models;

// Aca vendrian las relaciones

Hotel.hasMany(Activity); // Un hotel puede tener muchas actividades
Activity.belongsTo(Hotel); // Una actividad pertenece a un solo hotel


Hotel.hasMany(Room); // Un hotel puede tener muchas room
Room.belongsTo(Hotel); // Una room pertenece a un solo hotel

Room.hasMany(Reservation);
Reservation.belongsTo(Room);

Tourist.hasMany(Reservation);
Reservation.belongsTo(Tourist);

Hotel.hasMany(Gastronomy);
Gastronomy.belongsTo(Hotel);

Tourist.belongsToMany(Gastronomy, { through: 'TouristGastronomy' });
Gastronomy.belongsToMany(Tourist, { through: 'TouristGastronomy' });


Gastronomy.belongsToMany(Mealtype, { through: 'GastronomyMealType' });
Mealtype.belongsToMany(Gastronomy, { through: 'GastronomyMealType' });

RoomType.hasMany(Room);
Room.belongsTo(RoomType);

Room.belongsToMany(RoomCart, { through: 'room_cart' });
RoomCart.belongsToMany(Room, { through: 'room_cart' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};



/**
 Con estas relaciones establecidas, puedes acceder a los objetos relacionados de manera sencilla utilizando los métodos proporcionados por Sequelize. Por ejemplo, si tienes un objeto tourist, puedes acceder a todas sus reservaciones utilizando tourist.getReservations().
 */