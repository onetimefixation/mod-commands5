
// VERSION
//  -Initial 060321


export function startpoll(client, tags, channel, predictionTime){

//console.log(tags);

    // only accept messages from valid people
    if (tags.mod !== true) {
           return;
        }    

       //if the time is not passed or is not numeric then RETURN
   
           if (predictionTime === '' || isNotNumeric(predictionTime)){
               return;
             }

       function isNotNumeric(num){
           return isNaN(num)
         }
   
       // make sure it is between 60 secs (1 min) and 900 secs (15 mins)
       //use parseInt to convert the time to a string
   
       if (parseInt(predictionTime) < 1 || parseInt(predictionTime) > 15){
           return;
       }    
           
           const delayInMilliseconds = 30000; //30 seconds
           const predict_time = parseInt(predictionTime) * 60000; // convert <time parameter> to milliseconds
           const numberIterations = (predict_time / delayInMilliseconds) + 1;
    
           var elapsed_time = 0;
           var timeLeft = predict_time;
   

           //client.say(channel, `PREDICTION VOTING`);
           client.say(channel, `* POLL STARTED *`);
           client.say(channel, `* ${predictionTime} MIN(S) LEFT *`);
          // client.say(channel, `******************`);
   
   
           for (let i = 0; i < numberIterations; i++) {
             makeDelay(i);
           }
    
           function makeDelay(i) {
   
             setTimeout(function(i) {
   
                // start showing the time at 60 seconds
   
               if (timeLeft <= 60000){
               // Save first two digits of timeLeft in a string in order to display 
                   
                   var strOutput = [];
                   var strTimeLeft = timeLeft.toString();
               
               for (var i = 0; i < 2; i++) {
                   strOutput.push(+strTimeLeft.charAt(i));
               }

                client.say(channel,`*** POLL ***`);
                //client.say(channel,`**  V O T I N G  **`);
               
               
               if (strOutput[0] && strOutput[1] !== 1){
                   client.say(channel,`** ${strOutput[0]}${strOutput[1]} SECS LEFT ***`);
                   }
                 else {
                   if (timeLeft <= 0) {
                      client.say(channel,`**** ENDED ******`); 
                   }
                   
                 }  
               }
   
              timeLeft = timeLeft - delayInMilliseconds; 
   
           }, delayInMilliseconds * i);
           }
  //     }
   
    }