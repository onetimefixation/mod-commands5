
export function startpred(client, tags, channel, predictionTime){


    // only accept messages from valid people
    if (tags.mod === false){

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
   

           client.say(channel, `P R E D I C T I O N`);
           client.say(channel, `* Voting Started *`);
           client.say(channel, `* ${predictionTime} min(s) left *`);
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
   
               if (predictionTime !== 1) {
                   client.say(channel,`P R E D I C T I O N`);
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
  //     }
   
    }