import express from 'express'
import cors from 'cors' 
import {api} from './api.js' 

const app = express()
app.use(express.static( 'public')) 
app.use(express.json())
app.use(cors())
 
app.use('/', api) 

app.listen(process.env.PORT,() => console.log("Express is Live."))

 