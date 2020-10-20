<?
    include_once "db.php";

    $query = "create table hailli(
        num int(11) auto_increment,
        id varchar(30),
        pw varchar(200),
        pw2 varchar(200),
        name varchar(30),
        phone varchar(20),
        address text,
        primary key(num)
    )";

    mysqli_query($db,$query);

    $id = $_GET['id'];    
    $pw = $_GET['pw'];
    $pw2 = $_GET['pw2'];
    $name = $_GET['name'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    
echo $id;
$query = "insert into hailli (id,pw,pw2,name,phone,address) values('$id','$pw','$pw2','$name','$phone','$address')";

sql($query);


//echo "<script> location.href = '/hailli/sign_up_result.html'; </script>";
?>
