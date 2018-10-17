PORT = 3000
JWT_SECRET = bananas

DATABASE_URL = postgresql://postgres:password@localhost/pies


If there are special characters in your password use this in your db.js file notice the back ticks
```js 
const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeUriComponent(process.enc.PASS)}`@localhost/pies, {
    dialect: 'postgres',
})
```

also add this to your .env file
PASS = ***yourpassword***

Delete Current DATABASE_URL line in your .env file