/*! yscountdown v1.0.0 | Yusuf SEZER <yusufsezer@mail.com> | MIT License | https://github.com/yusufsefasezer/ysCountDown.js */
!function(t,o){"function"==typeof define&&define.amd?define([],function(){return o(t)}):"object"==typeof exports?module.exports=o(t):t.ysCountDown=o(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";return function(t,o){var n={},r=null,a=null,e=null,l=null,i=!1;n.init=function(t,o){if(!("addEventListener"in u))throw"ysCountDown: This browser does not support the required JavaScript methods.";if(n.destroy(),r="string"==typeof t?new Date(t):t,!((e=r)instanceof Date)||isNaN(e))throw new TypeError("ysCountDown: Please enter a valid date.");var e;if("function"!=typeof o)throw new TypeError("ysCountDown: Please enter a callback function.");a=o,s()},n.destroy=function(){a=r=null,f(),l=null,i=!1};var s=function(){e||(e=setInterval(function(){var t,o;t=new Date,(o=Math.ceil((r.getTime()-t.getTime())/1e3))<=0&&(i=!0,f()),l={seconds:o%60,minutes:Math.floor(o/60)%60,hours:Math.floor(o/60/60)%24,days:Math.floor(o/60/60/24)%7,daysToWeek:Math.floor(o/60/60/24)%7,daysToMonth:Math.floor(o/60/60/24%30.4368),weeks:Math.floor(o/60/60/24/7),weeksToMonth:Math.floor(o/60/60/24/7)%4,months:Math.floor(o/60/60/24/30.4368),monthsToYear:Math.floor(o/60/60/24/30.4368)%12,years:Math.abs(r.getFullYear()-t.getFullYear()),totalDays:Math.floor(o/60/60/24),totalHours:Math.floor(o/60/60),totalMinutes:Math.floor(o/60),totalSeconds:o},a(l,i)},100))},f=function(){e&&(clearInterval(e),e=null)};return n.init(t,o),n}});

var daysElement = document.querySelector("#days");
    var hoursElement = document.querySelector("#hours");
    var minutesElement = document.querySelector("#minutes");
    var secondsElement = document.querySelector("#seconds");
    var containerElement = document.querySelector(".main");
    var endDate = "2021/09/21";

    var myCountDown = new ysCountDown(endDate, function (remaining, finished) {

      if (finished) {
        containerElement.textContent = "Expired";
      }
      
      daysElement.textContent = remaining.totalDays;
      hoursElement.textContent = remaining.hours;
      minutesElement.textContent = remaining.minutes;
      secondsElement.textContent = remaining.seconds;

    });

    /* Side Nav */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    /* Back To Top */
    mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    } /*! yscountdown v1.0.0 | Yusuf SEZER <yusufsezer@mail.com> | MIT License | https://github.com/yusufsefasezer/ysCountDown.js */
!function(t,o){"function"==typeof define&&define.amd?define([],function(){return o(t)}):"object"==typeof exports?module.exports=o(t):t.ysCountDown=o(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";return function(t,o){var n={},r=null,a=null,e=null,l=null,i=!1;n.init=function(t,o){if(!("addEventListener"in u))throw"ysCountDown: This browser does not support the required JavaScript methods.";if(n.destroy(),r="string"==typeof t?new Date(t):t,!((e=r)instanceof Date)||isNaN(e))throw new TypeError("ysCountDown: Please enter a valid date.");var e;if("function"!=typeof o)throw new TypeError("ysCountDown: Please enter a callback function.");a=o,s()},n.destroy=function(){a=r=null,f(),l=null,i=!1};var s=function(){e||(e=setInterval(function(){var t,o;t=new Date,(o=Math.ceil((r.getTime()-t.getTime())/1e3))<=0&&(i=!0,f()),l={seconds:o%60,minutes:Math.floor(o/60)%60,hours:Math.floor(o/60/60)%24,days:Math.floor(o/60/60/24)%7,daysToWeek:Math.floor(o/60/60/24)%7,daysToMonth:Math.floor(o/60/60/24%30.4368),weeks:Math.floor(o/60/60/24/7),weeksToMonth:Math.floor(o/60/60/24/7)%4,months:Math.floor(o/60/60/24/30.4368),monthsToYear:Math.floor(o/60/60/24/30.4368)%12,years:Math.abs(r.getFullYear()-t.getFullYear()),totalDays:Math.floor(o/60/60/24),totalHours:Math.floor(o/60/60),totalMinutes:Math.floor(o/60),totalSeconds:o},a(l,i)},100))},f=function(){e&&(clearInterval(e),e=null)};return n.init(t,o),n}});

var daysElement = document.querySelector("#days");
    var hoursElement = document.querySelector("#hours");
    var minutesElement = document.querySelector("#minutes");
    var secondsElement = document.querySelector("#seconds");
    var containerElement = document.querySelector(".main");
    var endDate = "2021/09/21";

    var myCountDown = new ysCountDown(endDate, function (remaining, finished) {

      if (finished) {
        containerElement.textContent = "Expired";
      }
      
      daysElement.textContent = remaining.totalDays;
      hoursElement.textContent = remaining.hours;
      minutesElement.textContent = remaining.minutes;
      secondsElement.textContent = remaining.seconds;

    });

    /* Side Nav */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    /* Back To Top */
    mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    } 
