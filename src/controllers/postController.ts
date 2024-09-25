import exp, { Request, Response, Router } from 'express'
import PostService from '../services/postService'
import Post from '../models/Post'
import newPostDTO from '../DTO/newPostDto'
const router:Router = exp.Router()




//קבלת כל הפוסטים
router.get('/',async(
    req:Request,
    res:Response
):Promise<Post[] | void> =>{
    try{
        const result = await PostService.getAllPost()
        if(result){
            res.status(200).json({
                err:false,
                message:'This is all Posts',
                Data:result,
            })
            
        }else{
            throw new Error("Can't give the posts");
        }
       

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
    req:Request<any,any,any,Post>,
    res:Response
):Promise<void> =>{
    try{
        const result = await PostService.getPostByTextContent(req.query.content)
        if(!result){
            throw new Error()
        }
            res.status(200).json({
                err:false,
                message:'This is the posts',
                Data:result  
            }) 

    }catch(err){
        res.status(400).json({
            err:true,
            message:'undefined',
            data:undefined
        })
    }
})

// ID חיפוש פוסט לפי 
router.get('/:id',async(
    req:Request,
    res:Response
):Promise<void> =>{
    try{
        const result = await PostService.getPostById(req.params.id)
        if(result){
            res.status(200).json({
                err:false,
                message:'This is the Post',
                Date:result
            })
        }
       

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


//ID מחיקת פוסט על ידי 
router.delete('/:id',async(
    req:Request,
    res:Response
):Promise<Post[] | void> =>{
    try{
        const deletPost = await PostService.getPostById(req.params.id)
        await PostService.removePostById(req.params.id)
        res.status(200).json({
            err:false,
            message:'This is very GOOD',
            Date: deletPost
        })
        

    }catch(err){
        res.status(400).json({
            err:true,
            message:'This NO good',
            data:null
        })

    }
})


// עריכת פוסט
router.patch('/patch/:id/', async (
      req: Request<any, any, any, Post>, 
    res: Response
): Promise<void> => {
    try {
        const updatedPost = await PostService.updatePostContent(req.params.id, req.body.content);

        if (updatedPost) {
            res.status(200).json({
                err: false,
                message: 'Post content updated successfully',
                Data: updatedPost
            });
        } else {
            res.status(404).json({
                err: true,
                message: 'Post not found',
                Data: null
            });
        }
    } catch (error) {
        res.status(400).json({
            err: true,
            message: 'Error updating post content',
            Data: null
        });
    }
});









export default router