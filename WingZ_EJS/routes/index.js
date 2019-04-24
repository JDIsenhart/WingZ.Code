var express = require('express');
var crypto = require('crypto'), algorithm = 'aes-256-cbc', key = 'nerdy4birdy';
var pgp = require('pg-promise')();

var router = express.Router();
var supUser = '';

const dbConfig = {
    host: 'localhost',
    port: 5433,
    database: 'postgres',
    user: 'postgres',
    password: 'admin'
};

var db = pgp(dbConfig);


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('signin', {title: 'Express'});
});

router.post('/signin/login', function (req, res) {

    var cipher = crypto.createCipher(algorithm, key);
    var username = req.body.usernamefield;
    var tempPwd = req.body.passwordfield;

    var password = cipher.update(tempPwd, 'utf8', 'hex');
    password += cipher.final('hex');
    var check_signin = 'SELECT EXISTS(SELECT 1 FROM userLogin where username = \'' + username + '\' AND password = \'' + password + '\');';
    console.log(check_signin)
    db.task('get-everything', task => {
        return task.batch([
            task.query(check_signin)
        ]);
    })
        .then(info => {
            supUser = username;
            res.render('birdfeed', {
                my_title: "My Bird Feed",
                username: supUser
            })
        })
        .catch(error => {
            res.render('signin', {
                title: "Sign In",
            })
        });
});


router.get('/registration', function (req, res, next) {
    res.render('registration', {title: 'Wingz Registration'});
});

router.post('/registration/signup', function (req, res) {

    if (req.body.password !== req.body.cPassword) {
        res.render('registration', {
            title: 'Wingz Registration',
        });
        return;
    }

    var cipher = crypto.createCipher(algorithm, key);
    var username = '\'' + req.body.username + '\'';
    var tempPwd = req.body.password;
    console.log(tempPwd);
    var password = '\'' + cipher.update(tempPwd, 'utf8', 'hex') + cipher.final('hex') + '\'';
    var name = '\'' + req.body.name + '\'';
    var email = '\'' + req.body.email + '\'';
    var univ = '\'' + req.body.university + '\'';
    var bird = '\'' + req.body.favoriteBird + '\'';
    var signupinfo = 'insert into users(username, name, email_address, university, favorite_bird) values(' +
        username + ', ' +
        name + ', ' +
        email + ', ' +
        univ + ', ' +
        bird + '' +
        ') ON CONFLICT DO NOTHING;';
    var signuppwd = 'insert into userlogin values(' +
        username + ', ' +
        password + '' +
        ') ON CONFLICT DO NOTHING;';
    console.log(signupinfo);
    console.log(signuppwd);
    db.task('get-everything', task => {
        return task.batch([
            task.query(signupinfo),
            task.query(signuppwd)
        ]);
    })
        .then(info => {
            res.render('signin', {
                title: "Log In",
            })
        })
        .catch(error => {
            res.render('registration', {
                title: "Register",
            })
        });
});

router.get('/signin/birdFacts', function (req, res, next) {
    res.render('birdFacts', {
        title: 'Bird Facts',
        username: supUser
    });
});

router.get('/signin/birdFeed', function (req, res, next) {
    res.render('birdFeed', {
        title: 'Bird Feed',
        username: supUser});
});

router.get('/signin/birdReporting', function (req, res, next) {
    res.render('birdReporting', {
        title: 'Bird Reporting',
        username: supUser});
});

module.exports = router;