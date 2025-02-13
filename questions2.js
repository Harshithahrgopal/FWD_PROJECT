const questions = [
    {
        question: "Which of the following is a component of a DBMS?",
        options: [
            { value: "A", label: "Data" },
            { value: "B", label: "Hardware" },
            { value: "C", label: "Software" },
            { value: "D", label: "All of the above" }
        ]
    },
    {
        question: "What does SQL stand for?",
        options: [
            { value: "A", label: "Structured Query Language" },
            { value: "B", label: "Simple Query Language" },
            { value: "C", label: "Structured Question Language" },
            { value: "D", label: "Standard Query Logic" }
        ]
    },
    {
        question: "Which of the following is NOT a type of database model?",
        options: [
            { value: "A", label: "Relational model" },
            { value: "B", label: "Hierarchical model" },
            { value: "C", label: "Network model" },
            { value: "D", label: "Linear model" }
        ]
    },
    {
        question: "In a relational database, rows are also known as:",
        options: [
            { value: "A", label: "Fields" },
            { value: "B", label: "Tuples" },
            { value: "C", label: "Attributes" },
            { value: "D", label: "Columns" }
        ]
    },
    {
        question: "Which key is used to uniquely identify a record in a table?",
        options: [
            { value: "A", label: "Foreign Key" },
            { value: "B", label: "Primary Key" },
            { value: "C", label: "Candidate Key" },
            { value: "D", label: "Super Key" }
        ]
    },
    {
        question: "Which of the following is NOT a type of SQL command?",
        options: [
            { value: "A", label: "DDL" },
            { value: "B", label: "DML" },
            { value: "C", label: "DCL" },
            { value: "D", label: "DOL" }
        ]
    },
    {
        question: "What is the purpose of the SELECT statement in SQL?",
        options: [
            { value: "A", label: "To delete data" },
            { value: "B", label: "To retrieve data" },
            { value: "C", label: "To update data" },
            { value: "D", label: "To create a table" }
        ]
    },
    {
        question: "Which of the following is a DML command?",
        options: [
            { value: "A", label: "CREATE" },
            { value: "B", label: "INSERT" },
            { value: "C", label: "DROP" },
            { value: "D", label: "GRANT" }
        ]
    },
    {
        question: "What is a foreign key in a relational database?",
        options: [
            { value: "A", label: "A key used to sort records" },
            { value: "B", label: "A key that links two tables" },
            { value: "C", label: "A key that ensures no duplicate records" },
            { value: "D", label: "A key that automatically generates values" }
        ]
    },
    {
        question: "Which of the following ensures data integrity in a relational database?",
        options: [
            { value: "A", label: "Primary Key" },
            { value: "B", label: "Foreign Key" },
            { value: "C", label: "Constraints" },
            { value: "D", label: "All of the above" }
        ]
    },
    {
        question: "What is the full form of ACID in the context of databases?",
        options: [
            { value: "A", label: "Atomicity, Consistency, Isolation, Durability" },
            { value: "B", label: "Accuracy, Complexity, Integrity, Durability" },
            { value: "C", label: "Atomicity, Consistency, Integration, Durability" },
            { value: "D", label: "Access, Control, Isolation, Data" }
        ]
    },
    {
        question: "What is the default JOIN type in SQL?",
        options: [
            { value: "A", label: "INNER JOIN" },
            { value: "B", label: "OUTER JOIN" },
            { value: "C", label: "LEFT JOIN" },
            { value: "D", label: "CROSS JOIN" }
        ]
    },
    {
        question: "Which command is used to remove a table from a database?",
        options: [
            { value: "A", label: "DELETE" },
            { value: "B", label: "REMOVE" },
            { value: "C", label: "DROP" },
            { value: "D", label: "TRUNCATE" }
        ]
    },
    {
        question: "Which SQL keyword is used to sort the result-set?",
        options: [
            { value: "A", label: "SORT BY" },
            { value: "B", label: "ORDER BY" },
            { value: "C", label: "GROUP BY" },
            { value: "D", label: "FILTER BY" }
        ]
    },
    {
        question: "Which type of database is used to store and manage data in the form of key-value pairs?",
        options: [
            { value: "A", label: "Relational Database" },
            { value: "B", label: "Key-Value Store" },
            { value: "C", label: "Graph Database" },
            { value: "D", label: "Document Database" }
        ]
    },
    {
        question: "Which clause is used to filter records in SQL?",
        options: [
            { value: "A", label: "WHERE" },
            { value: "B", label: "HAVING" },
            { value: "C", label: "FILTER" },
            { value: "D", label: "ORDER" }
        ]
    },
    {
        question: "Which of the following is an aggregate function in SQL?",
        options: [
            { value: "A", label: "SUM()" },
            { value: "B", label: "AVG()" },
            { value: "C", label: "COUNT()" },
            { value: "D", label: "All of the above" }
        ]
    },
    {
        question: "What does the term normalization refer to in databases?",
        options: [
            { value: "A", label: "Minimizing redundancy" },
            { value: "B", label: "Maximizing redundancy" },
            { value: "C", label: "Removing primary keys" },
            { value: "D", label: "Backing up data" }
        ]
    },
    {
        question: "Which database language is used to define the structure of a database?",
        options: [
            { value: "A", label: "DML" },
            { value: "B", label: "DDL" },
            { value: "C", label: "DCL" },
            { value: "D", label: "TCL" }
        ]
    },
    {
        question: "Which of the following is NOT an example of a relational database?",
        options: [
            { value: "A", label: "MySQL" },
            { value: "B", label: "MongoDB" },
            { value: "C", label: "PostgreSQL" },
            { value: "D", label: "Oracle" }
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