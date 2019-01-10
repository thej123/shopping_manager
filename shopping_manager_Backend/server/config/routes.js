var user = require('../controllers/userController');

var path = require('path');

module.exports = function(app){

    app.post('/user', user.create);
    app.post('/login', user.userlogin);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../shopping_manager_Frontend/shopping_manager/public/index.html"))
    });
}