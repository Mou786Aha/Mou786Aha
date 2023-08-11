//Script goes here

//Block 1
var hours = document.getElementById("hours");
var section = document.getElementById("sub_parent");


//function to be run in SetInterval
function run_hours(flag){
    let date = new Date();
    var fix = date.getHours();

    //set value to flag for am_pm
    if (fix < 12) {
        flag = "AM";
    }
    else {
        flag = "PM";
    }

    //24 to 12 converter
    if (fix > 12) {
       fix -= 12; 
    }
    //update hours
    hours.innerHTML = fix;

    //Last span am_pm
    var am_pm = document.getElementById("am_pm");
    am_pm.innerHTML = flag;

    //fix 12am error/zero error
    if (date.getHours == 0) {
        hours.innerHTML = 12;
    }

    //Kick clock symbol when 2-digit hour
    var icon = document.getElementById("icon");
    if (fix > 9) {
        icon.style.display = "none";
    }
    else {
        icon.style.display = "initial";
    }
}

setInterval(run_hours);

//Block 2
var minutes = document.getElementById("minutes");

function run_minutes(){
    let date = new Date();
    if (date.getMinutes() < 10){
        minutes.innerHTML = `0${date.getMinutes()}`;
    }
    else {
        minutes.innerHTML = date.getMinutes();
    }
}

setInterval(run_minutes);

//Block 3
var seconds = document.getElementById("seconds");

function run_seconds(){
    let date = new Date();
    if (date.getSeconds() < 10){
        seconds.innerHTML = `0${date.getSeconds()}`;
    }
    else {
        seconds.innerHTML = date.getSeconds();
    }
}

setInterval(run_seconds);

/* Pre-Load adjust */
var colons = document.getElementsByClassName("colon");
colons[0].innerHTML = ":";
colons[1].innerHTML = ":";

/* Moving the Clock to Center Vertically and horizontally
   Adjusting on screen rotation*/
function repeat_adjust() {
    var body = document.getElementById("parent");
    body.style.display = "block";
    var height = visualViewport.height;
    var html = document.getElementById("html");
    html.style.height = `${height - 200}px`;
    body.style.marginTop = `${(height-69)/2}px`;
    body.style.width = "340px";
    body.style.marginLeft = `${(visualViewport.width - 340)/2}px`;
    body.style.overflow = "hide";
}
setInterval(repeat_adjust);
