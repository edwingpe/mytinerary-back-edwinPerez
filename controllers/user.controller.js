import User from '../models/User.js';

const controller = {
    getUser: (req, res) => {
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'User created successfully '
            })

        } catch (error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Can not create user'
            })

        }
    },

    deleteUser: () => {},
}

export default controller;