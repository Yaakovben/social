import NewPostDTO from "../DTO/newPostDto";
import fs from 'fs/promises'
import Post from "../models/Post";
import { getFileData, saveFileData } from "../config/fileDataLayer";


export default class PostService {

    public static async createNewPost(newPost:NewPostDTO):Promise<boolean>{ 
        // create a new post() object
        const{authorId,content,hashtags,ref} = newPost
        const post:Post = new Post(
            authorId,content,hashtags,ref
        )   
        // add it to the post file
        // get the file as an array of object
        let posts:Post[]  = await getFileData<Post>('posts') as Post[]
        if(!posts) posts = []
        // push
        posts.push(post)      
        //save tha array back to the file
        return await saveFileData<Post>('posts',posts)
    }
}

