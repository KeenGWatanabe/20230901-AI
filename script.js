function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} //else if([(inputText === ""),inputText.toLowerCase().match(/^me$/),(inputText === "")]) {
	//document.getElementById("answer").innerHTML="We All Gonna Die!";} 
	else if(inputText.toLowerCase().includes(" my ")) {
	document.getElementById("answer").innerHTML="We All Gonna Die!";
	} else if(inputText === " me ") {
	document.getElementById("answer").innerHTML="We All Gonna Die! Congratulations! You hit the sweetspot of humanity, the word *me* ";


	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}
}
