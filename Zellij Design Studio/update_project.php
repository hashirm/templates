<?php
session_start();
$connection=mysqli_connect("localhost","zellijst_alina","yJUwVE6{ow^I","zellijst_design");


    $select= mysqli_query($connection, "SELECT * from `projects` where id='".$_GET['update_id']."'");		
	$fetch=mysqli_fetch_array($select);




if(isset($_POST["update"]))
{
	

	$image=$_FILES['image']['name'];
					$dir='images/folio/';
					$imgExt = strtolower(pathinfo($image,PATHINFO_EXTENSION));
					$valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
 				 	if(in_array($imgExt, $valid_extensions))
					{ 
  					move_uploaded_file($_FILES['image']['tmp_name'], $dir.$_FILES["image"]["name"]);
					$path=$dir.$image;
					}
					else
					{
    				$errMSG = "Sorry, only JPG, JPEG, PNG files are allowed.";  
  					}
  
	if(!isset($errMSG))
	{			

	$update=mysqli_query($connection,"update projects set name='".$_POST["name"]."', details='".$_POST["details"]."', category='".$_POST["category"]."', location='".$_POST["location"]."', date='".$_POST["date"]."', image='".$path."' where id='".$_GET['update_id']."'");

	if($update)
	{	
	header("location:add_project.php?update_message");
	}
	
	else
	{ 
	?>

	<script>
	alert("Error");
	</script>	

	<?php 
}}}



if($_SESSION["admin"])
{
?>

<!DOCTYPE HTML>
<html lang="en">
    
<head>
        <!--=============== basic  ===============-->
        <meta charset="UTF-8">
        <title>Zellij Design Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
        <!--=============== css  ===============-->	
		<link type="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.css">
		<link type="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <link type="text/css" rel="stylesheet" href="css/reset.css">
        <link type="text/css" rel="stylesheet" href="css/plugins.css">
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <!--=============== favicons ===============-->
        <link rel="shortcut icon" href="images/favicon.png">
    
    
    
    
    <script>
function delete_id(id)
{
	if(confirm("Do you want to delete"))
	{
		window.location="delete.php?delete_id="+id;
	}
	
}
</script>

    
    
    
    </head>
    <body>
        <!-- loader -->
        <div class="loader">
            <div id="movingBallG">
                <div class="movingBallLineG"></div>
                <div id="movingBallG_1" class="movingBallG"></div>
            </div>
        </div>
        <!-- loader end -->
        <!--================= main start ================-->
        <div id="main">
       
	     <!--=============== header starts ===============-->	
          <?php include("include_pages/header.php"); ?>
			<!--=============== header ends ===============-->	
	   
        <!--=============== wrapper ===============-->	
        <div id="wrapper">
            <!-- content-holder  -->
            <div class="content-holder">
                <!-- Page title -->
                <div class="dynamic-title">Update Project</div>
                <!-- Page title  end--> 
                <!-- content  -->
                <div style="margin-top:120px; color:white; padding:10px;">
				<h2>Update Project</h2>
				</div>
				
				<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
				
<form role="form" method="post" enctype="multipart/form-data" style="color:white;" action="#">
  
  <div class="form-group">
    <input type="Name" class="form-control" name="name" placeholder="Enter Project Name" style="text-transform:capitalize;" value="<?php echo $fetch["name"]; ?>" required>
   </div>
   
   <div class="form-group">
    <textarea class="form-control" name="details" rows="5" col="60" placeholder="Enter Project Details" required ><?php echo $fetch["details"]; ?></textarea>
	</div>  
  
  <div class="form-group">
    <select class="form-control" id="exampleFormControlSelect1" name="category" required>
	<option value="<?php echo $fetch["category"]; ?>"><?php echo $fetch["category"]; ?></option>
    <option value="0">------Select Project Category------</option>
	<option value="Resedential Buildings">Resedential Buildings</option>
      <option value="Educational Buildings">Educational Buildings</option>
      <option value="Health Buildings">Health Buildings</option>
      <option value="Assembly Buildings">Assembly Buildings</option>
      <option value="Business Buildings">Business Buildings</option>
      <option value="Shops Buildings">Shops Buildings</option>
    </select>
  </div>
  
<div class="form-group">
    <input type="Name" class="form-control" name="location" placeholder="Enter Project Location" style="text-transform:capitalize;" value="<?php echo $fetch["location"]; ?>" required>
   </div>
   
<div class="form-group">
    <input type="date" class="form-control" name="date" style="text-transform:capitalize;" required value="<?php echo $fetch["date"]; ?>">
   </div>
   
   
   <div class="form-group">
    <input type="file" class="form-control-file" name="image">
    <br>
  <div style="float:left;"><img src="<?php echo $fetch['image']; ?>" width="70" height="50"/></div>
	
  </div>
  
   <br><br><br>

  
 <input type="submit" class="btn btn-large btn-success" name="update" value="Update" style="color:white;">
</form>
				
				
				</div>
				</div>
				
				
				

				
				
				
				
                    <!-- content end -->
                    <!-- share  -->
                    <div class="share-inner">
                        <div class="share-container  isShare"  data-share="['facebook','googleplus','twitter','linkedin']"></div>
                        <div class="close-share"></div>
                    </div>
                    <!-- share end -->
                </div>
                <!-- content-holder  end-->
            </div>
            <!-- wrapper end -->
            <!-- Fixed footer -->
            <footer class="fixed-footer">
                <div class="footer-social">
                    <ul>
                        <li><a href="#" target="_blank" ><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank" ><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank" ><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#" target="_blank" ><i class="fa fa-tumblr"></i></a></li>
                    </ul>
                </div>
                <!-- Header  title --> 
                <div class="footer-title">
                    <h2><a  href="#"></a></h2>
                </div>
                <!-- Header  title  end-->
            </footer>
            <!-- Fixed footer end-->
        </div>
        <!-- Main end -->
        <!--=============== scripts  ===============-->
        <script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/plugins.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
    </body>
</html>

<?php
}
else
{ echo "<a href='alina.php'>Login First</a>";
}
?>



