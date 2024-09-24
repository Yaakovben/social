import exp, { Request, Response, Router } from 'express'
const router:Router = exp.Router()

router.post('/login',async(
    req:Request,
    res:Response
):Promise<void> =>{
    try{
        res.status(200).json({
            err:false,
            message:'This is very GOOD',
            Date:undefined
        })

    }catch(err){
        res.status(400).json({
            err:true,
            message:'This NO good',
            data:null
        })

    }
})


router.delete('/logout',async(
    req:Request,
    res:Response
):Promise<void> =>{
    try{
        res.status(200).json({
            err:false,
            message:'This is very GOOD',
            Date:undefined
        })

    }catch(err){
        res.status(400).json({
            err:true,
            message:'This NO good',
            data:null
        })

    }
})




export default router