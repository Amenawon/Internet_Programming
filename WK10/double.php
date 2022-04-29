
<form action="double.php" method="GET">
<input type="text" name="num">
<input type="Submit" name="Submit">

</form>
<?php
if(isset($_GET['num'])){
    echo  $_GET['num'] * 2;
}
?>