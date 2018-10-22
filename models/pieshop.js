module.exports = (sequelize, DataTypes) => {
    const PieShop = sequelize.define('pie_shop', {
        shop_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        shop_description: {
            type: DataTypes.STRING(700),
        }, 
        shop_street_address: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        shop_state: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        shop_city: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        shop_zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        shop_phone_number: {
            type: DataTypes.STRING,
        }, 
        shop_website: {
            type: DataTypes.STRING,
        }, 
        shop_rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        userId: {
            type:DataTypes.UUID,
            unique:true
        }
    })

    return PieShop;
}