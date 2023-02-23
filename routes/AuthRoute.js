import express from 'express';
import { Login, Signup } from '../controllers/AuthController.js';

const AuthRouter = express.Router()

AuthRouter.post('/login', Login);
AuthRouter.post('/register', Signup);

export default AuthRouter 