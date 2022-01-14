// VERSION
// Added !startpoll 060321


//    REQUIRES DO NOT WORK BECAUSE THE JASON TYPE IS MODULE 
// require('dotenv').config();
//const tmi = require('tmi.js');

//           IMPORTS         //

import dotenv from 'dotenv';
import {startpred} from './predtimer.js';
import {startpoll} from './predpoll.js';
import {visit} from './visit.js';
import {laugh} from './laugh.js';
import {schedule} from './schedule.js';
import tmi from 'tmi.js';

dotenv.config();

/* const client = new tmi.Client({
	options: { debug: true },
	identity: {
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
}); */

const client = new tmi.Client({
	options: { debug: true },
	identity: {
    username: 'Melon_Boto',
		password: 'oauth:z8z6k5k6vsr9d0qnlhaorkft48v4up'
	},
	channels: [ 'rinoapoison' ]
});

console.log (process.env.OAUTH_TOKEN)

console.log (process.env.CHANNEL_NAME)

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

/*
{
    'badge-info': null,
    badges: { broadcaster: '1', premium: '1' },
    'client-nonce': 'xxxxxxxxxxxxxxxxxxx',
    color: '#FF0505',
    'display-name': 'xxxxxxxxxxxxxxx',
    emotes: null,
    flags: null,
    id: 'xxxxxxxxxxxxx',
    mod: false,
    'room-id': 'xxxxxxxxxx',
    subscriber: false,
    'tmi-sent-ts': 'xxxxxxxxxxx',
    turbo: false,
    'user-id': 'xxxxxxxxxxxxx',
    'user-type': null,
    'emotes-raw': null,
    'badge-info-raw': null,
    'badges-raw': 'broadcaster/1,premium/1',
    username: 'xxxxxxxxxxxx',
    'message-type': 'chat'
  } */