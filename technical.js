const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");

const courseButtons = document.querySelectorAll(".course-btn");
const courseDetails = {
    "array": {
        title: "Array",
        description: "Easy\n1.Two Sum\nhttps://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array \n2. Remove Duplicates From Sorted Array \nhttps://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array\n\n Medium:\n1.Container with most water \nhttps://leetcode.com/problems/container-with-most-water/?envType=problem-list-v2&envId=array \n2. 3 Sum \nhttps://leetcode.com/problems/3sum/?envType=problem-list-v2&envId=array \n\nHard: \n1. Median Of Two Sorted Array \nhttps://leetcode.com/problems/median-of-two-sorted-arrays/?envType=problem-list-v2&envId=array \n2. Sudoku Solver \nhttps://leetcode.com/problems/sudoku-solver?envType=problem-list-v2&envId=array"
    },
    "string": {
        title: "String",
        description: "Easy \n1. Roman To Integer \nhttps://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=string \n2. Longest Common Prefix \nhttps://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=string\n\n Medium:\n1. ZigZag Conversion \nhttps://leetcode.com/problems/zigzag-conversion/description/?envType=problem-list-v2&envId=string \n2. String To Integer \nhttps://leetcode.com/problems/zigzag-conversion/description/?envType=problem-list-v2&envId=string\n\n Hard:\n1.Regular Expression Matching\n https://leetcode.com/problems/zigzag-conversion/description/?envType=problem-list-v2&envId=string \n2. Wildcard Matching\nhttps://leetcode.com/problems/wildcard-matching/description/?envType=problem-list-v2&envId=string"
    },
    "linked list": {
        title: "Linked List",
        description: "Easy \n1. Merge Two Sorted Lists \nhttps://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-list \n2. Remove Duplicates From Sorted List \nhttps://leetcode.com/problems/remove-duplicates-from-sorted-list/description/?envType=problem-list-v2&envId=linked-list \n\nMedium \n1. Add Two Numbers \nhttps://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=linked-list \n2. Remove Nth Node From The End Of The List \nhttps://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=problem-list-v2&envId=linked-list \n\nHard \n1. Merge K Sorted Lists \nhttps://leetcode.com/problems/merge-k-sorted-lists/description/?envType=problem-list-v2&envId=linked-list \n2. Reverse Nodes in k-Groups \nhttps://leetcode.com/problems/reverse-nodes-in-k-group/description/?envType=problem-list-v2&envId=linked-list"
    },
    "stack": {
        title: "Stack",
        description: "Easy \n1. Valid Parentheses \nhttps://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=stack \n2. Backspace String Compare \nhttps://leetcode.com/problems/backspace-string-compare/description/?envType=problem-list-v2&envId=stack \n\nMedium \n1. Daily Temperatures \nhttps://leetcode.com/problems/daily-temperatures/description/?envType=problem-list-v2&envId=stack \n2. Min Stack \nhttps://leetcode.com/problems/min-stack/description/?envType=problem-list-v2&envId=stack \n\nHard \n1. Longest Valid Parentheses. \nhttps://leetcode.com/problems/longest-valid-parentheses/description/?envType=problem-list-v2&envId=stack \n 2. Trapping rain water\n https://leetcode.com/problems/trapping-rain-water/description/?envType=problem-list-v2&envId=stack"
    },
    "queue": {
        title: "Queue",
        description: "Easy \n1. Implement Stack Using Queues \nhttps://leetcode.com/problems/implement-queue-using-stacks/description/?envType=problem-list-v2&envId=queue \n2. Implement Queues Using Stack \nhttps://leetcode.com/problems/implement-queue-using-stacks/description/?envType=problem-list-v2&envId=queue\n\nMedium \n1. Disign Circular Queue \nhttps://leetcode.com/problems/design-circular-queue/description/?envType=problem-list-v2&envId=queue\n2.Design Circular Dequeue\nhttps://leetcode.com/problems/design-circular-deque/description/?envType=problem-list-v2&envId=queue\n\n Hard\n 1.Stamping The Sequence\nhttps://leetcode.com/problems/stamping-the-sequence/description/?envType=problem-list-v2&envId=queue\n2.Minimum Number Of K Consecutive Flip Bits\nhttps://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/description/?envType=problem-list-v2&envId=queue"
    },
    "binary tree": {
        title: "Binary Tree",
        description: "Easy \n1. Binary Tree Inorder Traversal\nhttps://leetcode.com/problems/binary-tree-inorder-traversal/description/?envType=problem-list-v2&envId=binary-tree\n2.Same Tree\nhttps://leetcode.com/problems/same-tree/description/?envType=problem-list-v2&envId=binary-tree\n\n Medium\n1.Unique Binary Search tree\nhttps://leetcode.com/problems/unique-binary-search-trees/description/?envType=problem-list-v2&envId=binary-tree\n2.Validate Binary Search Tree\nhttps://leetcode.com/problems/validate-binary-search-tree/description/?envType=problem-list-v2&envId=binary-tree\n\nHard\n1.Binary Tree Maximum path Sum\nhttps://leetcode.com/problems/binary-tree-maximum-path-sum/description/?envType=problem-list-v2&envId=binary-tree\n2.Serialize and Deserialize Binary Tree\nhttps://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/?envType=problem-list-v2&envId=binary-tree"
    },
    "graph": {
        title: "Graph",
        description: "Easy\n1.Find The Sound Judge\nhttps://leetcode.com/problems/find-the-town-judge/description/?envType=problem-list-v2&envId=graph\n2.Find Center Of Star Graph\nhttps://leetcode.com/problems/find-center-of-star-graph/description/?envType=problem-list-v2&envId=graph\n\nMedium\n1.Clone Graph\nhttps://leetcode.com/problems/clone-graph/description/?envType=problem-list-v2&envId=graph\n2.Course Schedule\nhttps://leetcode.com/problems/course-schedule/description/?envType=problem-list-v2&envId=graph\n\nHard\n1.Reconstruct Itinerary\nhttps://leetcode.com/problems/reconstruct-itinerary/description/?envType=problem-list-v2&envId=graph\n2.Couples Holding Hands\nhttps://leetcode.com/problems/couples-holding-hands/description/?envType=problem-list-v2&envId=graph"
    },
    "Dynamic programming": {
        title: "Dynamic Programming",
        description: "Easy\n1.Climbing Stairs\nhttps://leetcode.com/problems/climbing-stairs/description/?envType=problem-list-v2&envId=dynamic-programmin\n2.Pascals Triangle\nhttps://leetcode.com/problems/pascals-triangle/description/?envType=problem-list-v2&envId=dynamic-programming\n\nMedium\n1.Decode Ways\nhttps://leetcode.com/problems/decode-ways/description/?envType=problem-list-v2&envId=dynamic-programming\n2.Triangle\nhttps://leetcode.com/problems/triangle/description/?envType=problem-list-v2&envId=dynamic-programming\n\nHard\n1.Regular Expression Matching\nhttps://leetcode.com/problems/regular-expression-matching/?envType=problem-list-v2&envId=dynamic-programming\n2.Russian Doll Envelops\nhttps://leetcode.com/problems/russian-doll-envelopes/?envType=problem-list-v2&envId=dynamic-programming"
    },
    "hashing": {
        title: "Hashing",
        description: ""
    },
    "math": {
        title: "Math",
        description: ""
    },
    "heap": {
        title: "Heap",
        description: ""
    },
    "greedy algorithms": {
        title: "Greedy Algorithms",
        description: ""
    },
    "backtracking": {
        title: "Backtracking",
        description: ""
    },
    "bit manipulation": {
        title: "Bit Manipulation",
        description: "Easy\n1. Add Binary \nhttps://leetcode.com/problems/add-binary/description/?envType=problem-list-v2&envId=bit-manipulation \n2.Single Number \nhttps://leetcode.com/problems/single-number/?envType=problem-list-v2&envId=bit-manipulation \n\nMedium \n1. Subsets\nhttps://leetcode.com/problems/subsets/description/?envType=problem-list-v2&envId=bit-manipulation \n2. Gray Code \nhttps://leetcode.com/problems/gray-code/description/?envType=problem-list-v2&envId=bit-manipulation \n\nHard\n1.Stickers To Spell Word \nhttps://leetcode.com/problems/stickers-to-spell-word/?envType=problem-list-v2&envId=bit-manipulation \n2. Transform To ChessBoard \nhttps://leetcode.com/problems/transform-to-chessboard/description/?envType=problem-list-v2&envId=bit-manipulation"
    },
    "tree traversals": {
        title: "Game Theory",
        description: "Easy\n1. Nim Game \nhttps://leetcode.com/problems/nim-game/?envType=problem-list-v2&envId=game-theory \n2. Divisor Game \nhttps://leetcode.com/problems/divisor-game/description/?envType=problem-list-v2&envId=game-theory \n\nMedium \n1. Guess The Number Higher Or Lower \nhttps://leetcode.com/problems/guess-number-higher-or-lower-ii/description/?envType=problem-list-v2&envId=game-theory \n2. Can I Win \nhttps://leetcode.com/problems/can-i-win/description/?envType=problem-list-v2&envId=game-theory \n\nHard\n1. Chalkboard XOR Game \nhttps://leetcode.com/problems/chalkboard-xor-game/description/?envType=problem-list-v2&envId=game-theory \n2.Guess The Word \nhttps://leetcode.com/problems/guess-the-word/description/?envType=problem-list-v2&envId=game-theory"
    }
};

function openPopup(courseName) {
    const course = courseDetails[courseName];
    if (course) {
        const descriptionWithNamedLinks = course.description
            .replace(/\n/g, "<br>") 
            
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'); 

        popupTitle.textContent = course.title;
        popupDescription.innerHTML = descriptionWithNamedLinks;

        popup.style.display = "flex";  
    }
}


courseButtons.forEach(button => {
    button.addEventListener("click", function() {
        const courseName = button.getAttribute("data-course");
        openPopup(courseName);  
    });
});

closePopupButton.addEventListener("click", function() {
    popup.style.display = "none"; 
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";  
    }
});
