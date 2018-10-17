const Sequelize = require('sequelize'); 

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.pass)}`, {
    dialect: 'postgres',
})

sequelize.authenticate()
    .then(() => console.log('postgres database is connected!'))
    .catch(err => console.log(err))

module.exports = sequelize;