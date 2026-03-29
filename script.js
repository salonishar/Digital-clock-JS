function updateClock(){
    let now = new Date();
    let abbreviation = "am";

    let hours = now.getHours();
    if(hours >= 12) abbreviation = "pm";
    if(hours > 12)hours -= 12;

    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hours<10) hours = "0"+hours;
    if(minutes<10)  minutes= "0"+minutes;    
    if(seconds<10)  seconds= "0"+seconds;

    let change = document.querySelector("#time");

    change.innerText = hours + ":" + minutes + ":" + seconds +  " " + abbreviation;

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = document.querySelector("#date");
    let day = now.getDate();
    if(day<10) day = "0" + day;

    date.innerText = day + "/" + months[(now.getMonth()+1)] + "/" + now.getFullYear();
}

setInterval(updateClock , 1000);
