function myFunction() {
    var inputText = document.getElementById("text_a").value;

    if(inputText.includes("I")) {
        document.getElementById("answer").innerHTML="We All Gonna Die!";      
    } else if(inputText.includes("me")) {
        document.getElementById("answer").innerHTML="We All Gonna Die!";
        
    } else {
        document.getElementById("answer").innerHTML="Who cares?";      
    }
  
    }
