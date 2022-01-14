//TODO: Check that only mods can enter !boom
//TODO:  
//TODO:  
//TODO:  Find out what the upper limit is for the total emotes
//TODO: 
//TODO:  Disappear the double first meters
//TODO:
//TODO:• Can we have the meter shake more as it's filling towards 100%
//TODO:• *******  Phase I - Start shaking at 80%
//TODO:
//TODO:• Explode when reaches full 100%, where the emotes leave the center of the emotes.
//TODO:• *******  Do that in Stream Elements
//TODO:
//TODO:• The meter should lose gain when nothing is happening or the excitement isn't happening.
//TODO:• *******  Idea - Tickle Me with Emotes" after x mins of inactivity
//TODO:
//TODO:• Can we have the emotes that pop over screen overlay, as the emotes used in the stream itself?
//TODO:

//TODO: ************ Started Version 3 to: ****************************
//TODO:  [ X ] Capture 1st emote
//TODO:  [ X ] Only accept first X emotes from a user
//TODO:  [ X ] Take out the fades
//TODO:  Figure out increments
//TODO:  Add color as it progresses
//TODO:  Make as many params as possible
//TODO:  Have the program started and ended by a mod 
//TODO:  

//TODO:  *********** In Version 4 ******************************
//TODO:   Subscribe to the Hype Train Event
//TODO:   Have it run only during the time of a Hype Tran
 
//import dotenv from 'dotenv';


// ***********************  THESE ARE CUSTOMIZABLE ************************* //
//                                                                           //
var Max_Emotes_Accepted_Per_Message = 3                                      //
var startToWiggle = 20;    // number of emotes                               //
var maxPercentage = 100;   // not working yet                                //

//                                                                           //
// ************************************************************************* //


const gaugeElement = document.querySelector(".gauge");

const gauge_shakingElement = document.querySelector(".gaugeshake");

gaugeElement.querySelector(".gauge__fill");
gaugeElement.querySelector(".gauge__cover").textContent = `0%`;

gauge_shakingElement.querySelector(".gauge__fill");
gauge_shakingElement.querySelector(".gauge__cover").textContent = `0%`;


// ********************  DO NOT CHANGE THESE ******************** //
var totalEmotes = 0;                                              //
var totalPercentage = 0;                                          //
var trigger = 0;                                                  //
var stopped = 0;                                                  //
var currTime = new Date();                                        //
var currMinute = currTime.getMinutes();                           //
var previousMinute = currMinute;                                  //
var nextTime = currTime.getMinutes() + 5; // make 5 a param       //
var timeoutID;                                                    //
var firstTime = 1;                                                //
var guageIsFadedOut = 0;                                          //  
var delayTime = 10000;   // 1 sec = 1000 , 5 sec = 5000           //       
// ************************************************************** //


function setGaugeValue(gauge, gaugeshake, value) {

 totalEmotes = totalEmotes + value;
 totalPercentage = totalEmotes / maxPercentage;

 //if (totalPercentage *100 >= maxPercentage) {
//	 trigger = 1;

	 if (totalEmotes >= 50) {
		trigger = 1;

 }
  console.log ("Total Percetage ",totalPercentage);
  console.log ("Total Emotes ",totalEmotes);
  console.log ("Value ", value);
  console.log ("Total Emote % ", (totalEmotes * .01) / 2);


if (totalEmotes < startToWiggle) {
	// check if the shaking count has been reached.
    // if so switch the visibility of the two meters
    // gauge.querySelector(".gauge__fill").style.transform = `rotate(${(totalEmotes * .01) / 2}turn)`;
 gauge.querySelector(".gauge__fill").style.transform = `rotate(${(totalEmotes) * (1.8)}deg)`;
 gauge.querySelector(".gauge__cover").textContent = `${Math.round(totalPercentage * 100)}%`;


 gaugeshake.querySelector(".gauge__fill").style.transform = `rotate(${(totalEmotes) * (1.8)}deg)`;
 gaugeshake.querySelector(".gauge__cover").textContent = `${Math.round(totalPercentage * 100)}%`;
 document.getElementById("showShake").style.display = "none";

}
else {
	document.getElementById("showGauge").style.display = "none";
	gaugeshake.querySelector(".gauge__fill").style.transform = `rotate(${(totalEmotes) * (1.8)}deg)`;
	gaugeshake.querySelector(".gauge__cover").textContent = `${Math.round(totalPercentage * 100)}%`;
	document.getElementById("showShake").style.display = "inline-block";
	}

}
//*********************  Goes Here ****************/
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: { username: 'astro_charles',
		        password: 'oauth:5wbi0v5az77x59vv6c1kv2f11v7egz'
	},
	channels: [ '#astro_charles' ]

});
//*********************  Ends Here ****************/

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;

	if (stopped) {
		
		return;
	}

	if(message.toLowerCase() === '!resetmeter') {
		value = 0;
		totalEmotes = 0;
		trigger = 0;
		return;
	};

	if(tags.emotes == null){
		return;
	}

	let all = [];
	for (const key of Object.keys(tags.emotes)) {
		 const emote = tags.emotes[key];

		for (const range of emote) {
			const split = range.split('-');

			all.push({
				emote: key,
				start: parseInt(split[0]),
				end: parseInt(split[1]),
			});
		}
	}


	length = all.length;

// only take the first x number of emotes

if (length > Max_Emotes_Accepted_Per_Message) {
	length = Max_Emotes_Accepted_Per_Message;
}

	console.log(" Version 3.0");
	setGaugeValue(gaugeElement, gauge_shakingElement, length);


	// resetTimer(nextTime);


function resetTimer(nextTime){
//	Timing
//	======
//	save the current minute plus the nexttime so we can set the setTimeout
// if the setTimeout expires,
//  1)  hide the component
//   OPTIONAL: say "Tickle me"
// otherwise, if the next emote is within the delayTime,
//  1)clear the last setTimeout 
//  2) reset the nextTime and send this new nextTime to the resettimer so it starts a new clock

function fadeOutEffect() {


if (totalEmotes < startToWiggle) {	
	// set a timeoout pulsingTimput, for x secs.



	var pulseID = setTimeout (() => {
          	// set the .pulse class
	
			document.getElementById("showGauge").classList.add("pulse");
	}, 1000);


		var fadeEffect = setInterval(function () {
			if (!gaugeElement.style.opacity) {  
				gaugeElement.style.opacity = 1;  
			}
			if (gaugeElement.style.opacity > 0) {  
				gaugeElement.style.opacity -= 0.1; 
			} else {
				clearInterval(fadeEffect);
				guageIsFadedOut = 1;
				console.log("in 3rd section *******")
			}
		}, 500);
	}	
else {
	var fadeEffect = setInterval(function () {

		if (!gauge_shakingElement.style.opacity) {  
			gauge_shakingElement.style.opacity = 1;  
		}
		if (gauge_shakingElement.style.opacity > 0) {  
			gauge_shakingElement.style.opacity -= 0.1; 
		} else {
			clearInterval(fadeEffect);
			guageIsFadedOut = 1;
		}
	}, 200);

}

}

	if (firstTime){
		firstTime = 0;
		}
	else {  // clear the last timer and set a new one below
			// in version 3 ignore all fades
	  // clearTimeout(timeoutID);

		if (guageIsFadedOut){
			//fade it back in *********************
			gaugeElement.style.opacity = 1;  
			gauge_shakingElement.style.opacity = 1
		}  // *************************************
	}

	//start the pulse effect
    // in version 3 ignore all fades

	//timeoutID = setTimeout(() => {
	//		console.log("I'm going to sleep")
	//		fadeOutEffect();
	//	}, delayTime); //10 sec for now
				

	return;			
}


//	set timeout for currnt time + idle time (say 5 Mins)

	
	if (trigger){
		client.say(channel, `!boom`);        

		// **** Reset everything and quit ****
		gauge_shakingElement.style.opacity = 0;
		totalEmotes = 0;
		stopped = 1;
	}

});