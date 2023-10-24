// Nguyen, Long Quan - iqm026 - 11314875

// Referencing: https://www.w3schools.com/howto/howto_js_countdown.asp

// This function return current Saskatchewan time
function getCurrentTimeInSaskatchewan() {
    // Saskatchewan's standard offset is UTC-6
    const saskatchewanTimezoneOffset = -6 * 60;
    // Check if it's currently daylight saving time (CDT)
    const now = new Date();
    const isDaylightSavingTime = now.getTimezoneOffset() === saskatchewanTimezoneOffset - 60;
    // Calculate the offset for daylight saving time
    const daylightSavingOffset = isDaylightSavingTime ? -60 : 0;  
    // Calculate the total offset
    const totalOffset = saskatchewanTimezoneOffset + daylightSavingOffset;
    // Get the current time in Saskatchewan
    const saskatchewanTime = new Date(now.getTime() + totalOffset * 60 * 1000);
  
    return saskatchewanTime;
  }

// This function do the countdown and display message when countdown is reach
function countdown() {
    const now = getCurrentTimeInSaskatchewan();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the content of each div
    document.getElementById("days").innerHTML = days + " D";
    document.getElementById("hours").innerHTML = hours + " H";
    document.getElementById("minutes").innerHTML = minutes + " M";
    document.getElementById("seconds").innerHTML = seconds + " S";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = 0 + " D";
        document.getElementById("hours").innerHTML = 0 + " H";
        document.getElementById("minutes").innerHTML = 0 + " M";
        document.getElementById("seconds").innerHTML = 0 + " S";

        document.getElementById("message-timeout").innerHTML = "AHH S***, HERE WE GO AGAIN!!";
    }
}

// Get the finals day (yeah i meant final final date)
const countDownDate = new Date("2023-12-09T23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(countdown, 1000);
