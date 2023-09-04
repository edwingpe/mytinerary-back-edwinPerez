import bodyParser from 'body-parser';
import Itinerary from '../models/Itinerary.js'

const controller = {
    getItineraries : async (req, res) => {
        try {
            const itineraries = await Itinerary.find();
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

    getItinerariesByCity : async (req, res) => {},

    getItineraryById : async (req, res) => {},

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

    updateItinerary : async (req, res) => {},

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