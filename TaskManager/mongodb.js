// CRUD (create read update delete)
//importing the mongodatabase from the library
const mongodb = require('mongodb')

//initializing the mongodb client
const MongoClient = mongodb.MongoClient

//connecting and initializing the mongo database 
const connectionURL = 'mongodb://127.0.0.1:27017'

//naming the database it doesnt matter 
const databaseName = 'task-manager'

//initialize connection with the given variables 
//a function is called to retrieve error or client which will be a good sign 
MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) =>  {
    if(error) {
       return console.log("unable to connect to database")
    }

    const datab = client.db(databaseName)

    // datab.collection('users').insertOne({
    //     name: 'nick',
    //     age: 27
    // }, (error, result ) => {
    //     if(error){
    //         console.log("data did not go through")
    //     }
    //     console.log(result.ops)
    // })

    // datab.collection('users').insertMany([
    //     {
    //         name: "Jen",
    //         age: 21,
    //         occupation: "doctor"

    //     },
    //     {
    //         name: "Gunther",
    //         age: 21,
    //         occupation: "doctor"

    //     }
    // ], (error, result) => {
    //     if(error){
    //         console.log("failure to launch")
    //     }
    //     console.log(result.ops)
    // })
    datab.collection('tasks').insertMany([
        {
            Task : "walk the dog",
            Completed: true
        },
        {
            Task: "walk the cat",
            Completed: false
        },
        {
            Task: "drink water",
            Completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log("did not run")
        }
        console.log(result.ops)
    })

})