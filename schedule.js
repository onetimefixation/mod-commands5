// VERSION 1.0


export function schedule(client, tags, channel, predictionTime){
/*  !when / !schedule

 display the following

 Next Stream Starts in <hh:mm> <-- countdown
 ddd - mmm - nn - at 4:30 pm Eastern
 Regular streams (except holidays)
 Mon - Thurs 4:30 - 7:30 Eastern 
 
 */

 
// get today's date
var now = new Date().getTime();
var mm = new Date().getMonth();
var day = new Date().getDay();
var hour = new Date().getHours();
var minutes = new Date().getMinutes(); 
var seconds = new Date().getSeconds(); 
var date = new Date().getDate(); 
var nextStreamDay = 0;

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
  ]

const monthName = months[mm];


function  currentStreamStarted (countDownDate){
        // Set the date we're counting down to
        var countDownDate = new Date(countDownDate).getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        if (distance < 0 ){
            return (true);
         }
         else {
             return (false);
         }


}

switch (day){
case 0:{ 
    // Sun

   
    //nextStreamDay = 0;
    var daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();






    //first format the argument that is sent to calculate if the stream has started
    const countDownDateArg = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
    //set the appropriate date for the next stream
    if (!currentStreamStarted(countDownDateArg)){
        daysTillNextStream = 0; //Today
        // maybe chance dayName
    }
    else {
        daysTillNextStream = 1; //Tomorrow

        // maybe chance dayName
    }

        const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;

    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 1:{
    // Mon
    //nextStreamDay = 2;
    var daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();

    //first format the argument that is sent to calculate if the stream has started
    const countDownDateArg = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
    //set the appropriate date for the next stream
    if (!currentStreamStarted(countDownDateArg)){
        daysTillNextStream = 1; //Today
    }
    else {
        daysTillNextStream = 1; //Tomorrow
    }
    
    //start off with 1 and if it is after midnight, change daysTillNextStream to 0 and 






    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   console.log(nextStreamFormatted);
   console.log(nextStreamFormatted);

    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 2:{
    // Tues
    //nextStreamDay = 3;
    var daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();

    //first format the argument that is sent to calculate if the stream has started
    const countDownDateArg = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
    //set the appropriate date for the next stream
    if (!currentStreamStarted(countDownDateArg)){
        daysTillNextStream = 1; //Today
    }
    else {
        daysTillNextStream = 1; //Tomorrow
    }

    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 3:{
    // Wed
    //nextStreamDay = 4;
    var daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();

    //first format the argument that is sent to calculate if the stream has started
    const countDownDateArg = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
    //set the appropriate date for the next stream
    if (!currentStreamStarted(countDownDateArg)){
        daysTillNextStream = 1; //Today
    }
    else {
        daysTillNextStream = 2; //Tomorrow
    }



    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 4:{
    // Thurs
    //nextStreamDay = 1;
    var daysTillNextStream = 4;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();

    //first format the argument that is sent to calculate if the stream has started
    const countDownDateArg = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
    //set the appropriate date for the next stream
    if (!currentStreamStarted(countDownDateArg)){
        daysTillNextStream = 1; //Today
    }
    else {
        daysTillNextStream = 4; //Tomorrow
    }


    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);
    break;
}
case 5:{
    // Fri
    //nextStreamDay = 1;
    var daysTillNextStream = 3;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);
    break;
}
case 6:{
    // Sat
    
    //nextStreamDay = 1;
    var daysTillNextStream = 2;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 16:30:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
default:
    console.log("Not a valid Day")
}


/* For the time being we are not displaying the date of the next stream 
until the logic is worked out */


function showTimeDiff(nextStream, dayNameParam){
        // Set the date we're counting down to
        var countDownDate = new Date(nextStream).getTime();
        const herokuTimeOffset = 4;
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result        
        const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 4:30 PM EST`;
        client.say(channel, "------------------------------------");
        client.say(channel, "NEXT STREAM TAKES PLACE IN:")
        client.say(channel, `${days} Day(s) ${hours + herokuTimeOffset} Hours ${minutes} Mins ${seconds} Secs`);
        // client.say(channel, `${days} Day(s) ${hours + herokuTimeOffset} Hours ${minutes} Mins ${seconds} Secs`);
        // client.say(channel, nextStreamDay);
        client.say(channel, "NORMAL STREAMING HOURS ARE:");
        client.say(channel, "Mon-Thurs 4:30 - 7:30 PM EST - except holidays");
        client.say(channel, "------------------------------------"); 

        //const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 4 PM EST`;
        console.log("------------------------------------")
        console.log("Next Stream will take place in:")
        console.log(`${days} Day(s) ${hours + herokuTimeOffset} Hour(s) ${minutes} Mins ${seconds} Secs`);
        console.log(nextStreamDay);
        console.log("NORMAL STREAMING HOURS ARE:");
        console.log("Mon-Thurs 4:30 - 7:30 PM EST - except holidays")
        console.log("------------------------------------") 














        // If the count down is finished, write some text
        // if (distance < 0) {
        //   clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
        //}
        //}, 1000);


}

/*
var myfunc = setInterval(function() {
    // code goes here
    }, 1000)




getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.
*/
    //const nextTime = nextDate.getDate() + 2)

    //var nextTime = new Date(new Date().getTime()+(2*24*60*60*1000));

    //console.log(nextTime);




//const hourDiff = (hour + 24  * 1);

//console.log(hourDiff);
//console.log(hour);
    
   // const nextStreamFormatted = `${dayName} ${date} ${mm} ${hour}:${minutes}:${seconds}`;


}