var root_date = new Date();

var date_month = document.getElementById("date-month");
var root_year = document.getElementById("root-year");
var root_left_margin = (visualViewport.width - 600.11)/2;
var root_top_margin = (visualViewport.height - 585)/2;
var hours = document.getElementById("hours");
var root_shift = document.getElementById("root-shift");
var minutes = document.getElementById("minutes");
var others = document.getElementById("others");

minutes.style.left = `${root_left_margin}px`;
hours.style.left = `${root_left_margin}px`;
date_month.style.left = `${root_left_margin}px`;
root_year.style.left =  `${root_left_margin + 200.11}px`;
root_shift.style.left = `${root_left_margin + 200.11}px`;
others.style.left = `${root_left_margin + 200.11}px`;

date_month.style.top = `${root_top_margin + 8}px`;
root_year.style.top = `${root_top_margin + 8}px`;
hours.style.top = `${root_top_margin + 208}px`;
root_shift.style.top = `${root_top_margin + 208}px`;
minutes.style.top = `${root_top_margin + 408}px`;
others.style.top = `${root_top_margin + 408}px`;

var exact_date = document.getElementById("exact-date");
exact_date.innerHTML = root_date.getDate();

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

year.innerHTML = root_date.getFullYear();

var am_pm = document.getElementById("am-pm");
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
    am_pm.innerHTML = flag;
}
setInterval(update_hours);

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

var battery = document.getElementById("battery-level");
function set_live_percent() {
    function set_percent (percent) {
    battery.innerHTML = Math.floor(percent * 100);
    }
    navigator.getBattery().then(b_level => set_percent(b_level.level));
}
setInterval(set_live_percent);

var battery_icon = document.getElementById("battery-icon");
function set_correct_position () {
    if (`${battery.innerHTML}`.length == 3){
        battery_icon.style.left = "55px";
    }
}
setInterval(set_correct_position);

var body = document.getElementById("body");
var img = document.getElementById("night-day");
function shift_mode () {
    if (img.src == "https://mou786aha.github.io/images/shift.png") {
        img.src = "https://mou786aha.github.io/images/shift-night.png";
        body.style.backgroundColor = "black";
        hours.style.color = "white";
        minutes.style.color = "white";
    }
    else {
        img.src = "https://mou786aha.github.io/images/shift.png";
        body.style.backgroundColor = "white";
        hours.style.color = "black";
        minutes.style.color = "black";
    }

}
root_shift.addEventListener("click", shift_mode);