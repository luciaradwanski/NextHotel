const { DataTypes } = require("sequelize");
/* id, name, description, price */
module.exports = (sequelize) => {
    sequelize.define("Activity",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false });
};