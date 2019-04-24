

var friends = require("../data/friends")
// var friendPlus = require("../public/survey.html")



module.exports = function(app){

  app.get("/api/friends", function(req, res) {

   res.json(friends)
  });
  
  
  app.post("/api/friends", function(req,res){

    
    // for( var i = 0 ; i < friends.length;i++){

    //   if(newFriend.score[i] !== friends[i].score[i])
    //   newFriend.score[i] - friends[i].score[i]
    // }
    var newFriend = req.body
    
    var bestMatch = {
      name: "",
      photo: "",
      scores: 100,
      
    }

    for(var i = 0 ; i < friends.length;i++){
     
      var fr = friends[i]
      console.log("the friends list")
      console.log(fr)
      var currentScore = 0;
      console.log("this is the scores")
      //console.log(fr.scores[j])
      console.log("this is the length of the scores")
      console.log(fr.scores.length)

      for(var j = 0; j < fr.scores.length;j++){
     
      // var newFriendScore = parseInt(newFriend.scores[j])
       currentScore +=  Math.abs(fr.scores[j] - newFriend.scores[j]) 
       console.log("this is the current score")
        console.log(currentScore)
      }
   
      if(currentScore < bestMatch.scores ){
        bestMatch.name = fr.name
        bestMatch.photo = fr.photo
        bestMatch.scores = currentScore
      }
   }
   
   // res.json(bestMatch)
    console.log(bestMatch)
   //console.log(newFriend)
   
    // res.json(newFriend)
    friends.push(newFriend)
    res.json(bestMatch)
   


  })
  
}
