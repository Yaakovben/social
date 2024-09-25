import exp, { Request, Response, Router } from 'express'
const router:Router = exp.Router()




//קבלת כל הפוסטים
router.get('/',async(
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


// יצירת פוסט חדש
// protected rout
router.post('/',async(
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


//
router.get('/search',async(
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

//
router.get('/:id',async(
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


// protected rout
router.patch('/like/:id',async(
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