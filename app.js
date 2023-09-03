function myFunction() {
	var inputText = document.getElementById("text_a").value.trim().toLowerCase();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
<<<<<<< HEAD
	} else if(inputText === " me "||" my ") {
=======
	} else if(inputText === " me ") {
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	} else if(inputText.includes(" my ")) {
>>>>>>> 7cc83bff6e05f11cfd0d8ff98b3d915e0723ae95
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}
}
