module.exports = (app)=>{

    app.get("/", function (req,res,next) {
        res.send(['waterbottle','phone','papper']);
    })
}