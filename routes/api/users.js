const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const keys = require('../../config/keys').secretOrKey;

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

router.post('/updateHighScore', (req, res) => {
  
  const id = req.body.id;
  
  const highScore = req.body.highScore;
  User.findById(id)
    .then(user => {
      
      user.highScore = req.body.highScore;
      user.save()
        .then(user => {
          res.json({
            id: user.id, name: user.name, highScore: user.highScore
          });
        });
    });
});

router.get('/getUsers', (req, res) => {
  User.find({}).sort({highScore: -1})
    .then(users => {
      res.json({
        users
      });
    });

});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // res.json({msg: 'Success'});
                        const payload = { id: user.id, name: user.name, highScore: user.highScore };

                        jsonwebtoken.sign(
                            payload,
                            keys,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({ email: 'Incorrect password' });
                    }
                });
        });
});

router.post('/highscore', (req, res) => {
    User.findOne({id: req.body.id})
    .then((user) => {
        user.highScore = req.body.highScore;
        user.save();
    })
})

router.post('/register', (req, res) => {
  
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
    
        return res.status(400).json(errors);
    }
    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, name: user.name, highScore: user.highScore };

                jsonwebtoken.sign(
                  payload,
                  keys,
                  { expiresIn: 3600 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: 'Bearer ' + token
                    });
                  });
              })
                            .catch(err => console.log(err));
                    });
                });

            }
        });
});

module.exports = router;