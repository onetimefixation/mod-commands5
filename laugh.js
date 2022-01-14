
// VERSION
//  -Initial 060321

var IRP = 0;
var IDY = 0;

export function laugh(client, tags, channel, streamer){

//console.log(tags);

    // only accept messages from valid people
    if (tags.mod !== true) {
           return;
        }    

        if (streamer == "RP"){
            IRP = IRP + 1;
        }
        if (streamer == "DY"){
            IDY = IDY + 1;
        }
console.log(IDY)
console.log(IRP)
console.log(streamer)

        client.say(channel, `Rinoa ${IRP} / Deyo ${IDY}`);
        
    }