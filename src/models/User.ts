import { v4 } from "uuid"

class User {
    public id:string
    public followweres:string[] = []
    public following:string[] = []
    public isLockedAccount:boolean = false
    public token?:string 
    
    constructor(
        public userName:string,
        public password:string,
        public email:   string,
        public birthday: Date,
        public avatatUrl:string,
    ) { 
        this.id = v4()
       }
}

export default User