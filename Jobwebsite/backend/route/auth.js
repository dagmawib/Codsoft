const router = require("express").Router();
const passport = require("passport");


router.get("/landingPage", (res,req) => {
    if(req.user){
        res.status(200).json({
            error:false,
            message:"Successfully Loged in",
            user:req.user
        });
    }else{
        res.status(403).json({
            error:true,
            message:"Not Authorized",
        })
    }
});

router.get("/login", (req,res) => {
    res.redirect("login");
});

router.get("/google/jobs",
    passport.authenticate("google",{
        successRedirect:process.env.CLIENT_URL,
        failureRedirect:"/login"
    })
)

router.get("/google",passport.authenticate("google", ["profile", "email"]));

router.get("/logout",(req,res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL);
})


module.exports = router