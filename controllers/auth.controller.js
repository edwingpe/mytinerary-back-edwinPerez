import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        const { name, lastname, image, email, password, country, itineraries } = req.body

        const userInDB = await User.findOne({ email })

        if (userInDB) {
            return res.json({ succes: false, error: "Email already exists" })
        }

        const hashPassword = bcrypt.hashSync(password, 10)
        const newObj = { ...req.body }
        newObj.password = hashPassword

        const newUser = await User.create(newObj)

        const userResponse = { id: newUser.id, email: newUser.email, image: newUser.image, name: unewUser.name, lastname: unewUser.lastname }

        const token =jwt.sign( {email: newUser.email}, process.env.SECRET_KEY, {expiresIn: '1h'})

        res.status(201).json( { success: true, user: userResponse, token: token } )
    } catch (error) {
        res.json( { success: false, error: error} )
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        const userInDB = await User.findOne({ email })

        if (!userInDB) {
            return res.json({ succes: false, error: "Email or password incorrect" })
        }

        const validPassword = bcrypt.compareSync( password, userInDB.password)

        if( !validPassword ){
            return res.json({ succes: false, error: "Email or password incorrect" })
        }

        const userResponse = { id: userInDB.id, email: userInDB.email, image: userInDB.image, name: userInDB.name, lastname: userInDB.lastname }

        const token =jwt.sign( {email: userInDB.email}, process.env.SECRET_KEY, { expiresIn:'1h' })

        res.status(200).json( { success: true, user: userResponse, token: token } )

    } catch (error) {
        res.json( { success: false, error: error} )
    }

}

export const signInToken = (req,res) => {
    const userResponse = { id: req.user.id, email: req.user.email, image: req.user.image, name: req.user.name, lastname: req.user.lastname }

    res.status(200).json( { success: true, user:userResponse} )

}