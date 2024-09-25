import exp, { Request, Response, Router } from 'express'
import PostService from '../services/postService'
import newPostDTO from '../DTO/newPostDto'
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
    req:Request<any, any,newPostDTO>,
    res:Response
):Promise<void> =>{
    try{
        const result = await PostService.createNewPost(req.body)
        if(result){
            res.status(200).json({
                err:false,
                message:'Post saved sucssesfuly',
                Date:undefined
            })
        }else{
            throw new Error("Can't Save New Post to the file");

        }

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

// ID חיפוש פוסט לפי 
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

// להשים לייק לפוסט
// protected rout..
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