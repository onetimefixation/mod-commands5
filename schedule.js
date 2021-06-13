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
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thusday',
    'Friday',
    'Saturday'
  ]

const monthName = months[mm];

// parse out the mm and day

switch (day){
case 0:{ 
    // Sun
    nextStreamDay = 1;
    const daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 1:{
    // Mon
    nextStreamDay = 2;
    const daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 2:{
    // Tues
    nextStreamDay = 3;
    const daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 3:{
    // Wed
    nextStreamDay = 4;
    const daysTillNextStream = 1;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
case 4:{
    // Thurs
    nextStreamDay = 1;
    const daysTillNextStream = 4;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);
    break;
}
case 5:{
    // Fri
    nextStreamDay = 1;
    const daysTillNextStream = 3;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);
    break;
}
case 6:{
    // Sat
    
    nextStreamDay = 1;
    const daysTillNextStream = 2;
    const dayName = days[nextStreamDay];
    const nextDate = new Date();
    const nextStreamFormatted = `${monthName} ${date + daysTillNextStream}, 2021 17:00:00`;
   
    showTimeDiff(nextStreamFormatted, dayName);

    break;
}
default:
    console.log("Not a valid Day")
}


function showTimeDiff(nextStream, dayNameParam){
        // Set the date we're counting down to
        var countDownDate = new Date(nextStream).getTime();

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
        const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 17:00:00 Eastern`;
        
        client.say(channel, "------------------------------------");
        client.say(channel, "Rinoa's Next Stream will take place in:")
        client.say(channel, `${days} Day ${hours} Hours ${minutes} Mins ${seconds} Secs`);
        client.say(channel, nextStreamDay);
        client.say(channel, "Normal Streaming Time is:");
        client.say(channel, "Mon - Thurs 17:00 - 19:00 Eastern - except holidays");
        client.say(channel, "------------------------------------");

/*         const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 17:00:00 Eastern`;
        console.log("------------------------------------")
        console.log("Rinoa's Next Stream will take place in:")
        console.log(`${days} Day ${hours} Hours ${minutes} Mins ${seconds} Secs`);
        console.log(nextStreamDay);
        console.log("Normal Streaming Time is:");
        console.log("Mon - Thurs 17:00 - 19:00 Eastern - except holidays")
        console.log("------------------------------------") */














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