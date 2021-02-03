const hour = document.getElementById("clock-hour");
const minute = document.getElementById("clock-minute");
const second = document.getElementById("clock-second");
const deg = 6;
const aSwitch = document.getElementById("analog-switch");
const dSwitch = document.getElementById("digital-switch");

const analog = document.getElementById("analog-clock");
const digital = document.getElementById("digital-clock");

aSwitch.addEventListener("click", getAnalog);
dSwitch.addEventListener("click", getDigital);

dSwitch.style.backgroundColor = "red";
aSwitch.style.backgroundColor = "black";
function getAnalog(){
    analog.style.display = "flex";
    digital.style.display = "none";
    aSwitch.style.backgroundColor = "red";
    dSwitch.style.backgroundColor = "black";
}

function getDigital(){
    digital.style.display = "flex";
    analog.style.display = "none";
    dSwitch.style.backgroundColor = "red";
    aSwitch.style.backgroundColor = "black";
}
setInterval(() => {
    let day = new Date();
    let hourrotate = day.getHours() * 30;
    let minuterotate = day.getMinutes() * deg;
    let secondrotate = day.getSeconds() * deg;
    
    hour.style.transform = `rotateZ(${(hourrotate) + (minuterotate/12)}deg)`;
    minute.style.transform = `rotateZ(${minuterotate}deg)`;
    second.style.transform = `rotateZ(${secondrotate}deg)`;
    
    
    const dHour = document.getElementById("digital-hour");
    const dMinute = document.getElementById("digital-minute");
    const dSecond = document.getElementById("digital-second");
    const dDay = document.getElementById("digital-day");
    const dMonth = document.getElementById("digital-month");
    
    
    let date = new Date();
    let hourset = String(date.getHours()).padStart(2,'0');
    let minuteset = String(date.getMinutes()).padStart(2,'0');
    let secondset = String(date.getSeconds()).padStart(2,'0');
    let dayset = String(date.getDate()).padStart(2,'0');
    let monthset = [
        "Jan", 
        "Feb", 
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];

    let n = date.getMonth();   
    
    function preperndZero(number){
       var prepnumber = String(number).padStart(2,'0');
       return prepnumber;
    }
    dHour.innerHTML = hourset;
    dMinute.innerHTML = minuteset;
    dSecond.innerHTML = secondset;
    dDay.innerHTML = dayset;
    dMonth.innerHTML = monthset[n-1];
    
})
    
    
    