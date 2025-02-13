<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user scores
$sql = "SELECT username, email, test_score FROM form ORDER BY test_score DESC";
$result = $conn->query($sql);

echo "<h2>User Test Scores</h2>";
echo "<table border='1'><tr><th>Username</th><th>Email</th><th>Test Score</th></tr>";
while ($row = $result->fetch_assoc()) {
    echo "<tr><td>{$row['username']}</td><td>{$row['email']}</td><td>{$row['test_score']}</td></tr>";
}
echo "</table>";

$conn->close();
?>
