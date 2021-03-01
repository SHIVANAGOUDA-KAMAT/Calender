const dt = new Date();
let moveMonth =function (input) {
    if (input === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (input === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate ();
}
let renderDate = e => {

const endDate = new Date(
    dt.getFullYear(),       // for getting no.of days in month
    dt.getMonth()+1,
    0
).getDate();

const prevMonEndDate = new Date(
    dt.getFullYear(),       // for getting no.of days in month
    dt.getMonth(),
    0
).getDate();

const firstDate = new Date(
    dt.getFullYear(),       // for getting first day date in month
    dt.getMonth(),
    1
).getDay();
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

document.getElementById("currentMonth").innerHTML = months[dt.getMonth()];
document.getElementById("date_str").innerHTML = dt.toDateString();

                //Writes dates of calender          ****mistakenly printing resilt in each loop******
//const dates = document.getElementsByClassName("main")[0];
let cells = [];
for (let x=(firstDate-1); x>=0; x--) {

    cells += "<div class='prevDates'>" + (prevMonEndDate - x) + "</div>";
}

for (let i=1; i<= endDate; i++) {

    cells += "<div>" + i + "</div>";
    
}

document.getElementsByClassName("main")[0].innerHTML = cells;

}
