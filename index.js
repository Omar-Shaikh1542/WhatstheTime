const hour = document.getElementById("clock-hour");
const minute = document.getElementById("clock-minute");
const second = document.getElementById("clock-second");
const deg = 6;


setInterval(() => {
    let day = new Date();
    let hourrotate = day.getHours() * 30;
    let minuterotate = day.getMinutes() * deg;
    let secondrotate = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(hourrotate) + (minuterotate/12)}deg)`;
    minute.style.transform = `rotateZ(${minuterotate}deg)`;
    second.style.transform = `rotateZ(${secondrotate}deg)`;


})

