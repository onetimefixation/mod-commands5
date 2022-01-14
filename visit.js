
// VERSION
//  -Initial 060321


export function visit(client, tags, channel, streamer){

//console.log(tags);

    // only accept messages from valid people
    if (tags.mod !== true) {
           return;
        }    

        client.say(channel, `Please visit our scambaiting friends here on Twitch at: https://www.twitch.com/${streamer}`);
        }