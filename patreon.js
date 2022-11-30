
// VERSION 1.1


export function patreon(client, tags, channel, noParam){

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
    
               client.say(channel, `Join our Patreon for exclusive content and support the channel ► https://www.patreon.com/rinoapoison`)
               client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);

      //     }
       
        }