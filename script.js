function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome";
		
		} else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";
		
		} else if(inputText.toLowerCase().indexOf("i ")>-1){
	document.getElementById("answer").innerHTML=`WE ALL GONNA DIE! Congratulations! <br> You hit the sweetspot of humanity, the word "I" `;
		} else if(inputText.toLowerCase().indexOf("asshole")>-1){
	document.getElementById("answer").innerHTML='<a href="https://sinkapoor.blogspot.com/2023/09/irritants-of-society.html">click for blogging on assholes</a>';       
		} else if(inputText.toLowerCase().indexOf("god")>-1){
	document.getElementById("answer").innerHTML='<a href="https://www.theguardian.com/education/2004/mar/08/highereducation.uk1#:~:text=A%20scientist%20has%20calculated%20that,existence%20of%20an%20omnipotent%20being.">A scientist has calculated that there is a 67% chance that God exists.Dr Stephen Unwin has used a 200-year-old formula to calculate the probability of the existence of an omnipotent being. Baye`s Theory is usually used to work out the likelihood of events, such as nuclear power failure, by balancing the various factors that could affect a situation.The Manchester University graduate, who now works as a risk assessor in Ohio, said the theory starts from the assumption that God has a 50/50 chance of existing, and then factors in the evidence both for and against the notion of a higher being.Factors that were considered included recognition of goodness, which Dr Unwin said makes the existence of God more likely, countered by things like the existence of natural evil - including earthquakes and cancer</a>';       
		} else {
	document.getElementById("answer").innerHTML="Who cares?";      
		}
	
	}
