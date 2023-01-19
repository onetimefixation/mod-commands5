// VERSION
// Added !startpoll 060321
// Added !startmatch 071922
// Added !html 11/11/22
// Added !gift 12/13/22
// Added !learn 1/5/22


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
import {antidote} from './antidote.js';
import {html} from './html.js';
import {patreon} from './patreon.js';
import {gift} from './gift.js';
import {learn} from './learn.js';
import {phone} from './phone.js';
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
  case '!antidote':
    antidote (client, tags, channel, parsedMessage[1]);
      break;
  case '!html':
    html (client, tags, channel, parsedMessage[1]);
      break; 
  case '!patreon':
    patreon (client, tags, channel, parsedMessage[1]);
      break;
  case '!gift':
    gift (client, tags, channel, parsedMessage[1]);
      break;
  case '!learn':
    learn (client, tags, channel, parsedMessage[1]);
      break;
  case '!phone':
    phone (client, tags, channel, parsedMessage[1]);
          break;
  default:
    break;
  }
});