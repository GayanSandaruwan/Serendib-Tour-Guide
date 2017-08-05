/*  Created By Gayan Sandaruwan De Silva On 01/08/17
*/

'use strict'

let express = require('express');
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let bodyParser = require('body-parser');
let router = express.Router();
let jwt = require('jsonwebtoken');
let config = require('./config');
let Reservation = require('../Models/Reservation');

router.route('/cars')                                           //Get The Reservations Availbel For Cars
    .get(function(req, res) {
             console.log("getting Car Reservations");                                                   //body parser lets us use the req.body
        Reservation.find({Object_type : "CAR"}, function (err, cars) {
            if (err) return handleError(err);
            if (!cars.length)
                res.json({message: false});
            else
                res.json({message: true, cars});

        });
    })

  
      //Reserve New Car
    .post(function(req, res) {
        let reservation = new Reservation();
        console.log(req.body);
        //console.log(res);                                          //body parser lets us use the req.body
        reservation.Reserv_Flag = req.body.Reserv_Flag;
		reservation.Success =     req.body.Success;
		reservation.Time_start =  req.body.Time_start;
		reservation.Time_end =    req.body.Time_end;
		reservation.User_Id =     req.body.User_Id;
        reservation.Object_Id=    req.body.Object_Id;
        // reservation.Id=           req.body.Id;                                     
        reservation.Object_type=  "CAR";

        console.log("Reserving Car");
        Reservation.find().count(function(err, reservationsCount){
                reservation.Id = reservationsCount + 1;
                reservation.save(function(err) {
                        if (err) {
                            res.send({message : false});
                            console.log(err);
                        }
                        else {
                            res.json({
                                message: true,
                                reservation: reservation
                            });
                            console.log(reservation.Id + " Saved Resereved!");
                        }
                    });

        });
       
    });


router.route('/resturants')                                           //Get The Reservations Availbel For Cars
    .get(function(req, res) {
             console.log("getting Car Reservations");                                                   //body parser lets us use the req.body
        Reservation.find({Object_type : "REST"}, function (err, resturants) {
            if (err) return handleError(err);
            if (!resturants.length)
                res.json({message: false});
            else
                res.json({message: true, resturants});

        });
    })

  
      //Reserve Resturant
    .post(function(req, res) {
        let reservation = new Reservation();
        console.log(req.body);
        //console.log(res);                                          //body parser lets us use the req.body
        reservation.Reserv_Flag = req.body.Reserv_Flag;
        reservation.Success =     req.body.Success;
        reservation.Time_start =  req.body.Time_start;
        reservation.Time_end =    req.body.Time_end;
        reservation.User_Id =     req.body.User_Id;
        reservation.Object_Id=    req.body.Object_Id;
        // reservation.Id=           req.body.Id;                                     
        reservation.Object_type=  "REST";

        console.log("Reserving resturant");
        Reservation.find().count(function(err, reservationsCount){
                reservation.Id = reservationsCount + 1;
                reservation.save(function(err) {
                        if (err) {
                            res.send({message : false});
                            console.log(err);
                        }
                        else {
                            res.json({
                                message: true,
                                reservation: reservation
                            });
                            console.log(reservation.Id + " Saved Resereved!");
                        }
                    });

        });
       
    });

    router.route('/guides')                                           //Get The Reservations Availbel For Cars
    .get(function(req, res) {
             console.log("getting Guides Reservations");                                                   //body parser lets us use the req.body
        Reservation.find({Object_type : "GUIDE"}, function (err, guides) {
            if (err) return handleError(err);
            if (!guides.length)
                res.json({message: false});
            else
                res.json({message: true, guides});

        });
    })

  
      //Reserve New Car
    .post(function(req, res) {
        let reservation = new Reservation();
        console.log(req.body);
        //console.log(res);                                          //body parser lets us use the req.body
        reservation.Reserv_Flag = req.body.Reserv_Flag;
        reservation.Success =     req.body.Success;
        reservation.Time_start =  req.body.Time_start;
        reservation.Time_end =    req.body.Time_end;
        reservation.User_Id =     req.body.User_Id;
        reservation.Object_Id=    req.body.Object_Id;
        // reservation.Id=           req.body.Id;                                     
        reservation.Object_type=  "GUIDE";

        console.log("Reserving Guide");
        Reservation.find().count(function(err, reservationsCount){
                reservation.Id = reservationsCount+ 1;
                reservation.save(function(err) {
                        if (err) {
                            res.send({message : false});
                            console.log(err);
                        }
                        else {
                            res.json({
                                message: true,
                                reservation: reservation
                            });
                            console.log(reservation.Id + " Saved Resereved!");
                        }
                    });

        });
       
    });


module.exports = router;


