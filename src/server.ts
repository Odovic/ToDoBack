import "dotenv/config";
import express  from "express";
import errorMiddleware from "./middleware/error-middleware";
const app=express();


app.use(errorMiddleware);
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})