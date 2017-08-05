/*  Created By Gayan Sandaruwan De Silva On 01/08/17
*
*/

'use strict'

let express = require('express');
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let bodyParser = require('body-parser');
let router = express.Router();
let passControl =  require('./passwords');
let jwt = require('jsonwebtoken');
let config = require('./config');
let Car = require('../Models/Car');
let Resturant = require('../Models/Resturant');
let Guide = require('../Models/Guide');
let Place = require('../Models/Place');
let request = require('request');


router.route('/cars/list')                                           //Get The Cars Availble In the System
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
        let car = new Car();
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


router.route('/resturant/list')
	.get(function(req,res){
		Resturant.find(function(err,resturants){
			if (err) return handleError(err);
			if (!resturants.length) 
				res.json({message: false});
            else
                res.json({message: true, resturants});
		});
	});

router.route('/resturant/register')
	.post(function(req,res){
		let resturant = new Resturant();

		resturant.Cost = req.body.Cost;
		resturant.Name = req.body.Name;
		resturant.Owner = req.body.Owner;
		resturant.Location = req.body.Location;
		//resturant.Reg_no = req.body.Reg_no;

		Resturant.find().count(function(err, resturantCount){
            
            resturant.Id = resturantCount + 1; 

            resturant.save(function(err){
            if(err) {
                res.send({message : "Resturant Already exist under system"});
                console.log(err);
            }else {
                res.json({
                    message : "Resturant successfully added!",
                    resturant : resturant
                });
                console.log(resturant.Reg_no + "Saved Successfully!");
            }
        });

        });
	});

router.route('/guide/list')
    .get(function(req,res){
        Guide.find(function(err,guides){
            if (err) return handleError(err);
            if (!guides.length) 
                res.json({message: false});
            else
                res.json({message: true, guides});
        });
    });

router.route('/guide/register')
    .post(function(req,res){
        let guide = new Guide();

        guide.Cost = req.body.Cost;
        guide.Name = req.body.Name;
        guide.age = req.body.Age;
        guide.NIC = req.body.NIC;

        guide.save(function(err){
            if(err) {
                res.send({message : "Guide Already exist under system"});
                console.log(err);
            }else {
                res.json({
                    message : "Guide successfully added!",
                    guide : guide
                });
                console.log(guide.Reg_no + "Saved Successfully!");
            }
        });

    });

router.route('/place/list')
    .get(function(req,res){
        Place.find(function(err,places){
            if (err) return handleError(err);
            if (!places.length) 
                res.json({message: false});
            else
                res.json({message: true, places});
        });
    });

router.route('/place/register')
    .post(function(req,res){
        let place = new Place();

        place.Name = req.body.Name;
        place.Lat = req.body.Lat;
        place.Lang = req.body.Lang;
        //place.Reg_no = req.body.Reg_no;

        Place.find().count(function(err, placeCount){

            place.Id = placeCount + 1;
            place.save(function(err){
                if(err) {
                    res.send({message : "Place Already exist under system"});
                    console.log(err);
                }else {
                    res.json({
                        message : "Place successfully added!",
                        place : place
                    });
                    console.log(place.Reg_no + "Saved Successfully!");
                }
            });

        });
    });

router.route('/place/distances')
    .post(function(req,res){
        Place.find(function(err,places){

            let destinations = "";
             places.forEach(function(place){
                console.log("Place"+place);
                destinations = place.Lat + ',' + place.Lang +"|"
             });


                    console.log("Locations   :" + destinations);
                    request.post(
                        'https://maps.googleapis.com/maps/api/distancematrix/json?'
                        + 'units=metric&'
                        +'origins='+req.body.lat+','+req.body.lang+'&'
                        +'destinations=' + "6.8,79.99|6.8,79.99|" + '&'
                        +'key=AIzaSyCJCbqL1QSUwG7fSB2wGfEIu-w6vWltZ_8',
                        
                        function (error, response, body) {
                            if (!error && response.statusCode == 200) {
                                let jsonBody = JSON.parse(body);
                                console.log(jsonBody);
                                res.send(jsonBody);
                               // console.log(jsonBody.rows[0]);
                            }
                            else{
                                res.json({message : false});
                            }
                        }
                    );

        });
        
    });







module.exports = router;


