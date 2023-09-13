import Itinerary from '../models/Itinerary.js'

const controller = {
    getItineraries : async (req, res) => {
        let queries = {}

        if (req.query.cityid) {
            //Itinerarios por ciudad
            queries.city = req.query.cityid
        }

        try {
            const itineraries = await Itinerary.find(queries)
            .populate({
                path: 'user',
                select: ''
            })
            .populate({
                path: 'city',
                select: ''
            })
            return res.status(200).json({
                success: true,
                itineraries
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Can not get itineraries'
            })
        }
    },

    getItineraryById : async (req, res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id)

            if (itinerary) {
                return res.status(200).json({
                    success: true,
                    itinerary
                })
            }
            return res.status(404).json ({
                success: false,
                message: 'Can not find the itinerary'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Can not get itinerary'
            })
        }
    },

    createItinerary : async (req,res) => {
        try {
            const newItinerary = await Itinerary.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            })
        } catch (error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Can not create itinerary'
            })
        }
    },

    updateItinerary : async (req, res) => {
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'Update successfully'
            })
        } catch (error){
            return res.status(500).json({
                success: false,
                message: 'Impossible update'
            })
        }
    },

    deleteItinerary: async (req,res) => {
        try{
            await Itinerary.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted.'
            })
        } catch {
            return res.status(500).json({
                success: false,
                message: "Can not delete itinerary"
            })

        }

    }
}

export default controller