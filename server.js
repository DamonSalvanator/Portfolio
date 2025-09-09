const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')


//dotenv configration
dotenv.config()

const app=express();

//middleware
app.use(cors());
app.use(express.json());
//routes

app.use('/api/v1/portfolio',require("./Routes/Routes"))

app.get("/",(req,res)=>{
      res.send('<h1>hello world<h1/>')
})

//port

const PORT=process.env.PORT || 8080
//listen
app.listen(PORT,()=>{
    console.log(`server running on PORt ${PORT}`)
})