// VERSION
// Added !startpoll 060321
// Added !startmatch 071922


//    REQUIRES DO NOT WORK BECAUSE THE JASON TYPE IS MODULE 
// require('dotenv').config();
//const tmi = require('tmi.js');

//           IMPORTS         //

import dotenv from 'dotenv';
import {startpred} from './predtimer.js';
import {startpoll} from './predpoll.js';
import {startmatchtimer} from './startmatchtimer.js';
import {visit} from './visit.js';
import {laugh} from './laugh.js';
import {schedule} from './schedule.js';
import tmi from 'tmi.js';

dotenv.config();


 const client = new tmi.Client({
	options: { debug: true },
	identity: {
    username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
}); 


client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages from this bot
	    if (self) return;

  // parse the messaage to get command and params
    var parsedMessage = message.split(' ');

switch (parsedMessage[0].toLowerCase()){
  case '!startpred':
    startpred(client, tags, channel, parsedMessage[1]);
    break;
  case '!startpoll':
    startpoll(client, tags, channel, parsedMessage[1]);
    break;
  case '!startmatch':
      startmatchtimer(client, tags, channel, parsedMessage[1]);
      break;
  case '!visit':
    visit(client, tags, channel, parsedMessage[1]);
    break;
  case '!laugh':
    laugh (client, tags, channel, parsedMessage[1]);
      break;
  //case '!schedule':
  //  schedule(client, tags, channel, parsedMessage[1]);
  //  break;
  default:
    break;
  }
});