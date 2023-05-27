const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Gastronomy", {
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
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cel: {
            type: DataTypes.STRING,
        },
        dress: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.JSON,
            public_id: DataTypes.STRING,
            secure_url: DataTypes.STRING,
        },
    }, { timestamps: false });
}