const questions = [
    {
        question: "Which of the following is the main function of the ALU in a computer?",
        options: [
            { value: "A", label: "Store data" },
            { value: "B", label: "Perform arithmetic and logical operations" },
            { value: "C", label: "Control input and output devices" },
            { value: "D", label: "Manage memory" }
        ]
    },
    {
        question: "What is the full form of CPU?",
        options: [
            { value: "A", label: "Central Processing Unit" },
            { value: "B", label: "Control Processing Unit" },
            { value: "C", label: "Central Performance Unit" },
            { value: "D", label: "Control Performance Unit" }
        ]
    },
    {
        question: "Which type of memory is non-volatile and stores data permanently?",
        options: [
            { value: "A", label: "RAM" },
            { value: "B", label: "Cache" },
            { value: "C", label: "ROM" },
            { value: "D", label: "Register" }
        ]
    },
    {
        question: "What is the main purpose of a register in a CPU?",
        options: [
            { value: "A", label: "To store large amounts of data" },
            { value: "B", label: "To store frequently accessed instructions or data" },
            { value: "C", label: "To control the flow of data" },
            { value: "D", label: "To store backup data" }
        ]
    },
    {
        question: "What is the smallest unit of data in a computer?",
        options: [
            { value: "A", label: "Nibble" },
            { value: "B", label: "Byte" },
            { value: "C", label: "Bit" },
            { value: "D", label: "Word" }
        ]
    },
    {
        question: "Which of the following is an example of volatile memory?",
        options: [
            { value: "A", label: "RAM" },
            { value: "B", label: "ROM" },
            { value: "C", label: "Hard Disk" },
            { value: "D", label: "Flash Memory" }
        ]
    },
    {
        question: "Which of the following buses is used to carry data between the CPU and memory?",
        options: [
            { value: "A", label: "Address Bus" },
            { value: "B", label: "Control Bus" },
            { value: "C", label: "Data Bus" },
            { value: "D", label: "Power Bus" }
        ]
    },
    {
        question: "What is the function of a control unit in a CPU?",
        options: [
            { value: "A", label: "Perform calculations" },
            { value: "B", label: "Store data" },
            { value: "C", label: "Direct the flow of data and instructions" },
            { value: "D", label: "Generate power" }
        ]
    },
    {
        question: "Which type of cache memory is located closest to the CPU?",
        options: [
            { value: "A", label: "L1 Cache" },
            { value: "B", label: "L2 Cache" },
            { value: "C", label: "L3 Cache" },
            { value: "D", label: "Virtual Cache" }
        ]
    },
    {
        question: "What is the purpose of pipelining in a CPU?",
        options: [
            { value: "A", label: "To increase the clock speed" },
            { value: "B", label: "To execute multiple instructions simultaneously" },
            { value: "C", label: "To store instructions" },
            { value: "D", label: "To reduce the size of the CPU" }
        ]
    },
    {
        question: "Which addressing mode uses a constant value in the instruction?",
        options: [
            { value: "A", label: "Immediate Addressing" },
            { value: "B", label: "Direct Addressing" },
            { value: "C", label: "Indirect Addressing" },
            { value: "D", label: "Register Addressing" }
        ]
    },
    {
        question: "What is the role of an interrupt in a computer system?",
        options: [
            { value: "A", label: "To increase processing speed" },
            { value: "B", label: "To alert the CPU to a high-priority task" },
            { value: "C", label: "To perform arithmetic operations" },
            { value: "D", label: "To connect external devices" }
        ]
    },
    {
        question: "Which of the following is a type of parallel processing?",
        options: [
            { value: "A", label: "Multithreading" },
            { value: "B", label: "Pipelining" },
            { value: "C", label: "Both A and B" },
            { value: "D", label: "None of the above" }
        ]
    },
    {
        question: "What does DMA stand for in computer systems?",
        options: [
            { value: "A", label: "Direct Memory Allocation" },
            { value: "B", label: "Dynamic Memory Access" },
            { value: "C", label: "Direct Memory Access" },
            { value: "D", label: "Dynamic Memory Allocation" }
        ]
    },
    {
        question: "Which type of instruction is used to transfer data from memory to a register?",
        options: [
            { value: "A", label: "Arithmetic Instruction" },
            { value: "B", label: "Logical Instruction" },
            { value: "C", label: "Data Transfer Instruction" },
            { value: "D", label: "Control Instruction" }
        ]
    },
    {
        question: "What is the purpose of a clock in a CPU?",
        options: [
            { value: "A", label: "To measure time" },
            { value: "B", label: "To synchronize operations" },
            { value: "C", label: "To execute instructions" },
            { value: "D", label: "To store data" }
        ]
    },
    {
        question: "Which technique is used to resolve data hazards in pipelining?",
        options: [
            { value: "A", label: "Branch Prediction" },
            { value: "B", label: "Forwarding" },
            { value: "C", label: "Prefetching" },
            { value: "D", label: "Segmentation" }
        ]
    },
    {
        question: "Which of the following is NOT a characteristic of RISC architecture?",
        options: [
            { value: "A", label: "Fixed instruction format" },
            { value: "B", label: "Few instructions" },
            { value: "C", label: "Complex addressing modes" },
            { value: "D", label: "Single-cycle execution" }
        ]
    },
    {
        question: "What does the term 'throughput' refer to in computer architecture?",
        options: [
            { value: "A", label: "The clock speed of the CPU" },
            { value: "B", label: "The number of instructions executed per unit time" },
            { value: "C", label: "The size of the memory" },
            { value: "D", label: "The speed of data transfer" }
        ]
    },
    {
        question: "Which of the following best describes virtual memory?",
        options: [
            { value: "A", label: "A part of the hard disk used as an extension of RAM" },
            { value: "B", label: "A type of ROM" },
            { value: "C", label: "Temporary storage for instructions" },
            { value: "D", label: "A reserved portion of the CPU" }
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