(function () {

  var input = document.querySelector('#axela-input'),
      submit = document.querySelector('#axela-submit'),
      message = document.querySelector('#axela-message'),
      advancedDiv = document.querySelector('#advanced'),
      errorText = "I don't understand you.",
      dunnoText = "I wasn't programmed to know that.",
      picture = null,
      greetings = ["hi", "hello", "hola", "wasup", "yo", "hey", "ay"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }


}

  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */


 function processInput(){
   if(advancedDiv.contains(picture)){
     advancedDiv.removeChild(picture);
   }

   var words = input.value.toLowerCase().trim().split(" ");
   input.value = '';
   if(words.length == 1){
     if(greetings.indexOf(words[0]) > -1){
       message.innerHTML = "wazzzaaa!";
       var msg = new SpeechSynthesisUtterance("wazzaaa");
       window.speechSynthesis.speak(msg);
     }else{
       message.innerHTML = errorText;
     }
   }else if (words.length == 2) {
       switch(words[0]) {
         case "who":
           who(words[1]);
           break;
         case "go":
           go(words[1]);
           break;
         case "what":
           what(words[1]);
           break;
         case "show":
           show(words[1]);
           break;
         default:
           message.innerHTML = errorText;
       }
     } else {
       message.innerHTML = errorText;
     }



 }

  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */

   function who(word){
     switch (word) {
       case "you":
        message.innerHTML = "I am a hole in space";
        var msg = new SpeechSynthesisUtterance("I am a hole in space");
        window.speechSynthesis.speak(msg);
        break;
       case "me":
        message.innerHTML = "You are a living oranism";
        var msg = new SpeechSynthesisUtterance("You are a living organism");
        window.speechSynthesis.speak(msg);
        break;
        case "president":
         message.innerHTML = "A horrible living organism";
         var msg = new SpeechSynthesisUtterance("A horrible living organism");
         window.speechSynthesis.speak(msg);
         break;
       default:
        message.innerHTML = dunnoText;

     }
   }

  /*
   * what(word)
   * See above.
*/
function what(word){
 switch (word) {
   case "space":
    message.innerHTML = "ummm...nothing";
    var msg = new SpeechSynthesisUtterance("Um, nothing nothing at all");
    window.speechSynthesis.speak(msg);
     break;
   case "pi":
    message.innerHTML = "3.14159265...";
    var msg = new SpeechSynthesisUtterance("3.14159265358979 and so on");
    window.speechSynthesis.speak(msg);
     break;
  case "love":
    message.innerHTML = "I'm just a hole in space, ask your mom";
    var msg = new SpeechSynthesisUtterance("I'm just a hole in space ask your mom");
    window.speechSynthesis.speak(msg);
    break;
   default:
    message.innerHTML = dunnoText;
  }
}

  /*
   * where(word)
   * See above.
   */

   function go(word){
     switch (word) {
       case "youtube":
         window.location = "https://www.youtube.com/";
         break;
      case "spotify":
         window.location = "https://open.spotify.com/user/edgar_suarez/playlist/3TUzJiW0j3ko6cPmDPyoa7";
          break;
      case "mail":
         window.location = "https://mail.google.com/mail/u/0/#inbox";
      case "portfolio":
          window.location = "file:///Users/student/Desktop/Portfolio/index.html"
       default:
        message.innerHTML = dunnoText;
     }

   }




  /*
   * show(word)
   * See above.
   */

function show(word){
 switch (word) {
   case "dog":
    message.innerHTML = "Here is dog";
    picture = document.createElement('IMG');
    picture.src = "img/dog.png";
    advancedDiv.appendChild(picture);
    var msg = new SpeechSynthesisUtterance("Woof woof");
    window.speechSynthesis.speak(msg);
     break;
  case "meme":
    message.innerHTML = "lol";
    picture = document.createElement('IMG');
    picture.src = "img/f9a.jpg";
    advancedDiv.appendChild(picture);
    var msg = new SpeechSynthesisUtterance("Can't get fired if you don't have a job");
    window.speechSynthesis.speak(msg);
    break;
 case "chava":
    message.innerHTML = "This is my friend";
    picture = document.createElement('IMG');
    picture.src = "img/chava.png";
    advancedDiv.appendChild(picture);
    var msg = new SpeechSynthesisUtterance("This is my friend, Chava");
    window.speechSynthesis.speak(msg);
    break;
 case "destruction":
    message.innerHTML = "-_-";
    picture = document.createElement('IMG');
    picture.src = "img/destruction.gif";
    advancedDiv.appendChild(picture);
    var msg = new SpeechSynthesisUtterance("booooooommmmmmm");
    window.speechSynthesis.speak(msg);
    break;


   default:
    message.innerHTML = dunnoText;
}

}


})();
