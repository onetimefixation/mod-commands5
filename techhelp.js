
// VERSION 1.1


export function html(client, tags, channel, noParam){



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
           client.say(channel, `We do appreciate your enthusiasm to help with technical issues. Please beware of giving Rinoa multiple directions on how to solve a technical issue. There may be something already in place which will not work alongside your suggestion.  Also it is MOST important not to give any 'lurking' scammers ideas about how we do things here. WHISPER your suggestions to a Mod who can act accordingly. 🖤 `);
           client.say(channel, `▀▄▀▄▀▄▀▄▀▄▀▄▀▄`);
  //     }
   
    }