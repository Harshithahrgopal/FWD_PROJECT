const questions = [
    {
        question: "Which of the following is NOT a principle of Object-Oriented Programming?",
        options: [
            { value: "A", label: "Encapsulation" },
            { value: "B", label: "Inheritance" },
            { value: "C", label: "Polymorphism" },
            { value: "D", label: "Compilation" }
        ]
    },
    {
        question: "What is the main purpose of encapsulation in OOP?",
        options: [
            { value: "A", label: "To increase execution speed" },
            { value: "B", label: "To hide the implementation details" },
            { value: "C", label: "To allow multiple inheritance" },
            { value: "D", label: "To reduce redundancy" }
        ]
    },
    {
        question: "Which of the following defines the ability to take multiple forms in OOP?",
        options: [
            { value: "A", label: "Inheritance" },
            { value: "B", label: "Polymorphism" },
            { value: "C", label: "Abstraction" },
            { value: "D", label: "Encapsulation" }
        ]
    },
    {
        question: "What is an object in Object-Oriented Programming?",
        options: [
            { value: "A", label: "A blueprint for creating classes" },
            { value: "B", label: "A variable that holds only integers" },
            { value: "C", label: "An instance of a class" },
            { value: "D", label: "A function within a class" }
        ]
    },
    {
        question: "What is the primary benefit of inheritance in OOP?",
        options: [
            { value: "A", label: "Code duplication" },
            { value: "B", label: "Code reuse and extension" },
            { value: "C", label: "Faster compilation" },
            { value: "D", label: "Hiding data from other classes" }
        ]
    },
    {
        question: "Which of the following is true about abstraction in OOP?",
        options: [
            { value: "A", label: "It focuses on what an object does, not how it does it." },
            { value: "B", label: "It combines data and methods into a single unit." },
            { value: "C", label: "It allows a class to inherit properties from another class." },
            { value: "D", label: "It creates multiple instances of a class." }
        ]
    },
    {
        question: "Which of the following best describes a class in OOP?",
        options: [
            { value: "A", label: "A function that returns a value" },
            { value: "B", label: "A collection of data and methods" },
            { value: "C", label: "A programming language" },
            { value: "D", label: "A specific instance of an object" }
        ]
    },
    {
        question: "Which concept of OOP is used to achieve runtime polymorphism?",
        options: [
            { value: "A", label: "Method Overloading" },
            { value: "B", label: "Method Overriding" },
            { value: "C", label: "Encapsulation" },
            { value: "D", label: "Data Hiding" }
        ]
    },
    {
        question: "Which of the following is an example of a real-world entity that can be modeled using OOP?",
        options: [
            { value: "A", label: "A car" },
            { value: "B", label: "A building" },
            { value: "C", label: "A bank account" },
            { value: "D", label: "All of the above" }
        ]
    },
    {
        question: "Which of the following is an example of encapsulation?",
        options: [
            { value: "A", label: "Using private fields in a class" },
            { value: "B", label: "Inheritance of a base class" },
            { value: "C", label: "Creating multiple classes" },
            { value: "D", label: "Overloading a method" }
        ]
    },
    {
        question: "Which keyword is typically used to create an object in OOP?",
        options: [
            { value: "A", label: "new" },
            { value: "B", label: "create" },
            { value: "C", label: "initialize" },
            { value: "D", label: "build" }
        ]
    },
    {
        question: "What is the purpose of a constructor in a class?",
        options: [
            { value: "A", label: "To destroy objects" },
            { value: "B", label: "To initialize objects" },
            { value: "C", label: "To call a method" },
            { value: "D", label: "To perform mathematical operations" }
        ]
    },
    {
        question: "Which OOP concept allows an object to behave differently based on its type or class?",
        options: [
            { value: "A", label: "Polymorphism" },
            { value: "B", label: "Abstraction" },
            { value: "C", label: "Inheritance" },
            { value: "D", label: "Encapsulation" }
        ]
    },
    {
        question: "What is the process of hiding the internal details of an object called?",
        options: [
            { value: "A", label: "Abstraction" },
            { value: "B", label: "Encapsulation" },
            { value: "C", label: "Polymorphism" },
            { value: "D", label: "Inheritance" }
        ]
    },
    {
        question: "Which OOP concept allows a class to derive properties and behavior from another class?",
        options: [
            { value: "A", label: "Encapsulation" },
            { value: "B", label: "Inheritance" },
            { value: "C", label: "Abstraction" },
            { value: "D", label: "Polymorphism" }
        ]
    },
    {
        question: "What is method overloading?",
        options: [
            { value: "A", label: "Using the same method name with different parameters" },
            { value: "B", label: "Using the same method name in a derived class" },
            { value: "C", label: "Using private methods within a class" },
            { value: "D", label: "Using static methods only" }
        ]
    },
    {
        question: "What is the term used for combining data and functions into a single unit in OOP?",
        options: [
            { value: "A", label: "Abstraction" },
            { value: "B", label: "Encapsulation" },
            { value: "C", label: "Inheritance" },
            { value: "D", label: "Polymorphism" }
        ]
    },
    {
        question: "Which of the following is NOT true about polymorphism?",
        options: [
            { value: "A", label: "It can be achieved through method overriding." },
            { value: "B", label: "It allows one function to behave differently." },
            { value: "C", label: "It is a form of code duplication." },
            { value: "D", label: "It can be achieved through method overloading." }
        ]
    },
    {
        question: "Which of the following correctly defines inheritance?",
        options: [
            { value: "A", label: "A process of creating objects from a class" },
            { value: "B", label: "A process where one class acquires the properties of another" },
            { value: "C", label: "A process of defining private fields" },
            { value: "D", label: "A process of defining abstract methods" }
        ]
    },
    {
        question: "Which OOP concept involves creating a blueprint for objects?",
        options: [
            { value: "A", label: "Class" },
            { value: "B", label: "Object" },
            { value: "C", label: "Encapsulation" },
            { value: "D", label: "Abstraction" }
        ]
    }
];

// Function to shuffle the questions array to display random questions
function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}
