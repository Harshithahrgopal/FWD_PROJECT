<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Connect to MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

// Get user data from AJAX request
$email = $_POST['email'] ?? '';
$score = $_POST['score'] ?? '';

// Validate data
if (empty($email) || empty($score)) {
    die(json_encode(["status" => "error", "message" => "Invalid data"]));
}

// Update user's test score
$sql = "UPDATE form SET test_score = ? WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $score, $email);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Score saved successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to save score"]);
}

$stmt->close();
$conn->close();
?>
