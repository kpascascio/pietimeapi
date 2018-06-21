module.exports = (sequelize, DataTypes) => {
    const Pie = sequelize.define('pie', {
        name_of_pie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        base_of_pie : {
            type: DataTypes.STRING,
            allowNull: false
        },
        crust : {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_to_bake: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    })

    return Pie;
}