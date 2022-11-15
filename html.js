
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
           client.say(channel, `Rinoa has a browser*`);
           client.say(channel, `add-in that replaces`);
           client.say(channel, `words on forms.`);
           client.say(channel, `The scammers can see`);
           client.say(channel, `it, but they generally`);
           client.say(channel, `don't catch on.`);
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);

                
  
  //     }
   
    }