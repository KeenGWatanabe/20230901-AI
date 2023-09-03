function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} //else if([(inputText === ""),inputText.toLowerCase().match(/^me$/),(inputText === "")]) {
	//document.getElementById("answer").innerHTML="We All Gonna Die!";} 
	//else if(inputText.toLowerCase().includes(" my ")) {
	//document.getElementById("answer").innerHTML="We All Gonna Die!";} 
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";
		
		}
	else if(inputText.toLowerCase().indexOf("i")>-1){
	document.getElementById("answer").innerHTML="We All Gonna Die! Congratulations! <br> You hit the sweetspot of humanity, the word -I- ";
	
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}

	
}
