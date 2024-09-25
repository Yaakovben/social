import NewPostDTO from "../DTO/newPostDto";
import fs from 'fs/promises'
import Post from "../models/Post";
import { getFileData, saveFileData } from "../config/fileDataLayer";




export default class PostService {

    // יצירת פוסט חדש 
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

    //קבלת כל הפוסטים
    public static async getAllPost():Promise<Post[]>{  
        let posts:Post[]  = await getFileData<Post>('posts') as Post[]
        if(!posts) posts = []
        return posts
    }

    //ID קבלת פוסט לפי 
    public static async getPostById(postId:string):Promise<Post>{  
        let posts:Post[]  = await getFileData<Post>('posts') as Post[]
        let post:Post = posts.find(p => p.id === postId) as Post
        return post
    }
    // חיפוש פוסט לפי טקסט של הפוסט
    public static async getPostByTextContent(textContent:string):Promise<Post[] | undefined>{  
        const posts:Post[]  = await getFileData<Post>('posts') as Post[]
        const matchpost:Post[] = posts.filter(post => post.content.includes(textContent)) 
        if(matchpost.length>=1){
            return matchpost
        }else{
            return undefined
        }
        
    }

    // מחיקת פוסט
    public static async removePostById(postId:string):Promise<boolean>{
        try {
            const posts:Post[]  = await getFileData<Post>('posts') as Post[]
            let post:Post[] = posts.filter(p => p.id != postId)
            saveFileData<Post>('posts',post)
            return true 
        } catch (error) {
            return false  
            
        }      
    }


    // עריכת פוסט

    // עדכון תוכן הפוסט לפי ID
public static async updatePostContent(postId: string, newContent: string): Promise<Post | undefined> {
    try {
        let posts: Post[] = await getFileData<Post>('posts') as Post[];
        let post = posts.find(post => post.id === postId);

        if (!post) {
            return undefined;
        }
        post.content = newContent;

        await saveFileData<Post>('posts', posts);

        // החזרת הפוסט המעודכן
        return post;

    } catch (error) {
        return undefined;
    }
}











}






