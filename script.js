document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".target");
    const resultMessage = document.getElementById("result-message");

    targets.forEach(target => {
        target.addEventListener("click", () => {
            let result = target.getAttribute("data-result");
            if (result === "goal") {
                resultMessage.textContent = "⚽ GOAL! You scored!";
                resultMessage.style.color = "green";
            } else if (result === "saved") {
                resultMessage.textContent = "🧤 Saved! The goalkeeper blocked it.";
                resultMessage.style.color = "orange";
            } else {
                resultMessage.textContent = "❌ Missed! Try again.";
                resultMessage.style.color = "red";
            }
        });
    });
});
