const express =  require('express')
const { getItemController , addItemController} = require('../controllers/itemController')
const router = express.Router()

//routes
//Methods -get 
// import from controller second param like /get-item,second one from controller

//method-get

router.get('/get-item',getItemController)

//method - POST
router.post('/add-item',addItemController);
module.exports =  router 