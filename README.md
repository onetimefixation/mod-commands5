# Special MOD Commands
These commands are developed for a targetted Twitch site.  It is meant to assist in moderating CHAT, as well as making CHAT more engaging to the visitors.
Anyone using this code assumes full responsibility for its behavior and outcomes.

1) !startpred n

        This command starts a predition countdown timer.  When a MOD enters this command, an immediate message is displayed in chat advising that a prediction
        has started and the numner of minutes left.
        Once the timer reaches 1 minute a message is displayed each 15 seconds until the timer reaches zero (0), at which time and ending message is displayed

        The !startpred command must be followed by a valid integer between 1 and 15 to indicate the time.  Any other entries are ignored and a timer is not
        started.

        Restrictions
        ------------
        This command is only useable by MODs.  The command will be ignored if entered by anyone else. (see KNOWN ISSUES below)


## Getting Started

Follow the instructions below to install these additional commands to your Twitch channel

### Prerequisites

Things you need 

```
An installion of NodeJS
A BOT user with MOD capabilities
```

### Installing

1) create new folder on the computer and use the terminal command program to navigate to that folder
        * to get to the command prompt by using <the windows key> along with the <letter "R">
          then type in "cmd"


2) Install NodeJS
        first verify the existence of NodeJS by typing the terminal command
            C:\<directoryname> npm -v or 
            C:\<directoryname> node -v
        if the response is a one line version # then SKIP TO STEP 3
            eg: if response looks like
                6.14.13 or
                v14.7.0 
                then the modules are installed.  Therefore skip to STEP 3

            
        Otherwise install NodeJS
           Use the following link and follow the instructions to install NodeJS
            https://nodejs.org/en/download/
             (the best option, as of this update, is to select the "LTS version" and install the "Windows Installer (.msi)" 64-bit version of the software)
     

4) Set up a secure environment to host sensitve settings
        from the terminal prompt type the folloing command
            
            C:\<directoryname>  npm install tmi.js dotenv

                **** there is a possibility of an error on the package.json file
                **** ignore that for the time being
                **** the last line of the output should say "found 0 vulnarabilities" 


5) Get oAuth code from https://twitchapps.com/tmi/
        (save the code in a safe place)
                and then
       create a .env file on the directory


       add the oAuth code to the .env file in the directory.  The three entries in the this file should look something like this:

                                CHANNEL_NAME = <yourChannelName>
                                OAUTH_TOKEN  = <the oAuth code you just received>
                                BOT_USERNAME = <theBotUserName>


6) Link everythnig together.  Issue the following command:

    C:\<directoryname> npm install dotenv


node app.js



## Built With

* Java Script app.js (contains site logic)
* NodeJS (js engine)
* TMI.js (Twitch API)

## Known Issues

The following are known defects.  Some will be corrected and others will remain as is.

1) Add the capability for BROADCASTERS to use this command - The current issue is that a BROADCASTER has a MOD flag of <FALSE> despite being known to
   Twich as a MOD in addition to a BROADCASTER

2) Currently there is no mechanism to stop the timer

3) app.js should be restructured to allow for futere commands
