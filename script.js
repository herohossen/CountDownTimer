// Set the date we're counting down to
let countDownDate = new Date("June 30, 2024 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = `${days}d ${("0" + hours).slice(-2)}h ${("0" + minutes).slice(-2)}m ${("0" + seconds).slice(-2)}s left`;

    // Update the circular countdown
    let totalSeconds = (new Date("June 30, 2024 00:00:00").getTime() - new Date("January 1, 2024 00:00:00").getTime()) / 1000;
    let remainingSeconds = distance / 1000;
    let percentage = 1 - (remainingSeconds / totalSeconds);
    let circle = document.querySelector('.countdown .progress');
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference * percentage} ${circumference}`;
    
    // Update the number inside the circle
    document.getElementById("countdown-number").innerHTML = days;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        document.getElementById("countdown-number").innerHTML = "0";
        circle.style.strokeDasharray = `0 ${circumference}`;
    }
}, 1000);
