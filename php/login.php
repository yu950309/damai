<?php
include 'conn.php';
if(isset($_POST['call'])) {
    $call=$_POST['call'];
    $result=$conn->query("SELECT password FROM damai_user WHERE tellphone='$call'");
    $arr=array();
    for($i=0;$i<$result->num_rows;$i++) {
        $arr[$i]=$result->fetch_assoc();
    }
    echo json_encode($arr);
}else {
    echo '非法操作';
}

?>
