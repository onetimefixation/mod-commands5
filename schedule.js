// VERSION 1.0


export function schedule(client, tags, channel, predictionTime){

     
    // get today's date
    var now = new Date().getTime();
    var mm = new Date().getMonth();
    var day = new Date().getDay();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes(); 
    var seconds = new Date().getSeconds(); 
    var date = new Date().getDate(); 
    var nextStreamDay = 0;
    
    // globals to hold and calculate the compare dates
    
    const currentDateAndTime = new Date();
    var nextStreamDateAndTime = new Date("06/15/2021 16:30:00");

    
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
    

    
    switch (day){
    case 0:{ 
        // Sun
    
    const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 1;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
            console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    case 1:{
        // Mon
        
        const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 1;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
            console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    case 2:{
        // Tues
        const dayName = days[nextStreamDay];
        
        if (currentDateAndTime <= nextStreamDateAndTime){
               var daysTillNextStream = 0; 
    
                nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
            console.log("today")
            }
            else {
               var daysTillNextStream = 1;
                const newDate = new Date()
                
                nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
                console.log(nextStreamDateAndTime)
                
            console.log("tomorrow");
            }
    
            const nextStreamFormatted = `${nextStreamDateAndTime}`;
    
            showTimeDiff(nextStreamFormatted);
        
            break;
    }
    case 3:{
        // Wed

        const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 1;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
            console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    case 4:{
        // Thurs

        const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 4;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
            console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    case 5:{
        // Fri

        const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 3;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
       //     console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    case 6:{
        // Sat
        
        const dayName = days[nextStreamDay];
        
    if (currentDateAndTime <= nextStreamDateAndTime){
           var daysTillNextStream = 0; 

            nextStreamDateAndTime = new Date().getDate() + daysTillNextStream;
        console.log("today")
        }
        else {
           var daysTillNextStream = 2;
            const newDate = new Date()
            
            nextStreamDateAndTime.setDate(newDate.getDate() + daysTillNextStream);
            console.log(nextStreamDateAndTime)
            
        console.log("tomorrow");
        }

        const nextStreamFormatted = `${nextStreamDateAndTime}`;

        showTimeDiff(nextStreamFormatted);
    
        break;
    }
    default:
        console.log("Not a valid Day")
    }
    
    
    
    function showTimeDiff(nextStream){
     
        var today = new Date();
        var theNextStream = new Date( nextStream );
        var res = Math.abs(theNextStream - today) / 1000;
        
        // get total days between two dates
        var days = Math.floor(res / 86400);
                       
        // get hours        
        var hours = Math.floor(res / 3600) % 24;        
        
        // get minutes
        var minutes = Math.floor(res / 60) % 60;

        // get seconds
        // var seconds = res % 60;

    
            // Output the result        
            //const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 4:30 PM EST`;
            client.say(channel, `${theNextStream}`)
            client.say(channel, "---------------------------");
            client.say(channel, "NEXT STREAM IN:")
            client.say(channel, `${days} Day(s) ${hours} Hours ${minutes} Mins`);
            client.say(channel, "NORMAL STREAMING HRS:");
            client.say(channel, "Mon-Thurs 4:30 - 7:30 PM EST");
            client.say(channel, " - except holidays");
            client.say(channel, "---------------------------"); 
    
            //const nextStreamDay = `${dayNameParam} ${monthName} ${date + 2}, 2021 4 PM EST`;
            console.log("------------------------------------")
            console.log("Next Stream will start in:")
            console.log(`${days} Day(s) ${hours} Hour(s) ${minutes} Mins ${seconds} Secs`);
            console.log(nextStreamDay);
            console.log("NORMAL STREAMING HOURS ARE:");
            console.log("Mon-Thurs 4:30 - 7:30 PM EST - except holidays")
            console.log("------------------------------------") 
    
    
    }
    
    }