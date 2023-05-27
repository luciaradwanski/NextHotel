const { DataTypes } = require("sequelize");
/* id, name, description, price, capacity */
module.exports = (sequelize) => {
    sequelize.define("RoomType",{
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
          },
          capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    },{ timestamps: false });
};
