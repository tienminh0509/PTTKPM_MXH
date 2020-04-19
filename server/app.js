const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI}= require('./keys')


require('./models/user')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})



// const customMiddleware = (req,res,next)=>{
//     console.log("middleware executed!!")
//     next()
// }



// app.get('/',(req,res)=>{
//     console.log("home")
//     res.send("Test")
// })

// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("about page")
// })

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})