function myFunction() {
	var inputText = document.getElementById("text_a").value.trim().toLowerCase();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} else if(inputText === " me "||" my ") {
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}
}
