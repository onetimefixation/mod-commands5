// VERSION 1.1


export function learn(client, tags, channel, noParam){

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
               client.say(channel, `__________________________`);
               client.say(channel, `⚠️Learn about different types of scam... https://rinoapoison.com/scam-guide/`);
               client.say(channel, `_________________________`);

      //     }
       
        }