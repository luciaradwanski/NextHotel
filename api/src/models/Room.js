const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Room",{
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.JSON,
            public_id: DataTypes.STRING,
            secure_url: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('available', 'unavailable'),
          allowNull: false,
          defaultValue: 'available',
        },
        bedSheets: {
          type: DataTypes.STRING,
          allowNull: false
        },
        decor: {
          type: DataTypes.STRING,
          allowNull: false
        },
        entertainment: {
          type: DataTypes.STRING,
          allowNull: false
        },
        characteristics: {
          type: DataTypes.STRING,
          allowNull: false
        },
        foodsDrinks: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bathroom: {
          type: DataTypes.STRING,
          allowNull: false
        },
        internetCel: {
          type: DataTypes.STRING,
          allowNull: false
        }
    },{ timestamps: false });
};
/* id, number: '', capacity: 0, image:, price, description, status, 
bedSheets, decor, entertainment, characteristics, foodsDrinks, bathroom, internetCel */

/**
 module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
        public_id: DataTypes.STRING,
        secure_url: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 1000,
        },
      },
      info_adicional: {
        type: DataTypes.STRING,
      },
      calification: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
      },
      reviews: {
        type: DataTypes.ARRAY(
          DataTypes.JSONB({
            nameUser: DataTypes.STRING,
            lastnameUser: DataTypes.STRING,
            calification: DataTypes.INTEGER,
            comment: DataTypes.STRING,
          })
        ),
        defaultValue: [],
      },
      inCart: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

 */