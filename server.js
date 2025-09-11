const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path')


//dotenv configration
dotenv.config()


const app=express();

//middleware
app.use(cors());
app.use(express.json());
//static

app.use(express.static(path.join(__dirname,"./frontend/dist")))
//routes

app.use('/api/v1/portfolio',require("./Routes/Routes"))


app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/dist/index.html"));
})



//port

const PORT=process.env.PORT || 8080
//listen
app.listen(PORT,()=>{
    console.log(`server running on PORt ${PORT}`)
})