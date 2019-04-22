

var friends = require("../data/friends")
// var friendPlus = require("../public/survey.html")

module.exports = function(app){

  app.get("/api/friends", function(req, res) {

   res.json(friends)
   console.log(req.body)
  });
  
  
  app.post("/api/friends", function(req,res){

    var newFriend = req.body
    
    for( var i = 0 ; i < friends.length;i++){

      if(newFriend.score[i] !== friends[i].score[i])
      newFriend.score[i] - friends[i].score[i]
    }



    friends.push(newFriend)
    console.log(req.body)
   
    res.json(newFriend)
    res.json(true)

    
    
  })

// if value[i] of arr1 is not equal to value[i] of arr2 then add those values and push new value to a new array


  // .then(function(data){
  //   console.log("survey.html", data)
  //   console.log("Adding friends...")
  // })
  
  
}
