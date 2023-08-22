import City from "../models/City.js"

const controller = {
    getCities : async (req, res ) => {

        let queries = {}

        if(req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`,'i')
        }

        if(req.query.country) {
            queries.country = req.query.country
        }
        try {
            const cities = await City.find(queries).populate('user')

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No countries found'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Can not get cities'
            })  
        }
    },

    getCityById : async (req, res) => {
        try {
            const city = await City.findById(req.params.id)

            if(city) {
                return res.status(200).json({
                    success: true,
                    city: city
                })
            }
            return res.status(404).json({
                succes:false,
                message: 'Can not find the city'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Can not get city'
            })
        }
    },

    createCity : async (req, res) => {
        try {
            const newCity = await City.create(req.body);
            
            return res.status(201).json({
                success: true,
                message: 'City created'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Can not create city'

            })
        }
    },

    updateCity : async (req,res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: "Update Successfully"
            })

        } catch (error){
            return res.status(500).json({
                succes: false,
                message: "Can not update city"
            })

        }
    },

    deleteCity : async (req,res) => {
        try{
            await City.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'City deleted successfuly'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: "Can not delete city"
            })

        }

    }

}

export default controller;