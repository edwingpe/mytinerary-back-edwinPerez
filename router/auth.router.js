import { Router } from "express"
import { signIn, singUp } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/signin', signIn)
authRouter.post('/signup', singUp)
export default authRouter