const express = require('express')
require('./db/mongoose')
const routerUser = require('./router/users')
const routerTask = require('./router/tasks')
const bcrypt = require('bcryptjs')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res , next) => {
//     if(req.method === 'GET'){
//         res.send('Get request disabled')
//     }else {
//         next()
//     }
//
// })

app.use((req, res, next) => {
    if(req.method === 'GET'){
        res.status(503).send('maintenance mode')
    }
    else if(req.method === 'POST'){
        res.status(503).send('maintenance mode')
    }
    else if(req.method === 'PATCH'){
        res.status(503).send('maintenance mode')
    }
    else if(req.method === 'DELETE'){
        res.status(503).send('maintenance mode')
    }
    else {
        next()
    }
})

app.use(express.json())
app.use(routerUser)
app.use(routerTask)


app.listen(port, () => {
    console.log('server is up on port ' + port)

});
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'12345'}, 'thisismytoken', {expiresIn :'7 days'})
    console.log(token)

    const verify = jwt.verify(token, 'thisismytoken')
    console.log(verify)
}





myFunction()