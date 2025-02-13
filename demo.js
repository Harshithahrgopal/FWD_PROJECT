const questions = [
    {
        question: "What is the time complexity of accessing an element in an array by index?",
        options: [
            { value: "A", label: "O(1)" },
            { value: "B", label: "O(n)" },
            { value: "C", label: "O(log n)" },
            { value: "D", label: "O(n^2)" }
        ],
        correctAnswer: "A" // Correct answer for this question
    },
    {
        question: "Which of the following operations is NOT possible in an array?",
        options: [
            { value: "A", label: "Traversing" },
            { value: "B", label: "Inserting at the beginning" },
            { value: "C", label: "Deleting an element" },
            { value: "D", label: "Dynamic resizing" }
        ],
        correctAnswer: "D" // Correct answer for this question
    },
    // Add more questions with correct answers as needed
];

// Function to shuffle the questions array to display random questions
function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

// Wait for the DOM content to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Shuffle questions to display them in a random order
    shuffleQuestions(questions);

    // Select the container where questions will be displayed
    const questionBox = document.getElementById('question-box');

    // Loop through shuffled questions and insert them into the DOM
    questions.forEach((q, index) => {
        // Create a new div for each question
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Add question text
        const questionText = document.createElement('p');
        questionText.innerHTML = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);

        // Create options for this question
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        // Loop through the options for each question
        q.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="q${index + 1}" value="${option.value}">
                               <span class="round-button"></span> ${option.label}`;
            optionsDiv.appendChild(label);
            optionsDiv.appendChild(document.createElement('br'));
        });

        // Append the options to the question
        questionDiv.appendChild(optionsDiv);

        // Append the question to the question box
        questionBox.appendChild(questionDiv);
    });

    // Add a submit button functionality
    const submitButton = document.querySelector('.submit-container button');
    submitButton.addEventListener('click', function() {
        let score = 0;

        // Loop through each question to check the answer
        questions.forEach((q, index) => {
            // Get the selected option for the current question
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);

            // If the selected option exists, check if it's correct
            if (selectedOption) {
                if (selectedOption.value === q.correctAnswer) {
                    score++;
                }
            }
        });

        // Display the score
        alert(`You scored ${score} out of ${questions.length}`);
    });
});
