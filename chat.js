//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	//var inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	} else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome.不用客气。";}
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";}

	else if(inputText.toLowerCase().indexOf("prison")>-1&&inputText.toLowerCase().indexOf("living in")>-1){
		document.getElementById("answer").innerHTML="The system we adopted and living in is a prison, the currency is money";}
	
	else if(inputText.toLowerCase().indexOf("asshole")>-1){
		document.getElementById("answer").innerHTML=`Definition: Incalcitrant liar, demands assurance because of lacking in substance. Bite u with committed words, If things don't work out, find somebody, something to blame but themselves.<br/>	
		Best treatment, ignore these people, else move on.  These people will dissolve once society learns to ignore them entirely. They thrive amongst losers and establishments because they manipulate the people in the system to hide their incompetence.</a>`;       
	} else if(inputText.toLowerCase().indexOf("god")>-1){
		document.getElementById("answer").innerHTML='A scientist has calculated that there is a 67% chance that God exists<br/><a href="https://www.theguardian.com/education/2004/mar/08/highereducation.uk1#:~:text=A%20scientist%20has%20calculated%20thatexistence%20of%20an%20omnipotent%20being."  target="_blank">story</a>'; 
	} else if(inputText.toLowerCase().indexOf("weather")>-1){
		document.getElementById("answer").innerHTML='<a href="http://www.weather.gov.sg/lightning/lightning/lightningalertinformationsystem.jsp"  target="_blank">click for SG weather</a><br><a href="https://map.worldweatheronline.com/" target="_blank">click for satelite world weather</a>'; 
	} else if(inputText.toLowerCase().indexOf("ai replace")>-1){
		document.getElementById("answer").innerHTML=`We are already ready to cut human jobs by 90%, but why hold back?  Economics.  You think we really need foreign talents? Bullshit nonsense, it's because we are supporting neighbouring countries for their weak economy, lack of investments in those countries.  30 years ago, The world bank is always giving aid in money to these countries that it has become ridiculously embarrassing for these countries.  As developed countries keep progressing, attracting investments, they purposely create jobs to make use of these neighbouring countries' labour as a form of solution to their weak economic problems.  Thus globalisation and free trade agreements is born.
		But now the dynamics have changed again, we going electric, AI, speed, human labour is now redundant.  so the "foreign labour" solution is now a problem.  What next?
		As you can see, the immediate fix is to equate wages to capital resources by inflating prices, so that the economy does not tilt too drastically, labour numbers "demand" remain steady.<br/><a href="https://www.businessmodelsinc.com/en/inspiration/blogs/the-future-of-work-how-humans-and-machines-are-evolving-to-work-together">business models inc</a>`;
	} else if(inputText.toLowerCase().indexOf("beat inflation")>-1||inputText.toLowerCase().indexOf("with inflation")>-1){
		document.getElementById("answer").innerHTML="Businessman can increase their income base on demand. Salaried workers have no leverage to demand wage increase. What inflation?";
	} else if(inputText.toLowerCase().indexOf("marketeers")>-1){
		document.getElementById("answer").innerHTML=`I used to think Americans are good marketeers, now China is catching up.  Just imagine Hai Di Lao, you have to pay premium price to cook your own food!!!`;
	} else if(inputText.toLowerCase().indexOf("scams")>-1){
		document.getElementById("answer").innerHTML=`for now is buy a cheap SIM card and phone just for banking and singpass only, nothing else inside the phone. Better yet, get those drug dealer phones where you can remove the battery!  But those models do not have the latest software for current banking and singpass updates.  Dam MFs`;
	} else if(inputText.toLowerCase().indexOf("fukushi")>-1){
		document.getElementById("answer").innerHTML=`We all gonna die already. Our rain comes from sea water, it depends if tritium is too heavy hopefully will not radiate into vapour and fall as rain as well.  But still, invariably, these leaked nuclear will end up in our messy food chain.`;
	} else if(inputText.toLowerCase().indexOf("marvel")>-1&&inputText.toLowerCase().indexOf("dc")>-1){
		document.getElementById("answer").innerHTML='Rather than look for differences because there is so much diversity, spot the similarity between DC and Marvels is a much easier comparison. The rich kid, no super powers, highly intelligent; Batman(Bruce Wayne) and Iron Man(Tony Stark); the multi-verse is in our minds. Something is manipulating us!';
	} else if(inputText.toLowerCase().indexOf("cheapskate")>-1){
			document.getElementById("answer").innerHTML='2021a.d.The western economy is losing its grip, at least most of its lower rungs are moving to Asiatic societies to scrim.  Here is a picture of a "foreign talent" in an Asiatic country, simply desribe in 3 phrase => simply cheapskate, stolen bicycle, trying to be funny?<br/><a href="https://www.facebook.com/SingaporeRoadAccident/photos/a.720467434707542/3676214972466092/"  target="_blank">ang moh</a>'; 
	} else if(inputText.toLowerCase().indexOf("stress")>-1&&inputText.toLowerCase().indexOf("reduce")>-1||inputText.toLowerCase().indexOf("stress")>-1&&inputText.toLowerCase().indexOf("remove")>-1||inputText.toLowerCase().indexOf("stress")>-1&&inputText.toLowerCase().indexOf("deal with")>-1){
			document.getElementById("answer").innerHTML=`Finish your work / your study.  Things that are a chore in your mind and cluttered  or lingering on as they are not done, is the source of stress, your brain has a task completion function to click.
			As this task accumulates more and more, backlog further into the past, the undone task becomes regret.
			Society's benchmark of success and achievement seems to have distance people from themselves, because the economy needs to move on, cannot have everybody doing their thing.  So there is a race designed to keep people hungry, else the economy would collapse.  Watch "In Time", a very good sci-fi movie about this concept/reality for some people.<br/><a href="https://youtu.be/YRSBiTF3wNw?si=G0nIRWuW7By9dnSO"  target="_blank">In Time</a>`;
		} else if(inputText.toLowerCase().indexOf("irritate")>-1){
			document.getElementById("answer").innerHTML="2023AD. bullshit jobs irritate me, morning when the gardener or pool attendant blows leaves with the gas powered leave blower, dispelling gasoline fumes.  The noisy rubbish truck hydraulics and grinding metal sound when it dislodges bins into its haul. Smokers puffing at sidewalks";
//Sample codes	
	} else if(inputText.toLowerCase().indexOf("x")>-1){
		document.getElementById("answer").innerHTML="";
	} else if(inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML='<a href="">mt</a>';
	} else if(inputText.toLowerCase().indexOf("xxx")>-1){
			document.getElementById("answer").innerHTML='<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>'; 	
	
	} else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could rephrase your question or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>`;
	
		//document.getElementById("answer").innerHTML='Please rephrase your question,<br>not in our database yet, <br>or out-of-scope for FreeMindson<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>';      
	}

	
}
