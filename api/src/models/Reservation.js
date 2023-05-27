const { DataTypes } = require("sequelize");
/* id, startDate, endDate, price, touristName, touristEmail, message, phone, rooms, adults, children */
module.exports = (sequelize) => {
    sequelize.define("Reservation",{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        touristName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        touristEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adults: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        children: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false });
};
