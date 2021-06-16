<?php
$servername="localhost";
$username="root";
$password="root";
$db_name="phi_db";

$conn = mysqli_connect($servername, $username, $password, $db_name);

if (!$conn) {
  echo "Connection Error";
}
?>
