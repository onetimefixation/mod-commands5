
// VERSION 1.1


export function html(client, tags, channel, noParam){

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

           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);
           client.say(channel, `Rinoa has a browser add-in that replaces words on forms. The scammers can see it, but they generally don't catch on.`;
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);

                
  
  //     }
   
    }