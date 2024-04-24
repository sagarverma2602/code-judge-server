require('dotenv').config()
const express=require("express")
const bodyparser=require('body-parser')
const app=express()
const cors=require('cors')

const userRouter=require('./api/users/user.router') 

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN
        
    }

))
app.use(express.json())
app.use('/api/users',userRouter)
// app.post('/create',async(req,res)=>{
//     const data=req.body
//     await db.ref('users').push(data)
//     res.status(201).send()

// })


app.listen(process.env.PORT,()=>{
    console.log('server running')
})