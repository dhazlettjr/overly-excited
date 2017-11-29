// Create an array that contains the words in the sentence
var sentence = [
    "I", "would", "rather", "go", "back", "to", "Afghanistan", "than", "have", "to", "learn", "javascript", "again."
  ];

  //create a variable that will read the sentence
  var newSentence = "";
  
  // The addExcitement function should accept the array as the sole argument
  function addExcitement (theWordArray) {
      for (var i = 0; i < sentence.length; i++) {

        
        if ( (i+1) % 3 === 0 ) {
          console.log(newSentence+=(sentence[i])+"! ");
        } else {
          console.log(newSentence+=(sentence[i])+" ");
        }
      
    //console.log(newSentence); 
      
  }
}
  
  // Invoke the function and pass in the array
  addExcitement(sentence);