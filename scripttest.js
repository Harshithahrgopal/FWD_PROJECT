document.getElementById("submitTest").addEventListener("click", function () {
    let score = calculateScore(); // Calculate the test score
    console.log("Submitting Score: ", score); // Debugging

    let formData = new FormData();
    formData.append("score", score);

    fetch("connect_reg.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server Response: ", data); // Debugging
        alert("Test submitted successfully! Redirecting..."); // Alert
        window.location.href = "apptitude.html"; // Redirect to aptitude page
    })
    .catch(error => console.error("Error:", error));
});

function calculateScore() {
    let correctAnswers = 0;
    let totalQuestions = 20; // Total questions

    let questions = document.querySelectorAll(".question");
    questions.forEach(question => {
        let selectedOption = question.querySelector("input[type='radio']:checked");
        if (selectedOption && selectedOption.value === question.dataset.correctAnswer) {
            correctAnswers++;
        }
    });

    return Math.round((correctAnswers / totalQuestions) * 100); // Score as percentage
}
