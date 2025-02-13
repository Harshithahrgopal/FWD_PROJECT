const questions = [
        {
            question: "What is the time complexity of accessing an element in an array by index?",
            options: [
                { value: "A", label: "O(1)" },
                { value: "B", label: "O(n)" },
                { value: "C", label: "O(log n)" },
                { value: "D", label: "O(n^2)" }
            ],
            correctAnswer: "A" // O(1)
        },
        {
            question: "Which of the following operations is NOT possible in an array?",
            options: [
                { value: "A", label: "Traversing" },
                { value: "B", label: "Inserting at the beginning" },
                { value: "C", label: "Deleting an element" },
                { value: "D", label: "Dynamic resizing" }
            ],
            correctAnswer: "D" // Dynamic resizing is not possible in a static array
        },
        {
            question: "How is a 2D array stored in memory?",
            options: [
                { value: "A", label: "Column-major order" },
                { value: "B", label: "Row-major order" },
                { value: "C", label: "Both row-major and column-major order" },
                { value: "D", label: "Random order" }
            ],
            correctAnswer: "B" // Row-major order is the most common for arrays in memory
        },
        {
            question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
            options: [
                { value: "A", label: "O(1)" },
                { value: "B", label: "O(n)" },
                { value: "C", label: "O(log n)" },
                { value: "D", label: "O(n^2)" }
            ],
            correctAnswer: "A" // O(1) because it's just changing the head pointer
        },
        {
            question: "In a doubly linked list, which operation is more efficient compared to a singly linked list?",
            options: [
                { value: "A", label: "Traversal" },
                { value: "B", label: "Insertion at the beginning" },
                { value: "C", label: "Deletion of a given node" },
                { value: "D", label: "Accessing an element by index" }
            ],
            correctAnswer: "C" // Deletion of a given node is more efficient in a doubly linked list
        },
        {
            question: "What does the next pointer of the last node in a circular linked list point to?",
            options: [
                { value: "A", label: "NULL" },
                { value: "B", label: "The first node" },
                { value: "C", label: "The previous node" },
                { value: "D", label: "Random memory location" }
            ],
            correctAnswer: "B" // In a circular linked list, the last node's next pointer points to the first node
        },
        {
            question: "Which data structure uses LIFO (Last In, First Out) order?",
            options: [
                { value: "A", label: "Stack" },
                { value: "B", label: "Queue" },
                { value: "C", label: "Array" },
                { value: "D", label: "Linked List" }
            ],
            correctAnswer: "A" // Stack uses LIFO order
        },
        {
            question: "What is the time complexity of the push operation in a stack implemented using an array?",
            options: [
                { value: "A", label: "O(1)" },
                { value: "B", label: "O(n)" },
                { value: "C", label: "O(log n)" },
                { value: "D", label: "O(n^2)" }
            ],
            correctAnswer: "A" // O(1) as push just adds an element to the top of the stack
        },
        {
            question: "Which of the following applications uses a stack?",
            options: [
                { value: "A", label: "BFS traversal" },
                { value: "B", label: "Expression evaluation" },
                { value: "C", label: "Disk scheduling" },
                { value: "D", label: "CPU scheduling" }
            ],
            correctAnswer: "B" // Expression evaluation (e.g., infix to postfix conversion) uses a stack
        },
        {
            question: "Which data structure uses FIFO (First In, First Out) order?",
            options: [
                { value: "A", label: "Stack" },
                { value: "B", label: "Queue" },
                { value: "C", label: "Array" },
                { value: "D", label: "Linked List" }
            ],
            correctAnswer: "B" // Queue uses FIFO order
        },
        {
            question: "What is the time complexity of enqueuing an element in a circular queue?",
            options: [
                { value: "A", label: "O(1)" },
                { value: "B", label: "O(n)" },
                { value: "C", label: "O(log n)" },
                { value: "D", label: "O(n^2)" }
            ],
            correctAnswer: "A" // O(1) because enqueue operation in a circular queue takes constant time
        },
        {
            question: "A deque (double-ended queue) allows:",
            options: [
                { value: "A", label: "Insertions only at the front" },
                { value: "B", label: "Deletions only at the rear" },
                { value: "C", label: "Insertions and deletions at both ends" },
                { value: "D", label: "No operations at the rear" }
            ],
            correctAnswer: "C" // A deque allows insertions and deletions at both ends
        },
        {
            question: "The height of a binary tree with a single node is:",
            options: [
                { value: "A", label: "0" },
                { value: "B", label: "1" },
                { value: "C", label: "2" },
                { value: "D", label: "Undefined" }
            ],
            correctAnswer: "B" // The height of a tree with a single node is 1
        },
        {
            question: "In a binary search tree (BST), the left child of a node contains:",
            options: [
                { value: "A", label: "A smaller value" },
                { value: "B", label: "A larger value" },
                { value: "C", label: "An equal value" },
                { value: "D", label: "None of the above" }
            ],
            correctAnswer: "A" // In a BST, the left child contains a smaller value than its parent
        },
        {
            question: "Which traversal method visits nodes in the order: root, left subtree, right subtree?",
            options: [
                { value: "A", label: "Inorder" },
                { value: "B", label: "Preorder" },
                { value: "C", label: "Postorder" },
                { value: "D", label: "Level-order" }
            ],
            correctAnswer: "B" // Preorder traversal visits root, left, then right
        },
        {
            question: "What is the maximum number of children a binary heap node can have?",
            options: [
                { value: "A", label: "1" },
                { value: "B", label: "2" },
                { value: "C", label: "3" },
                { value: "D", label: "4" }
            ],
            correctAnswer: "B" // A binary heap is a complete binary tree, so each node can have at most 2 children
        },
        {
            question: "In a max heap, the parent node is:",
            options: [
                { value: "A", label: "Smaller than its children" },
                { value: "B", label: "Larger than its children" },
                { value: "C", label: "Equal to one of its children" },
                { value: "D", label: "None of the above" }
            ],
            correctAnswer: "B" // In a max heap, the parent node is larger than its children
        },
        {
            question: "The time complexity of inserting an element in a binary heap is:",
            options: [
                { value: "A", label: "O(1)" },
                { value: "B", label: "O(log n)" },
                { value: "C", label: "O(n)" },
                { value: "D", label: "O(n log n)" }
            ],
            correctAnswer: "B" // O(log n) is the time complexity for insertion in a binary heap
        },
        {
            question: "Which sorting algorithm has the best average-case time complexity?",
            options: [
                { value: "A", label: "Bubble Sort" },
                { value: "B", label: "Merge Sort" },
                { value: "C", label: "Insertion Sort" },
                { value: "D", label: "Selection Sort" }
            ],
            correctAnswer: "B" // Merge Sort has the best average-case time complexity of O(n log n)
        },
        {
            question: "The worst-case time complexity of Quick Sort is:",
            options: [
                { value: "A", label: "O(n log n)" },
                { value: "B", label: "O(n^2)" },
                { value: "C", label: "O(n)" },
                { value: "D", label: "O(log n)" }
            ],
            correctAnswer: "B" // The worst-case time complexity of Quick Sort is O(n^2)
        }
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