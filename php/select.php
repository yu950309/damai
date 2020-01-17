<?php
include 'conn.php';
if(isset($_POST['call'])) {
    $call=$_POST['call'];
    $result=$conn->query("SELECT * FROM damai_user WHERE tellphone='$call'");
    if($result->fetch_assoc()) {
        echo 1;
    }else {
        echo 0;
    }
}else {
    echo '非法操作';
}

?>
