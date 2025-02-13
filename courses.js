// Get the popup and its elements
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");

// Get all course buttons
const courseButtons = document.querySelectorAll(".course-btn");

// Course details mapped by course name
const courseDetails = {
    "Data Structures": {
        title: "Data Structures",
        description: "Data structures are essential for solving complex problems in coding interviews. Learn about arrays, linked lists, stacks, queues, and trees.\n\nCertified Courses:\n1.https://www.mygreatlearning.com/academy/learn-for-free/courses/data-structures-in-c\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"
    },
    "Algorithms": {
        title: "Algorithms",
        description: "Algorithms form the basis of efficient problem-solving. Dive into sorting, searching, and dynamic programming.\n\nCertified Courses:\n1.https://www.coursera.org/courses?query=algorithm%20design \n2.https://www.mygreatlearning.com/academy/learn-for-free/courses/algorithms\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=f5OD9CKrZEw&list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT"
    },
    "C++": {
        title: "C++",
        description: "C++ is a powerful language widely used in competitive programming and software development. Learn syntax, data structures, and algorithmic problem-solving.\n\nCertified Courses:\n1.https://www.coursera.org/courses?query=c%2B%2B \n2.https://www.coursera.org/courses?query=c%2B%2B\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL"
    },
    "Java": {
        title: "Java",
        description: "Java is one of the most popular programming languages. Learn object-oriented programming, data structures, and Java-specific nuances.\n\nCertified Courses:\n1.https://www.classcentral.com/subject/c-programming\n 2.https://www.coursera.org/courses?query=java\n\n YouTube Links:\n1.https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB953onHqGMzlmf8cMVs-n9pUaNRA"
    },
    "Python": {
        title: "Python",
        description: "Python is a versatile language. This course covers its use in web development, data analysis, and algorithm design.\n\nCertified Courses:\n1. https://www.coursera.org/specializations/python\n 2.https://www.freecodecamp.org/news/python-for-beginners/\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=rfscVS0vtbw\n 2. https://www.youtube.com/watch?v=kDdTgxv6BvY"
    },
    "JavaScript": {
        title: "JavaScript",
        description: "JavaScript is crucial for web development. Learn its syntax, DOM manipulation, and how to work with APIs.\n\nCertified Courses:\n1.https://www.freecodecamp.org/learn/\n 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide\n\n YouTube Links:\n1. https://www.youtube.com/watch?v=PkZNo7MFNFg\n 2. https://www.youtube.com/watch?v=hdI2bqOjy3c"
    },
    "C Language": {
        title: "C Language",
        description: "C is a low-level programming language that forms the foundation for many other languages. Learn about memory management and data manipulation.\n\nCertified Courses:\n1.https://www.mygreatlearning.com/academy/learn-for-free/courses/c-for-beginners1\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=irqbmMNs2Bo\n 2.https://www.youtube.com/watch?v=KJgsSFOSQv0"
    },
    "Dynamic programming": {
        title: "Dynamic Programming",
        description: "Dynamic programming is a problem-solving technique that solves complex problems by breaking them down into simpler subproblems.\n\nCertified Courses:\n1.https://www.coursera.org/courses?query=dynamic%20programming\n 2.https://www.mygreatlearning.com/academy/learn-for-free/courses/dynamic-programing\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=FfXoiwwnxFw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY"
    },
    "OOP": {
        title: "Object-Oriented Programming",
        description: "Learn about the principles of OOP, including classes, inheritance, polymorphism, and encapsulation."
    },
    "Debugging": {
        title: "Debugging",
        description: "Debugging is an essential skill for any developer. Learn techniques to identify and fix bugs efficiently.\n\nCertified Courses:\n1.https://www.coursera.org/learn/troubleshooting-debugging-techniques\n 2.https://www.udemy.com/topic/debugging/?srsltid=AfmBOoqzVErtOryHGcgiKV4SnOhGxbqBJSKhx_PY8ZX8-mCFWhbtXOXrchttps://www.youtube.com/watch?v=Kon1DGwbtzg&pp=ygUhdGVzdGluZyBhbmQgZGVidWdnaW5nIGZ1bGwgY291cnNl"
    },
    "Computer organization": {
        title: "Computer Organization",
        description: "Understanding how computers work at a low level is key to becoming a good programmer. Learn about processors, memory, and the hardware-software interface.\n\nCertified Courses:\n1.https://onlinecourses.nptel.ac.in/noc20_cs64/preview\n 2.https://www.coursera.org/courses?query=computer%20architecture\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=Ol8D69VKX2k&list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q"
    },
    "C# language": {
        title: "C# Language",
        description: "C# is a modern, object-oriented language. This course covers the syntax, libraries, and frameworks that make C# great for building applications.\n\nCertified Courses:\n1.https://www.coursera.org/courses?query=c%20sharp\n 2.https://www.classcentral.com/subject/c-sharp\n\n YouTube Links:\n1.https://i.ytimg.com/vi/9hJPzq4ntAE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6-ymqHbfayNJLY0Mel3lsNRCJ4A"
    },
    "Programming fundamentals": {
        title: "Programming Fundamentals",
        description: "This course covers the basic concepts of programming, including variables, loops, and conditional statements.\n\nYouTube Links:\n1.https://youtu.be/zOjov-2OZ0E\n 2.https://youtu.be/F7CWjuaC6gw"
    },
    "Interview skills": {
        title: "Interview Skills",
        description: "Prepare for coding interviews by learning how to approach problems, communicate solutions, and manage time effectively during interviews.\n\nCertified Courses:\n1https://www.mygreatlearning.com/interview-preparation/free-courses\n 2.https://www.udemy.com/topic/interviewing-skills/free/?srsltid=AfmBOoragw6j9Gh4nyg3NdCU-0oF_Ux6vw7b2j3sMmC9BDQk2NQDRxQG"
    },
    "HTML CSS": {
        title: "HTML and CSS",
        description: "Learn the basics of web development with HTML for structuring webpages and CSS for styling them.\n\nCertified Courses:\n1.https://www.classcentral.com/subject/html-css\n 2.https://www.mygreatlearning.com/html/free-courses\n\n YouTube Links:\n1.https://www.youtube.com/watch?v=HGTJBPNC-Gw&pp=ygUUSFRNTCBDU1MgZnVsbCBjb3Vyc2U%3D"
    }
};

// Function to open the popup with the relevant content
// Function to open the popup with the relevant content
function openPopup(courseName) {
    const course = courseDetails[courseName];
    if (course) {
        popupTitle.textContent = course.title;
        
        // Convert the description text to HTML, replacing newlines with <br> and links with <a> tags
        popupDescription.innerHTML = course.description
            .replace(/\n/g, "<br>") // Replace newlines with <br> for line breaks
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'); // Convert URLs to clickable links
        
        popup.style.display = "flex";  // Show the popup
    }
}


// Add event listeners to all course buttons
courseButtons.forEach(button => {
    button.addEventListener("click", function() {
        const courseName = button.getAttribute("data-course");
        openPopup(courseName);  // Open the popup for the selected course
    });
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";  // Hide the popup
});

// Close the popup if clicking outside the content area
popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";  // Hide the popup
    }
});
