require('dotenv').config();

const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages from this bot
	if (self) return;


 // console.log(tags);


    // only accept messages from valid people
    if (tags.mod === false){
     // console.log("outta here")
        return;
     }    
       
     //  if (tags.badges == 'null' || tags.badges == 'undefined'){
       //  }
   


    var parsedMessage = message.split(' ');

// V02 TESTING

//    if (parsedMessage[0].toLowerCase() === '!startpred') {
//     console.log(parsedMessage)

//    }
// V02 TESTING



    //check for the !startpred <time> command
 
    // then if the time (the second param) is not passed or is not numeric then RETURN
    if (parsedMessage[0].toLowerCase() === '!startpred') {

        if (parsedMessage[1] === '' || isNotNumeric(parsedMessage[1])){
            return;
        }   
    }
    function isNotNumeric(num){
        return isNaN(num)
      }

    // make sure it is between 60 secs (1 min) and 900 secs (15 mins)
    //use parseInt to convert the time to a string

    if ((parsedMessage[0].toLowerCase() === '!startpred') && (parseInt(parsedMessage[1]) < 1 || parseInt(parsedMessage[1]) > 15)){
        return;
    }    

	if (parsedMessage[0].toLowerCase() === '!startpred') {
        
        const delayInMilliseconds = 30000; //30 seconds
        const predict_time = parseInt(parsedMessage[1]) * 60000; // convert <time parameter> to milliseconds
        const numberIterations = (predict_time / delayInMilliseconds) + 1;
 
        var elapsed_time = 0;
        var timeLeft = predict_time;

// if (parsedMessage[0] !== "1") {
        client.say(channel, `*** Prediction ***`);
		    client.say(channel, `* Voting Started *`);
        client.say(channel, `* ${parsedMessage[1]} min(s) left *`);
        client.say(channel, `******************`);
        //}


        for (let i = 0; i < numberIterations; i++) {
          makeDelay(i);
        }
 
        function makeDelay(i) {

          setTimeout(function(i) {

                       // start counting down at 60 seconds

            if (timeLeft <= 60000){
            // Save first two digits of timeLeft in a string in order to display 
                
                var strOutput = [];
                var strTimeLeft = timeLeft.toString();
            
            for (var i = 0; i < 2; i++) {
                strOutput.push(+strTimeLeft.charAt(i));
            }

            if (parsedMessage[1] !== 1) {
                client.say(channel,`*** Prediction *****`);
                client.say(channel, `**** Voting ******`);
            }
            
            if (strOutput[0] && strOutput[1] !== 1){
                client.say(channel,`*** ${strOutput[0]}${strOutput[1]} Secs Left ***`);
                }
              else {
                if (timeLeft <= 0) {
                   client.say(channel,`**** Ended ******`); 
                }
                
              }  
            }

           timeLeft = timeLeft - delayInMilliseconds; 

        }, delayInMilliseconds * i);
        }
    }


});

/*
{
    'badge-info': null,
    badges: { broadcaster: '1', premium: '1' },
    'client-nonce': 'xxxxxxxxxxxxxxxxxxx',
    color: '#FF0505',
    'display-name': 'xxxxxxxxxxxxxxx',
    emotes: null,
    flags: null,
    id: 'xxxxxxxxxxxxx',
    mod: false,
    'room-id': 'xxxxxxxxxx',
    subscriber: false,
    'tmi-sent-ts': 'xxxxxxxxxxx',
    turbo: false,
    'user-id': 'xxxxxxxxxxxxx',
    'user-type': null,
    'emotes-raw': null,
    'badge-info-raw': null,
    'badges-raw': 'broadcaster/1,premium/1',
    username: 'xxxxxxxxxxxx',
    'message-type': 'chat'
  } */