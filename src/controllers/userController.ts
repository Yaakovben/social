import exp, { Request, Response, Router } from 'express'
import UserService from '../services/userService'
import newUserDTO from '../DTO/newUserDto'
const router:Router = exp.Router()


// הרשמה למשתמש חדש
router.post('/register',async(
    req:Request<any, any,newUserDTO>,
    res:Response
):Promise<void> =>{
    try{
        const result = await UserService.createNewUser(req.body)
        if(result){
            res.status(200).json({
                err:false,
                message:'This is very GOOD',
                Date:undefined
            })
        }else{
            throw new Error("Can't Save New User to the file");
            
        }

    }catch(err){
        res.status(400).json({
            err:true,
            message:err|| '',
            data:null
        })

    }
})


//להשים עוקב
router.post('/follow',async(
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

/// לחפש משתמש
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


// הצגת פרופיל
// protected rout
router.get('/profile',async(
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



//הצגת אחרי מי אני עוקב
// protected rout
router.get('/followers',async(
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


//הצגת מי עוקב אחריי
// protected rout
router.get('/following',async(
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