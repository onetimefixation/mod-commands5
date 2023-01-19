// VERSION 1.1


export function phone(client, tags, channel, noParam){

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
               client.say(channel, `Twitch doesn't allow phone numbers to be in chat and, unfortunately, we can't be sure that they will recognize a joke phone number versus a real one. So, we have to delete them all and ask that people not post any phone numbers, even if it's a joke. We know it kinda sucks. 😦 `)
               client.say(channel, `_________________________`);

      //     }
       
        }