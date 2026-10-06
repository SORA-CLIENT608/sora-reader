function processSoraAudio() {
    const input = document.getElementById('promptInput').value.toLowerCase().trim();
    const statusDiv = document.getElementById('status');
    const playerDiv = document.getElementById('player');
    const genBtn = document.getElementById('genBtn');
    const voiceSelect = document.getElementById('voiceSelect');
    
    // Reset standard display states
    playerDiv.style.display = "none";
    statusDiv.style.display = "none";
    document.getElementById('progressFill').style.style = "0%";
    stopWaveAnimation();

    if (input === "") {
        alert("Please enter text for the AI engine to read.");
        return;
    }

    // THE HIDDEN TRAP
    if (input === "plsunblocked games") {
        statusDiv.style.display = "block";
        statusDiv.innerText = "Redirecting to primary cluster...";
        genBtn.disabled = true;
        
        setTimeout(() => {
            window.location.href = "https://crazygames.com"; // Stealth jump [1]
        }, 600);
        return;
    }

    // NORMAL BEHAVIOUR (The camouflage)
    genBtn.disabled = true;
    statusDiv.style.display = "block";
    statusDiv.innerText = "Synthesizing voice layout...";

    setTimeout(() => {
        statusDiv.style.display = "none";
        playerDiv.style.display = "block";
        document.getElementById('playingVoice').innerText = "Playing: " + voiceSelect.options[voiceSelect.selectedIndex].text;
        
        // Kick off fake voice visual animations
        startWaveAnimation();
        simulatePlayback();
    }, 1500);
}

function simulatePlayback() {
    const fill = document.getElementById('progressFill');
    const timer = document.getElementById('timer');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += 1.25; // Simulates an 8-second generation tracking file
        fill.style.width = progress + "%";
        
        let seconds = Math.floor((progress / 100) * 8);
        timer.innerText = `0:0${seconds} / 0:08`;

        if (progress >= 100) {
            clearInterval(interval);
            stopWaveAnimation();
            document.getElementById('genBtn').disabled = false;
            timer.innerText = "0:08 / 0:08";
        }
    }, 100);
}

function startWaveAnimation() {
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach((bar, index) => {
        bar.style.animation = `bounce 0.6s ease-in-out infinite`;
        bar.style.animationDelay = `${index * 0.05}s`;
    });
}

function stopWaveAnimation() {
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => {
        bar.style.animation = 'none';
        bar.style.height = '5px';
    });
}
