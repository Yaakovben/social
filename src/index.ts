import exp, {Express} from 'express'
//
import 'dotenv/config'
import authController from './controllers/authController'
import postController from './controllers/postController'
import userController from './controllers/userController'

const app:Express = exp()

app.use('/auth',authController)
app.use('/user',userController)
app.use('/post',postController)




app.listen(process.env.PORT,():void => console.log(`See you at http::localhost:${process.env.PORT}`));



