import { Router } from "express"
import { signIn, signUp, signInToken } from '../controllers/auth.controller.js'
import passport from "../middlewares/passport.js"

const authRouter = Router()

authRouter.post('/signin', signIn)
authRouter.post('/signup', signUp)

authRouter.post( '/signin/token', passport.authenticate('jwt',{session: false}), signInToken)

export default authRouter