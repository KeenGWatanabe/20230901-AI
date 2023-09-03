function myFunction() {
	var inputText = document.getElementById("text_a").value.trim().toLowerCase();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} else if(inputText === " me ") {
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	} else if(inputText.includes(" my ")) {
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}
}
