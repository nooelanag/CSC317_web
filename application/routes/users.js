var express = require('express');
var router = express.Router();
var db = require('../conf/database');
var bcrypt = require('bcrypt');

/* GET users listing. */


//localhost:3000/users/register
router.post('/register', async function(req, res, next) {
    const { username, email, password } = req.body;

    try {
        const [rows, fields] = await db.execute(
            'SELECT id FROM users WHERE username = ?;',
            [username]
        );
        if (rows && rows.length > 0) {
            return res.redirect('/registration');
        }

        const [emailrows, emailfields] = await db.execute(
            'SELECT id FROM users WHERE email = ?;',
            [email]
        );
        if (emailrows && emailrows.length > 0) {
            return res.redirect('/registration');
        }

        const hashedPassword = await bcrypt.hash(password, 3);

        const [resultObject, resultFields] = await db.execute(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?);',
            [username, email, hashedPassword]
        );
        console.log(resultObject);

        if (resultObject && resultObject.affectedRows === 1) {
            return res.redirect('/login');
        } else {
            return res.redirect('/registration');
        }
    } catch (error) {
        next(error);
    }
});


router.post("/login", async function(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.redirect('/login');
    } else {
        try {
            const [rows, fields] = await db.execute(
                `SELECT id, username, password, email FROM users WHERE username = ?;`,
                [username]
            );
            const user = rows[0];
            if (!user) {
                req.flash("error",`Log In Failed: Invalid username/password`);
                req.session.save(function(err){
                    return res.redirect("/login");
                })
            } else {
                const passwordsMatch = await bcrypt.compare(password, user.password);
                if (passwordsMatch) {
                    req.session.user = {
                        userId: user.id,
                        email: user.email,
                        username: user.username,
                    };
                    req.flash("success",`You are now logged in`)
                    req.session.save(function(err){
                        return res.redirect("/");
                    })
                } else {
                    return res.redirect("/login");
                }
            }
        } catch (error) {
            next(error);
        }
    }
});


router.use(function (req,res,next){
    if(req.session.user){
        next();
    }else{
        return res.redirect('/login');
    }
});



router.get("/profile/:id(\\d+)", function(req,res){
    res.render("profile");
})


router.post("/logout", function(req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            next(error);
        }
        return res.redirect('/');
    })
});












module.exports = router;
