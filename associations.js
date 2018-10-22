const sequelize = require('./db')
const Pie = sequelize.model('pie')
const User = sequelize.model('user')
const PieShop = sequelize.model('pie_shop')

Pie.belongsTo(PieShop);
PieShop.hasMany(Pie);
PieShop.belongsTo(User, {foreignKey: 'userId'});

sequelize.sync();

// PieShop.sync({force:true});
