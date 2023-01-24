// VERSION 1.1


export function news(client, tags, channel, noParam){

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
               client.say(channel, `🌟Get the newsletter to receive weekly updates on each and everything! Get merch discounts, livestream recaps and more https://rinoapoison.com/newsletter/`)
               client.say(channel, `_________________________`);

      //     }
       
        }