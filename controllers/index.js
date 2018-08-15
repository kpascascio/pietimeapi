module.exports = (app) => {
    app.use('/pie', require('./piescontroller'));
    app.use('/auth', require('./usercontroller'));
    app.use('/shops', require('./pieshopscontroller'));
}