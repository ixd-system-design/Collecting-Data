// Below we will use the Express Router to define a read only API endpoint
// Express will listen for API requests and respond accordingly
import express from 'express'
const router = express.Router()

// Your MongoDB collection name
// Set this to match the model name in your Prisma schema
const collection = 'items'

// Prisma lets NodeJS communicate with MongoDB
// Let's import and initialize the Prisma client
// See also: https://www.prisma.io/docs
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// ----- findRaw() -------
// Returning Raw records from MongoDB
// This endpoint does not use any schema. 
// This is helpful for testing and debugging.
router.get('/raw', async (req, res) => {
    const result = await prisma[collection].findRaw({});
    res.send(result);
})

// ----- basic findMany() -------
// This endpoint uses the Prisma schema defined in /prisma/schema.prisma
// This gives us a cleaner data structure to work with. 
router.get('/data', async (req, res) => {
    try {
        // fetch all records from the database with no filter
        const todos = await prisma[collection].findMany({})
        res.send(todos)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


// ----- findMany() with search ------- 
// Accepts optional search parameter to filter by name field
// See also: https://www.prisma.io/docs/orm/reference/prisma-client-reference#examples-7
router.get('/search', async (req, res) => {
    try {
        // get search terms from query string, default to empty string
        const searchTerms = req.query.terms || ''
        // build the query options
        const queryOptions = {
            where: {
                name: {
                    contains: searchTerms,
                    mode: 'insensitive'  // case-insensitive search
                }
            },
            orderBy: { name: 'asc' }
        }
        // fetch the records from the database
        const todos = await prisma[collection].findMany(queryOptions)
        res.send(todos)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


// export the api routes for use elsewhere in our app 
// (e.g. in index.js )
export default router;

