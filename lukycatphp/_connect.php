<?php
      $servername = "localhost:3306";
      $username = "root";
      $password = "123456";
      $dbname = "test";
      // 创建连接
      $conn = new mysqli($servername, $username, $password,$dbname);
	  	mysqli_query($conn, "set NAMES UTF8");
      // 检测连接
      if ($conn->connect_error) {
          die("连接失败: " . $conn->connect_error);
      }
      //echo "连接成功";
?>