## Polling Application 

This is a simple polling application. 
It has the following features - 

    - Anyone can create a poll
    - Anyone can vote on an existing poll
    - Anyone can see the poll results


Order of operations
    - Build a backend
        - Create a folder (backend)
        - run the command `npm init -y`, this creates the package.json file. 
        - Write basic express boilerplate code with the required middlewares and routes

        - Authentication [ZOD]
            - Create a types.js
            - Download ZOD - `npm install zod`
            - Write the zod schema for the endpoint validation

        - DATABASE [MongoDb]
                                - Create MongoDb schema
                                - Putting something in MongoDb
                                - Updating something in MongoDb
                                - Getting Polls from MongoDb
            - Create a db.js
            - Download Mongose - `npm install mongoose`
            - Connect to MongoDB - `mongoose.connect(connection string)`
            - Define the mongoDB schemas
            - Export the defined schemas

        - Add the database logic to the main application
