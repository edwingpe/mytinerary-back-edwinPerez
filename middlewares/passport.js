import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/User.js'
import passport from 'passport'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}

const fn = async (payload, done) => {
    try {
        const user = await User.findOne({ email: payload.email })

        if( !user ){
            done( null, false )
        }

        done(null, user)

    } catch (error) {
        next(err, false)
    }
}

export default passport.use(new Strategy(options, fn)) 