import User from '../models/User.js';

const controller = {
    getUsers: async (req, res) => {
        let queries ={}

        if(req.query.userid) {
            queries._id = req.query.userid
        }

        try {
            const users = await User.find(queries).populate('itineraries')

            if ( users.length > 0 ) {
                return res.status(200).json({
                    success:true,
                    users: users
                })
            }
            return res.status(404).json({
                success:false,
                message:'No users found'
            })

        } catch (error){
            return res.status(500).json({
                success: false,
                message: "Can not get users"
            })

        }
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