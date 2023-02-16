<?php
$hostname = "localhost";
$username = "root";
$password = "klpod221";
$dbname = "klpod221";

$conn = null;

try {
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "<span style='color: red; font-size: 20px; font-weight: bold;'>Connection failed: " . $e->getMessage() . "</span>";
}
