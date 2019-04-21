

var friends = require("../data/friends")
// var friendPlus = require("../public/survey.html")

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
   res.json(friends)
  });
  
  
  app.post("/api/friends", function(req,res){

    friends.push(req.body)
    console.log(req.body)
    console.log(friends)
    res.json(true)

    
    
  })


  // .then(function(data){
  //   console.log("survey.html", data)
  //   console.log("Adding friends...")
  // })
  
  
}
