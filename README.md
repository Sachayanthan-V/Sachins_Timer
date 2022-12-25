# Sachins_Timer
This is the website is for timer functionalities with Three functions like, start , stop/pause, reset. It contains three files named, 

    1) index.html [ root file ] you can use it in local as well as hosted link []. Its cares html dom structure.
    2) index.css is maintaining styling of root file.
    3) index.js is maintaing Timer functionalities and animations.
        The .css and .js files are linked to html file relatively in its same folder.


##Features Included : 

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
    * Compactible for most browsers
    * Mostly used relative units for responsible design
    * Minimum screen size needs to 400 pixels [ It means, it will work 
              fine about and equal to 400 pixels screens ]
    * Visibilities of timers are simple and ease to understand
    * Little animations added like hovering effects on buttons
              website name header.
    * Clocks for each different notations like, seconds timer, 
              hour timer, minutes, days and year timers are 
              handled seperately as well individually
              for some speacific functionalities
    * Animation effects will appear for all timers whenever any 
              changes occurs to that particular timers. This logic
              is maintained through JS [ javascript file ] named index.js
    * Mostly elements and container using flex display property.
    * Added additional dummy spaceprovider division named [madeforspace]
              to add space additionally on visibility to seems steps 
              like feature of buttons.
              
              
  =====================================================================

            -------------------------------------------------
            |            Development Details :              |
            -------------------------------------------------
            |   Author : Sachayanthan V [ created By ]      |
            |   Email : sachayanthan.v.1999@gmail.com       |
            |   Date Modified : 24-Dec-2022                 |
            -------------------------------------------------

=====================================================================




Thank you all. Contact us incase any query.
