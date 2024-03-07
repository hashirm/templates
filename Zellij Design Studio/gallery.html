<?php
session_start();
$connection=mysqli_connect("localhost","root","","zellijst_design");

if(isset($_POST["add"]))
{
	$project_id=$_POST["project_id"];
	
	foreach($_FILES['image']['name'] as $key=>$val){
		$rand=rand('11111111','99999999');
		$path2='images/folio/';
		$path=$path2.$rand.'_'.$val;
		move_uploaded_file($_FILES['image']['tmp_name'][$key], $path);
	
	$insert=mysqli_query($connection,"insert into projects_gallery (image_id,project_id,images) values ('','$project_id','".$path."')");
}

	if($insert)
{
	header("location: finalport.php?id=".$_GET['id']);
	}
	else
	{ 
	?>

	<script>
	alert("Error");
	</script>	

	<?php 
}
}
$select=mysqli_query($connection, "Select * from projects where id='".$_GET["id"]."'");
$fetch=mysqli_fetch_array($select);

$select2=mysqli_query($connection, "Select * from projects_gallery where project_id='".$_GET["id"]."'");
	
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
        
        
        
        
        <!----javascript code for delete image --->
        <script>
function delete_image(id)
{
	if(confirm("Do you want to delete"))
	{
		window.location="delete_gallery.php?delete_image="+id;
	}
	
}

</script>
        <!----javascript code for delete image --->

    
        
        
        
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
                <div class="dynamic-title">Add Gallery</div>
                <!-- Page title  end--> 
                <!-- content  -->
                <div style="margin-top:120px; color:white; padding:10px;">
				<h2 style="background-color:#ebe8e6; color:black;">Upload Images to <?php echo $fetch["name"]; ?></h2>
				</div>
				
				<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
				
<form role="form" method="post" enctype="multipart/form-data" style="color:white;" action="#">
  
  <div class="form-group">
    <input type="text" class="form-control" name="project_id" value="<?php echo $fetch["id"]?>" hidden>
   </div>
   
  <div class="form-group">
    <input type="file" class="form-control-file" name="image[]" multiple required>
  </div>
  
  
 <input type="submit" class="btn btn-large btn-primary" name="add" value="Upload Images" style="color:white;">
</form>
				</div>
				</div>
				


<!-- Code for fetching images-->
				<div class="row" style="margin-top:30px;">
				<div class="col-md-3"></div>
				<div class="col-md-6">
				   <table class="table table-bordered" style="color:white;">
				    <thead>
				     <tr><td colspan="2"> <?php echo $fetch["name"]; ?> Images</td></tr>
				    </thead>   
				       
				    <tbody>
				        
				        <?php 
				        while($fetch2=mysqli_fetch_array($select2))
	                        {
	                        ?>
				        <tr>
				            <td><img src="<?php echo $fetch2["images"]; ?>" width="50" height="50"/></td>
				            <td><a href="javascript:delete_image(<?php echo $fetch2["image_id"]; ?>)"><button class="btn btn-danger">Delete</button></a></td>
				        </tr>
				        <?php
	                        }
	                        ?>
				       
				    </tbody>
				    
				       
				   </table>
				    
				    
				    </div>
				    </div>

<!-- Code for fetching images-->


				
		

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