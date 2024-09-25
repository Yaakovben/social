import NewUserDTO from "../DTO/newUserDto";
import fs from 'fs/promises'
import User from "../models/User";
import { getFileData, saveFileData } from "../config/fileDataLayer";


export default class UserService {

    public static async createNewUser(newUser:NewUserDTO):Promise<boolean>{ 
        // create a new user() object
        const{userName, password, email, birthday, avatatUrl} = newUser
        console.log(userName);
        
        const user:User = new User(
            userName, password, email, birthday, avatatUrl   
        )   
        // add it to the user file
        // get the file as an array of object
        let users:User[]  = await getFileData<User>('users') as User[]
        if(!users) users = []
        // push
        users.push(user)      
        //save tha array back to the file
        return await saveFileData<User>('users',users)
    }
}

