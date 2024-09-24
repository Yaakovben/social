import exp from 'express';
//
import 'dotenv/config';
import authController from './controllers/authController';
import postController from './controllers/postController';
import userController from './controllers/userController';
const app = exp();
app.use('/auth', authController);
app.use('/user', userController);
app.use('/post', postController);
app.listen(process.env.PORT, () => console.log(`See you at http::localhost:${process.env.PORT}`));
