 
import mongoose from 'mongoose'  
mongoose.connect( process.env.MONGODB )
  .then(mongoose => {   
    console.log(`Mongoose ${mongoose.version} connected to MongoDB.`)
    console.log(`Host: ${mongoose.connection.host}`)
  })
  .catch(error => handleError(error)); 

const handleError = (error)=>{
  console.log("MongoDB connection failed.")
  console.log(error.message)
  if (process.env.MONGODB){
    console.log("MONGODB="+process.env.MONGODB) 
  }    
  else{
    console.log("MONGODB environment variable not found.") 
  }
}
 
function mongoReady(req, res, next) {

    console.log(`MongoDB readyState: ${mongoose.connection.readyState}`);
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).send()
    }
    next();
}

export {mongoReady}
  