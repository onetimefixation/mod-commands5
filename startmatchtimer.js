
// VERSION 2.1


export function startmatchtimer(client, tags, channel, predictionTime){

//console.log(tags);

    // only accept messages from valid people
 /*   if (tags.mod !== true) {
           return;
        }    */
        
        var validUser;
      
          if (tags.badges && (tags.badges.broadcaster || tags.badges.moderator)){
           validUser = 1;
            }
          else {
          validUser = 0;
          }
          if (!validUser){
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
   /*
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);
           client.say(channel, `[*__SUBS_WILL_BE_*]`);
           client.say(channel, `[*_MATCHED__FOR_*]`);
           client.say(channel, `[*____THE_NEXT____*]`);
           client.say(channel, `[*___${predictionTime} MINUTE(S)___*]`);
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);
   */

           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄ rinoaDance PogChamp`);
           client.say(channel, `[*__SUBS__TO_THIS_*]`);
           client.say(channel, `[*_STREAM_WILL_BE_*]`);
           client.say(channel, `[*__MATCHED__FOR__*]`);
           client.say(channel, `[*____THE_NEXT____*]`);
           client.say(channel, `[*___${predictionTime} MINUTE(S)___*]`);
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);


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

                client.say(channel,`[*_Sub Matching_*]`);
               
               if (strOutput[0] && strOutput[1] !== 1){
                   client.say(channel,`*${strOutput[0]}${strOutput[1]} SECS LEFT_*]`);
                   client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀`);
                   }
                 else {
                   if (timeLeft <= 0) {
                      client.say(channel, `[*SUB MATCHING ENDED*]`);
                      client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);
                   }
                   
                 }  
               }
   
              timeLeft = timeLeft - delayInMilliseconds; 
   
           }, delayInMilliseconds * i);
           }
  //     }
   
    }