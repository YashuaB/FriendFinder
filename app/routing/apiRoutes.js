

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

    friends.push(newFriend)

    var bestMatch = {
      name: "",
      photo: "",
      score: 100,
      
    }

    for(var i = 0 ; i < friends.length;i++){
      var fr = friends[i] 
      var currentScore = 0;
      
      for(var j = 0; j < fr.scores.length;j++){
        console.log(fr.scores.length)
       currentScore +=  Math.abs(fr.scores[j] - newFriend.score[j]) 
      //  console.log(currentScore)
      }
   
      if(currentScore < bestMatch.score ){
        bestMatch.name = fr.name
        bestMatch.photo = fr.photo
        bestMatch.score = currentScore
      }
   }
   
   // res.json(bestMatch)
    console.log(bestMatch)
   console.log(newFriend)
   
    // res.json(newFriend)
   
    res.json(bestMatch)

  })
  
}
