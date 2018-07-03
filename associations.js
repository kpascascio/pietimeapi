const sequelize = require('./db')
const Pie = sequelize.model('pie')
const User = sequelize.model('user')
const PieShop = sequelize.model('pie_shop')

Pie.belongsTo(User);
User.hasMany(Pie);
PieShop.belongsTo(User);

sequelize.sync();

// PieShop.sync({force:true});
