import express from 'express'  
import {mongoReady} from './database.js'
import {ItemsModel} from './ItemsModel.js' 

const api = express.Router() 

api.get('/items', mongoReady, (req, res) => {     
    
    console.log("Received a GET request for /items");  

    let filter = {} 
    if (req.query.search){
      filter = { 
        name: { 
          $regex : `.*${req.query.search}.*`, 
          $options : "i"  /* i means case-insensitive */
        }
      }   
    }
   
    let projection = {
      listing_url: 1,
      name : 1,
      summary :1,
      beds: 1
    }
    
    let limit = req.query.limit || 10  
  
    ItemsModel
      .find(filter, projection)
      .limit(limit)
      .exec()
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err))

})
  
export { api };

