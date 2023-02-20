<?php
$hostname = "sql210.epizy.com";
$username = "epiz_33549269";
$password = "tZ1jcJrbXTTfQ";
$dbname = "epiz_33549269_klpod221";

$conn = null;

try {
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "<span style='color: red; font-size: 20px; font-weight: bold;'>Connection failed: " . $e->getMessage() . "</span>";
}
