import "dotenv/config";
import express  from "express";
import errorMiddleware from "./middleware/error-middleware";
import userRouter from "./routes/user-router"

const app=express();

app.use("/user",userRouter);

app.use(errorMiddleware);
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})