// VERSION 1.1


export function gift(client, tags, channel, noParam){

    //console.log(tags);
    
        // only accept messages from valid people
    
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
    
               client.say(channel, `If you'd like to gift merch to someone in the live Twitch chat, please go to http://rinoapoison-shop.fourthwall.com/ choose a gift and hit the GIFT option... Happy Holidays.`)
               client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);

      //     }
       
        }