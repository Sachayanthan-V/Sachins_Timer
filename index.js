/*

This script is handling timer events with three major functions
of start stop and reset activity , It is using IIFE method for 
safer side of code, no one should use in console to manipulate.
If In case any issue please contact us through email.


=====================================================================

            -------------------------------------------------
            |            Development Details :              |
            -------------------------------------------------
            |   Author : Sachayanthan V [ created By ]      |
            |   Email : sachayanthan.v.1999@gmail.com       |
            |   Date Modified : 24-Dec-2022                 |
            -------------------------------------------------

=====================================================================


  Features Included : 

    * Animations handling for every timer events whenever its got changing.
    * Timing events handled seperately to setup count and setdown count.
        eg : daysStepup() This is setup one point of the day timer.
        eg : hoursOverToReset() over to reset function used to reest the 
                timer events to zero, if it gets overloaded of its value.
                ex : minute timer get more than 59 its overloaded.
    * Start timer and stop and reset timer functioned added into it.
            * if start button pressed. Timer will start.
            * if stop button pressed. Timer will stop not reset.
            * if reset button pressed.
                if timer is running, it will stop timer and reset
                if not, just reset the timers.
    * listeners events added for three buttons only.

*/


/*
IIFE method implemention not setting to any variables for 
security and this function is not returning anything
*/

( function (){

    // Assigning a buttons to a variable 
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");

    // Assigning a timer divisions to a variable
    const secondsTimer = document.getElementById('secondTimer');
    const minutesTimer = document.getElementById('minuteTimer');
    const hoursTimer   = document.getElementById('hourTimer');
    const daysTimer    = document.getElementById('dayTimer');
    const yearsTimer  = document.getElementById('monthTimer');

    //  initializing a variables to handle Different time hands
    var secondsHand = 0;
    var minutesHand = 0;
    var hoursHand   = 0;
    var daysHand    = 0;
    var yearsHand   = 0;

    /*
    This function is to Handle Animations whenever any change occurs
    in any timer. It will scalein and scale out the elements which 
    currently changing.

    In Any change we are calling this animation like :
                            (sec, minute, hour, day,   year );
        ex : handleAnimation(true, false, false, false, false);
        Which parameter is true, that particular timer will get 
        animation, ex :  minute timer will get animate each min once.

    */
    function handleAnimation(sec, min, hr, day, yr){
        
        // checking seconds timer have to animate 
        if (sec) {
            setTimeout( ()=>{
                secondsTimer.style.transform = "scale(100%)";
                secondsTimer.style.transition = "all 0.2s ease-in-out";
            }, 500 );
            secondsTimer.style.transform = "scale(120%)";
            secondsTimer.style.transition = "all 0.3s ease-in-out";
        }

        // checking minutes timer have to animate 
        if (min) {
            setTimeout( ()=>{
                minutesTimer.style.transform = "scale(100%)";
                minutesTimer.style.transition = "all 1s ease-in-out";
            }, 3000 );
            minutesTimer.style.transform = "scale(120%)";
            minutesTimer.style.transition = "all 1s ease-in-out";
        }

        // checking hour timer have to animate 
        if (hr) {
            setTimeout( ()=>{
                hoursTimer.style.transform = "scale(100%)";
                hoursTimer.style.transition = "all 1s ease-in-out";
            }, 3000 );
            hoursTimer.style.transform = "scale(120%)";
            hoursTimer.style.transition = "all 1s ease-in-out";
        }

        // checking days timer have to animate 
        if (day) {
            setTimeout( ()=>{
                daysTimer.style.transform = "scale(100%)";
                daysTimer.style.transition = "all 1s ease-in-out";
            }, 3000 );
            daysTimer.style.transform = "scale(120%)";
            daysTimer.style.transition = "all 1s ease-in-out";
        }

        // checking year timer have to animate 
        if (yr) {
            setTimeout( ()=>{
                yearsTimer.style.transform = "scale(100%)";
                yearsTimer.style.transition = "all 1s ease-in-out";
            }, 3000 );
            yearsTimer.style.transform = "scale(120%)";
            yearsTimer.style.transition = "all 1s ease-in-out";
        }

    }

    // Reset handling functions are below

    // This function is to reset the value if Days hand exceeds its limit
    function daysOverToReset   () {
        console.log("Days Over to Reset function called!...");
        daysHand = 0;
        return;
    }

    // This function is to reset the value if Hour hand exceeds its limit
    function hoursOverToReset  () {
        console.log("Hours Over to Reset function called!...");
        hoursHand = 0;
        return;
    }

    // This function is to reset the value if Minute hand exceeds its limit
    function minutesOverToReset() {
        console.log(" Minutes Over to Reset function called!...");
        minutesHand = 0;
        return;
    }

    // This function is to reset the value if Seconds hand exceeds its limit
    function secondsOverToReset() {
        console.log("Seconds Over to Reset function called!...");
        secondsHand = 0;
        return;
    }

    // Stepup handling functions are below

    // This function is to reset the value if Month hand exceeds its limit
    function yearStepup () {
        console.log("Months Over to Reset function called!...");
        var overToHTML = '';
        daysHand += 1;
        if (daysHand>9){
            overToHTML = ''+daysHand;
        }
        else{
            overToHTML = '0'+daysHand;
        }
        daysTimer.innerHTML = overToHTML;
        handleAnimation(false, false, false, false, true);
        return;
    }

    // This function is to reset the value if Days hand exceeds its limit
    function daysStepup   () {
        console.log("Days Over to Reset function called!...");
        var overToHTML = '';
        daysHand += 1;
        if (daysHand==365) {
            daysOverToReset();
            yearStepup();
        }
        if (daysHand>9){
            overToHTML = ''+daysHand;
        }
        else{
            overToHTML = '0'+daysHand;
        }
        daysTimer.innerHTML = overToHTML;
        handleAnimation(false, false, false, true, false);
        return;
    }

    // This function is to reset the value if Hour hand exceeds its limit
    function hoursStepup  () {
        console.log("Hours Over to Reset function called!...");
        var overToHTML = '';
        hoursHand += 1;
        if (hoursHand==24) {
            hoursOverToReset();
            daysStepup();
        }
        if (hoursHand>9){
            overToHTML = ''+hoursHand;
        }
        else{
            overToHTML = '0'+hoursHand;
        }
        hoursTimer.innerHTML = overToHTML;
        handleAnimation(false, false, true, false, false);
        return;
    }

    // This function is to reset the value if Minute hand exceeds its limit
    function minutesStepup() {
        console.log(" Minutes Over to Reset function called!...");
        var overToHTML = '';
        minutesHand += 1;
        if (minutesHand==60) {
            minutesOverToReset();
            hoursStepup();
        }
        if (minutesHand>9){
            overToHTML = ''+minutesHand;
        }
        else{
            overToHTML = '0'+minutesHand;
        }
        minutesTimer.innerHTML = overToHTML;
        handleAnimation(false, true, false, false, false);
        return;
    }

    // This function is to reset the value if Seconds hand exceeds its limit
    function secondsStepup() {
        console.log("Seconds Over to Reset function called!...");

        var overToHTML = '';
        secondsHand += 1;
        if (secondsHand==60) {
            secondsOverToReset();
            minutesStepup();
        }
        if (secondsHand>9){
            overToHTML = ''+secondsHand;
        }
        else{
            overToHTML = '0'+secondsHand;
        }
        secondsTimer.innerHTML = overToHTML;
        handleAnimation(true, false, false, false, false);
        return;
    }

    /*
    funtion will start the timer, and update each second
    until not pressing stop/reset button if stop button pressed. The timer will stop
    */
    function startTimer(){
        timerID = setInterval( ()=>{
            // calling update a time each second
            secondsStepup();

            // stop the timer when stop button pressed
            stopButton.addEventListener('click', ()=>{
                clearInterval(timerID);
            });

            // stop the timer when reset button pressed
            // reset handling is taking care seperately to reset all values to zero [ look below functions ]
            resetButton.addEventListener('click', ()=>{
                clearInterval(timerID);
            });

        }, 1000 );
    }


    // function to reset all values to Zero [0]:
    function resetAll() {
        //setting all timer hand variables to 0
        secondsHand = 0;
        minutesHand = 0;
        hoursHand   = 0;
        daysHand    = 0;
        yearsHand  = 0;
        // setting html timers to zero
        secondsTimer.innerHTML = '00';
        minutesTimer.innerHTML = '00';
        hoursTimer.innerHTML   = '00';
        daysTimer.innerHTML    = '00';
        yearsTimer.innerHTML  = '00';
    }


    // listener for start and reset activity
    startButton.addEventListener('click', ()=>{startTimer()});
    resetButton.addEventListener('click', ()=>{resetAll()});


})();

/* End of File */