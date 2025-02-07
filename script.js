document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".target");
    const resultMessage = document.getElementById("result-message");
    const scoreDisplay = document.getElementById("score");
    const savesDisplay = document.getElementById("saves");
    const missesDisplay = document.getElementById("misses");
    const ball = document.getElementById("ball");
    const goalkeeper = document.getElementById("goalkeeper");
    const restartButton = document.getElementById("restart-game");

    let score = 0, saves = 0, misses = 0;

    // Randomly move goalkeeper
    function moveGoalkeeper() {
        const randomPosition = Math.random() * 80;
        goalkeeper.style.left = `${randomPosition}%`;
    }
    setInterval(moveGoalkeeper, 2000);

    // Shooting mechanics
    targets.forEach(target => {
        target.addEventListener("click", (event) => {
            let result = target.getAttribute("data-result");

            // Ball movement animation
            ball.style.left = `${event.target.style.left}`;
            ball.style.top = `${event.target.style.top}`;

            setTimeout(() => {
                if (result === "goal") {
                    score++;
                    resultMessage.textContent = "⚽ GOAL! You scored!";
                    resultMessage.style.color = "green";
                    document.getElementById("goal-sound").play();
                } else if (result === "saved") {
                    saves++;
                    resultMessage.textContent = "🧤 Saved! The goalkeeper blocked it.";
                    resultMessage.style.color = "orange";
                    document.getElementById("save-sound").play();
                } else {
                    misses++;
                    resultMessage.textContent = "❌ Missed! Try again.";
                    resultMessage.style.color = "red";
                    document.getElementById("miss-sound").play();
                }

                // Update score
                scoreDisplay.textContent = score;
                savesDisplay.textContent = saves;
                missesDisplay.textContent = misses;

                // Reset ball position
                ball.style.left = "50%";
                ball.style.top = "auto";
            }, 500);
        });
    });

    // Restart game
    restartButton.addEventListener("click", () => {
        score = 0;
        saves = 0;
        misses = 0;
        scoreDisplay.textContent = 0;
        savesDisplay.textContent = 0;
        missesDisplay.textContent = 0;
        resultMessage.textContent = "Take your shot!";
        resultMessage.style.color = "black";
    });
});
