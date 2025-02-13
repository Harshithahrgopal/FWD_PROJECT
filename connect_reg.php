<?php
session_start();  

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration"; // Ensure it matches your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password']; 
    $confirm_password = $_POST['confirm_password'];
    $phone = $_POST['phone'];
    $year = $_POST['year'];
    $cgpa = $_POST['cgpa'];
    $skills = $_POST['skills'];

    // Ensure passwords match
    if ($password !== $confirm_password) {
        echo "<p style='color: red;'>Passwords do not match!</p>";
        exit();
    }

    // Hash password before storing
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert into database
    $sql = "INSERT INTO form (username, email, password, phone, year, cgpa, skills) 
            VALUES ('$username', '$email', '$hashed_password', '$phone', '$year', '$cgpa', '$skills')";

    if ($conn->query($sql) === TRUE) {
        // Successful registration, redirect to login page
        header("Location: login.html");
        exit(); // Always call exit after header redirect to stop further script execution
    } else {
        if ($conn->errno === 1062) {
            echo "<p style='color: red;'>Email already exists!</p>";
        } else {
            echo "<p style='color: red;'>Error: " . $conn->error . "</p>";
        }
    }
}

$conn->close();
?>
