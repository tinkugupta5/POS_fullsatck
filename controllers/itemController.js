const itemModel = require('../models/itemModel')
//we handle request and reponse and make function which handle this 

//get items 
 const getItemController = async(req,res) => {
    try {
        //we recieve items 
        const items = await itemModel.find()
        res.status(200).send(items) // here we send this items value which we get  an we send it to response
    } catch (error) {
        console.log(error)
    }
} ;


// add items 

//this is a function which basically used to add data to the data base like usually in post happens

const addItemController = async(req,res) => {

    try {
        // const post = await itemModel.
        const newItem = new itemModel(req.body)
        //await kiska karna hai new item ko save karanei ka 
        await newItem.save()
        res.status(201).send('Item Created Successfully')
        
    } catch (error) {
        res.status(400).send("error",error);
        console.log(error)
        
    }
    
}


module.exports = {getItemController,addItemController}