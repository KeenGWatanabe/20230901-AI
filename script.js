function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome";
		
		}
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";
		
		}
	else if(inputText.toLowerCase().indexOf("i ")>-1){
	document.getElementById("answer").innerHTML=`WE ALL GONNA DIE! Congratulations! <br> You hit the sweetspot of humanity, the word "I" `;
	
		}
	else if(inputText.toLowerCase().indexOf("assholes ")||inputText.toLowerCase().indexOf("asshole ")){
		document.getElementById("answer").innerHTML='<a href="https://sinkapoor.blogspot.com/2023/09/irritants-of-society.html">click for blogging on assholes</a>';       
		
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}

	
}
