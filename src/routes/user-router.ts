import { error } from "console";
import { NextFunction, Request, Response, Router } from "express";

const router=Router();

router.get("/",async(req:Request,res:Response,next: NextFunction)=>
{
    try{
        res.status(200).json("Get users - Endpoint");
    }
    catch{
        next (error);
    }
})

router.post("/",async(req:Request,res:Response,next: NextFunction)=>
{
    try{
        res.status(200).json("Create user - Endpoint");
    }
    catch{
        next (error);
    }
})

router.get("/:id",async(req:Request,res:Response,next: NextFunction)=>
{
    try{
        res.status(200).json("Get specific user - Endpoint");
    }
    catch{
        next (error);
    }
})
router.patch("/:id",async(req:Request,res:Response,next: NextFunction)=>
{
    try{
        res.status(200).json("Update specific user - Endpoint");
    }
    catch{
        next (error);
    }
})

router.delete("/:id",async(req:Request,res:Response,next: NextFunction)=>
{
    try{
        res.status(200).json("Delete specific user - Endpoint");
    }
    catch{
        next (error);
    }
})


export default router;
