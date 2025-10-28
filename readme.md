# Collecting Data

## POST content to an API Endpoint from an HTML Form to be stored in a Database

Previously we published data from a database by [creating our own API](https://github.com/ixd-system-design/API-Endpoints-for-Publishing-and-Searching). Now, let's build functionality to allow users to submit and store data. We will add two core elements:

*   A [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) endpoint on the backend.
*   An [HTML Form](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) on the front-end.

Form submissions are sent as JSON data in the body of a [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request to an API endpoint, and saved to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database). API Endpoints are defined by [Express](https://expressjs.com), using [Prisma](https://www.prisma.io/orm) to communicate with the database.

When successful, we will log the submission to the console, and also refresh the data list below. NOTE: this demo implements the 'C' and 'R' of 'CRUD' (Create and Read) . We will deal with the 'U' and 'D' (Update and Delete) elsewhere. 

# API Endpoints  
This [NodeJS](https://nodejs.org/en) App uses [Express](https://www.npmjs.com/package/express) and [Prisma](https://www.npmjs.com/package/prisma) to create API endpoints for Creating (POST) and Reading (GET). It assumes a [MongoDB](https://www.mongodb.com/products/platform/atlas-database) data collection. 

## Context
This demo assumes you have a [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) cluster. Optionally, you can use an existing database. In this case you may wish to follow the setup process described here: [https://github.com/ixd-system-design/API-Endpoints-for-Publishing-and-Searching](https://github.com/ixd-system-design/API-Endpoints-for-Publishing-and-Searching). Alternately you can start with a blank database by adding the name of a Database that you wish to create to your connection string in `.env`. For example, if your connection string is `mongodb+srv://username:password@cluster.abc.mongodb.net/MyDatabase`, you would change `MyDatabase` to any database name of your choosing. If it doesn't exist yet, Mongo will create it automatically as soon as you refer to it. 

## Iteration
A typical iteration pattern here would be as follows:
1. create form elements that fit your concept, each with a given `name`
2. add the corresponding `name` to `schema.prisma` and save
3. generate the Prisma Client from the schema using `npx prisma generate`
4. test that the form can submit data

 