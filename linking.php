<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration"; // Ensure this is correct

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // Check if the email exists in the database
    $sql = "SELECT * FROM form WHERE LOWER(email) = LOWER(?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Fetch existing record
        $row = $result->fetch_assoc();

        if ($row['username'] === $user) {
            if ($row['password'] === $password) { // Ensure passwords are compared properly
                $_SESSION['user'] = $user;
                $_SESSION['email'] = $email;

                echo "<p style='color: green;'>Login successful! Redirecting...</p>";
                header("refresh:1; url=links.html"); // Redirect to links.html
                exit();
            } else {
                echo "<p style='color: red;'>Incorrect password. Please try again.</p>";
            }
        } else {
            echo "<p style='color: red;'>Email already exists with a different email id.</p>";
        }
    } else {
        // If email is not found, insert new user
        $insert_sql = "INSERT INTO form (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insert_sql);
        $stmt->bind_param("sss", $user, $email, $password); // Consider hashing the password before storing

        if ($stmt->execute()) {
            $_SESSION['user'] = $user;
            $_SESSION['email'] = $email;

            echo "<p style='color: green;'>Registration successful! Redirecting...</p>";
            header("refresh:1; url=links.html");
            exit();
        } else {
            echo "<p style='color: red;'>Error: " . $conn->error . "</p>";
        }
    }
}

$conn->close();
?>