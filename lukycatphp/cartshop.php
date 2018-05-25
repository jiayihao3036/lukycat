<?php
    header("Access-Control-Allow-Origin:*");
    /*
        username => 字段涵义 ; 前端发送给我的用户名信息;
    */
  
    $name = @$_POST["name"];
    $mouney = @$_POST["mouney"];
	$imgsrc = @$_POST["imgsrc"];
    $type = @$_POST["type"]; 
	$id = @$_POST["id"];

    //和数据库建立连接
    require("./_connect.php");
    //根据不同情况进行不同判断;然后执行不同sql语句
    //添加购物车
    if($type == "add"){ 	
    	$sql_add = "INSERT cartshop(
        name,mouney,imgsrc 
    )
        VALUES 
    ('{$name}','{$mouney}','{$imgsrc}')
    ";
     $result_add = $conn->query($sql_add);
	 }
	
	//遍历购物车
	
	$rows = array();
	if($type == "erg"){
		$sql_erg = "SELECT * FROM cartshop";
		$result_erg = $conn->query($sql_erg);
		if($result_erg->num_rows>0){
			while($row = $result_erg->fetch_assoc()){
			 array_push($rows,$row);
			}
		}
		echo json_encode($rows);
	}
	
	//删除
	if($type == "del"){
		$sql_del = "DELETE FROM cartshop WHERE id = '$id'";
		$result_del = $conn->query($sql_del);
	}
	if($type == "alldel"){
		$sql_del = "DELETE  FROM cartshop";
		$result_del = $conn->query($sql_del);
	}
?>
