<?php
include 'conn.php';
if(isset($_GET['sid'])) {
    $sid=$_GET['sid'];
    $result=$conn->query("SELECT * FROM damai WHERE sid='$sid'");
    $arr=array();
    for($i=0;$i<$result->num_rows;$i++) {
        $arr[$i]=$result->fetch_assoc();
    }
    echo json_encode($arr);
}else {
    echo '非法操作';
}


?>