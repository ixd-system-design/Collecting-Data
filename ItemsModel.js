// This is a generic Mongoose Schema to Model Data for "Items"
// It does not yet have any fields or datatypes defined
// As such it will not enforce a particular structure
// This is ideal if you're just testing things out

// NOTE: in MongoDB each database can have many collections.
// below we instruct Mongoose about which collection to use.
// however, it is assumed that you have already set the database name.
// for example, you may have a connection string in your environment which includes the name of your database. 
// e.g. you may have /sample_airbnb as part of your connection string.

const myCollection = 'listingsAndReviews' 

import mongoose from 'mongoose'
const mySchema = new mongoose.Schema() 
const ItemsModel = mongoose.model('Items', mySchema, myCollection ) 
export {ItemsModel}