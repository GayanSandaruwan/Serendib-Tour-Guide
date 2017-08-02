/**
 * Created by gayan on 5/11/17.
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
let User = require('../Models/User');
let random = require('random-key');
let mailer = require('./mail');



// let authentication = require('../middleware/authentication');
// let adminAuth = require('../middleware/adminAuth');

router.route('/register')      
      //Register New User
    .post(function(req, res) {
        var user = new User();
        console.log(req.body);
        //console.log(res);                                          //body parser lets us use the req.body
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.NIC = req.body.NIC;
        user.email = req.body.email;
        user.key = random.generate(6);
        let success = mailer.sendMail(user.key,user.email);
        console.log("Inside Function");
        user.save(function(err) {
            if (err) {
                res.send({message : "User Already Exist under that Mail Or NIC Number is used!"});
                console.log(err);
            }
            else {
                res.json({
                    message: 'User successfully added!',
                    user: user
                });
                console.log(user.first_name + " Saved Successfully");
            }
        });
    });

router.route('/SignIn')                                           //Verify Driver against sent key to the mail
    .post(function(req, res) {
        let email = req.body.email;
                                   //body parser lets us use the req.body
        console.log(req.body);
        User.findOne({ 'email': email },function (err, user) {
            if (err) return handleError(err);
            if (user == null)
                res.json({message: false});
            else
                if(user.key== req.body.key)
                    res.json({message: true, user});
                else
                    res.json({message: false});
        });
    });
module.exports = router;
