<?php
$connection=mysqli_connect("localhost","zellijst_alina","yJUwVE6{ow^I","zellijst_design");

$select=mysqli_query($connection, "Select * from projects where id='".$_GET["delete_id"]."'");
	if($select)
	{
	$delete=mysqli_query($connection, "delete from projects where id='".$_GET["delete_id"]."'");
	}

$row1=mysqli_fetch_array($select);
$pic2=$row1['image'];
		if($pic2)
		{
			unlink($pic2);
		}



	if($delete)
	{
	header("location:add_project.php?message");
	}
	

?>