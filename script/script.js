var root_date = new Date();

var date_month = document.getElementById("exact-date");
date_month.innerHTML = root_date.getDate();

var month = document.getElementById("month");
var num_month = root_date.getMonth();
switch (num_month) {
    case 0: num_month = "Jan";
    break;
    case 1: num_month = "Feb";
    break;
    case 2: num_month = "Mar";
    break;
    case 3: num_month = "Apr";
    break;
    case 4: num_month = "May";
    break;
    case 5: num_month = "Jun";
    break;
    case 6: num_month = "Jul";
    break;
    case 7: num_month = "Aug";
    break;
    case 8: num_month = "Sep";
    break;
    case 9: num_month = "Oct";
    break;
    case 10: num_month = "Nov";
    break;
    case 11: num_month = "Dec";
    break;
}
month.innerHTML = num_month;

var year = document.getElementById("year");
year.innerHTML = root_date.getFullYear();

var hours = document.getElementById("hours");
function update_hours (flag) {
    let date = new Date();
    let fix = date.getHours();
    if (fix < 12) {
        flag = "AM";
    }
    else {
        flag = "PM";
    }
    if (fix > 12) {
        fix -= 12;
    }
    if (fix == 0) {
        fix = 12;
    }
    if (fix < 10) {
        fix = `0${fix}`;
    }
    hours.innerHTML = `${fix}`;
}
setInterval(update_hours);


var minutes = document.getElementById("minutes");
function update_minutes() {
    let date = new Date();
    if (date.getMinutes() < 10) {
        minutes.innerHTML = `0${date.getMinutes()}`;
    }
    else {
        minutes.innerHTML = `${date.getMinutes()}`;
    }
}
setInterval(update_minutes);

var seconds = document.getElementById("seconds");
function update_seconds () {
    let date = new Date();
    if (date.getSeconds() < 10) {
        seconds.innerHTML = `0${date.getSeconds()}`;
    }
    else {
        seconds.innerHTML = `${date.getSeconds()}`;
    }
}
setInterval(update_seconds);

var day = document.getElementById("day");
var num_day = root_date.getDay();
switch (num_day) {
    case 0: num_day = "Sunday";
    break;
    case 1: num_day = "Monday";
    break;
    case 2: num_day = "Tuesday";
    break;
    case 3: num_day = "Wednesday";
    break;
    case 4: num_day = "Thursday";
    break;
    case 5: num_day = "Friday";
    break;
    case 6: num_day = "Saturday";
    break;
}
day.innerHTML = num_day;

function set_live_percent() {
    var battery = document.getElementById("battery-level");
    function set_percent (percent) {
    battery.innerHTML = Math.floor(percent * 100);
    }
    navigator.getBattery().then(b_level => set_percent(b_level.level));
}
setInterval(set_live_percent);

var html = document.getElementById("root");
html.style.height = `${visualViewport.height}px`;

var body = document.getElementById("body");
body.style.marginTop = `${(visualViewport.height - 505)/2}px`;
body.style.display = "inline-block";
body.style.width = "550px";
body.style.marginLeft = `${(visualViewport.width - 510)/2}px`;

var shift = document.getElementById("shift");
var img = document.getElementById("night-day");
function shift_mode () {
    if (img.src == "http://localhost/shift.png") {
        img.src = "http://localhost/shift-night.png";
        body.style.backgroundColor = "black";
        hours.style.color = "white";
        minutes.style.color = "white";
    }
    else {
        img.src = "http://localhost/shift.png";
        body.style.backgroundColor = "white";
        hours.style.color = "black";
        minutes.style.color = "black";
    }

}
shift.addEventListener("click", shift_mode);