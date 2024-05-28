// JavaScript to create multiple raindrop elements
const rainContainer = document.querySelector('.rain');
for (let i = 0; i < 100; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * 100 + 'vw';
    raindrop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';
    rainContainer.appendChild(raindrop);
}

// JavaScript to handle video display
function showVideo() {
    document.getElementById('video-container').style.display = 'block';
}

function closeVideo() {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');
    video.pause();
    videoContainer.style.display = 'none';
}

// JavaScript to play sound when clicking the download button
function playSound() {
    const sound = document.getElementById('downloadSound');
    sound.play();
}

// Function to stop the thunder after a specified duration
function stopThunder() {
    const thunder = document.getElementById('thunder');
    const thunderSound = document.getElementById('thunderSound');

    // Hide the thunder effect
    thunder.style.display = 'none';

    // Pause the thunder sound
    thunderSound.pause();
}

// Function to trigger thunder effect
function triggerThunder() {
    const thunder = document.getElementById('thunder');
    const thunderSound = document.getElementById('thunderSound');

    // Show the thunder effect
    thunder.style.display = 'block';

    // Play the thunder sound
    thunderSound.currentTime = 0;
    thunderSound.play();

    // Stop the thunder after 5 seconds
    setTimeout(stopThunder, 7000);
}

// Function to initiate random thunder effects
function randomThunder() {
    // Random interval between 5 to 15 seconds for thunder
    const randomTime = Math.random() * (15000 - 5000) + 5000;
    setTimeout(() => {
        triggerThunder();
        randomThunder();
    }, randomTime);
}

// Start the random thunder effect
randomThunder();





