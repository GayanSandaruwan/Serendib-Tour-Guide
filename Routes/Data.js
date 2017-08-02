/*  Created By Gayan Sandaruwan De Silva On 01/08/17
*
*/

'use strict'

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let router = express.Router();
let passControl =  require('./passwords');
mongoose.Promise = require('bluebird');
let jwt = require('jsonwebtoken');
let config = require('./config');
let Car = require('../Models/Car');
let random = require('random-key');
let mailer = require('./mail');

router.route('/cars/list')                                           //Verify Driver against sent key to the mail
    .get(function(req, res) {
        let email = req.body.email;
                                   //body parser lets us use the req.body
        console.log(req.body);
        Car.find(function (err, cars) {
            if (err) return handleError(err);
            if (!cars.length)
                res.json({message: false});
            else
                res.json({message: true, cars});

        });
    });


router.route('/cars/register')      
      //Register New User
    .post(function(req, res) {
        var car = new Car();
        console.log(req.body);
        //console.log(res);                                          //body parser lets us use the req.body
        car.Cost = req.body.Cost;
		car.Owner = req.body.Owner;
		car.Model = req.body.Model;
		car.Reg_no = req.body.Reg_no;
		car.Manu_fac = req.body.Manu_fac;
        console.log("Inside Function");
        car.save(function(err) {
            if (err) {
                res.send({message : "Car Already Exist under system"});
                console.log(err);
            }
            else {
                res.json({
                    message: 'Car successfully added!',
                    car: car
                });
                console.log(car.Reg_no + " Saved Successfully");
            }
        });
    });

module.exports = router;


