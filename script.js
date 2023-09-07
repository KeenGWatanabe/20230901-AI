// >-1 means any character after accepted, "i " must be only I in a sentence
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
	document.getElementById("answer").innerHTML=`Congratulations! WE ALL GONNA DIE! <br> You hit the sweetspot of humanity, the word "I" `;
		}
	else if(inputText.toLowerCase().indexOf("asshole")>-1){
		document.getElementById("answer").innerHTML='<a href="https://sinkapoor.blogspot.com/2023/09/irritants-of-society.html"  target="_blank">click for blogging on assholes</a>';       
		} 
	else if(inputText.toLowerCase().indexOf("god")>-1){
		document.getElementById("answer").innerHTML='<a href="https://www.theguardian.com/education/2004/mar/08/highereducation.uk1#:~:text=A%20scientist%20has%20calculated%20thatexistence%20of%20an%20omnipotent%20being."  target="_blank">A scientist has calculated that there is a 67% chance that God exists</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("the developer")>-1){
		document.getElementById("answer").innerHTML='<a href="http://web.mckeen.sg" target="_blank">developer</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("singapore weather")>-1){
		document.getElementById("answer").innerHTML='<a href="http://www.weather.gov.sg/lightning/lightning/lightningalertinformationsystem.jsp"  target="_blank">click for SG weather</a>'; 
		}

	else if(inputText.toLowerCase().indexOf("the weather")>-1){
	document.getElementById("answer").innerHTML='<a href="https://map.worldweatheronline.com/" target="_blank">click for satelite world weather</a>'; 
		}	
	else if(inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML='<a href="">mt</a>'; 
	} else {
	document.getElementById("answer").innerHTML="Who cares?";      
	}

	
}
