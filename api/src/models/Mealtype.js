const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Mealtype", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { timestamps: false })
}