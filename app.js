require('dotenv').config()
const express=require("express")
const bodyparser=require('body-parser')
const app=express()
const cors=require('cors')

const userRouter=require('./api/users/user.router') 

app.use(cors(
    {
        origin: 'http://localhost:5173',
        
    }

))
app.use(express.json())
app.use('/api/users',userRouter)    

app.listen(process.env.PORT,()=>{
    console.log('server running')
})