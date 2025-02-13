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
});

