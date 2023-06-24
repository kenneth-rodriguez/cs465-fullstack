const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - search w/o a filter to list every trip
const tripsList = async (req, res) => {
    model
    .find({})                   // search the databse w/o a filter to list everything
    .exec((err, trips) => {
        if (!trips) {
            return res
                .status(404)
                .json({"message": "trips not found" });
        }
        else if (err) {
            return res
                .status(500)
                .json(err)
        }
        else {
            return res 
                .status(200)
                .json(trips);
        }
    });
};

// GET: /trips/:tripCode - get a single trip w/ its code
const tripsFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            }
            else if (err) {
                return res
                    .status(500)        // utilizing a different error code for debugging.
                                        // "server encountered an unexpected condition that prevented it from fulfilling the request"
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            else {
                return res
                    .status(201) // created
                    .json(trip);
            }
        });
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode },
        { 
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
    .then(trip => {
        if (!trip) {
            return res 
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        res.send(trip);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        return res
            .status(500)
            .json(err);
    });
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};