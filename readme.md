# API with Mongoose and Express
This NodeJS App uses Express and Mongoose to publish a <b>read-only</b> API endpoint for a MongoDB data collection. It supports a query parameter for searching. 
  
# Setup
To use this demo, you must have a MongoDB Atlas instance with at least one data collection. For example, you might use one of the sample datasets provided, or create your own dataset by importing a CSV through Compass. You must create an environment variable, containing the connection string that points to your own particular MongoDB Atlas Cluster. The example below shows what if may look like. 
  
```MONGODB=mongodb+srv://username:***@cluster0.abc123.mongodb.net/sample_airbnb```

## Connection String
You can retrieve your own connection string from the MongoDB Atlas dashboard. TIP: You may be able to retrieve your connection string from the MongoDB Compass Desktop client if you're already connected there.