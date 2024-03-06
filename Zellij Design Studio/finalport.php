<?php
session_start();
$connection=mysqli_connect("localhost","zellijst_alina","yJUwVE6{ow^I","zellijst_design");

$select=mysqli_query($connection, "Select * from projects where id='".$_GET['id']."'");
$fetch=mysqli_fetch_array($select);


$select2=mysqli_query($connection, "Select * from projects_gallery where project_id='".$_GET['id']."'");


?>







!DOCTYPE HTML>
<html lang="en">
    
<head>
        <!--=============== basic  ===============-->
        <meta charset="UTF-8">
        <title>Zellij Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
        <!--=============== css  ===============-->	
        <link type="text/css" rel="stylesheet" href="css/reset.css">
        <link type="text/css" rel="stylesheet" href="css/plugins.css">
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <!--=============== favicons ===============-->
        <link rel="shortcut icon" href="images/favicon.png">

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
                    <div class="dynamic-title">Project Details</div>
                    <!-- Page title  end--> 
                    <!-- content  -->
                    <div class="content">
                        <section class="parallax-section">
                            <div class="parallax-inner">
                                <div class="bg" data-bg="<?php echo $fetch["image"];?>" data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);"></div>
                                <div class="overlay"></div>
                            </div>
                            <div class="container" style="background-color:#0000;">
                                <div class="page-title">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h2><strong><?php echo $fetch["name"];?></strong></h2>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="creat-list">
                                                <li><a href="index.php">Home</a></li>
                                                <li><a href="portfolio.php">Portfolio</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- content end -->
                    <div class="content">
                        <section>
                            <div class="container">
                                <!--=============== portfolio holder ===============-->
                                <div class="gallery-items   three-columns grid-small-pad lightgallery">
                                    
									
									<?php 
									while($fetch2=mysqli_fetch_array($select2))
									{	
								?>
									<!-- 1 -->
                                    <div class="gallery-item">
                                        <div class="grid-item-holder">
                                            <div class="box-item">
                                                <a data-src="<?php echo $fetch2["images"]; ?>" class="popup-image">
                                                <span class="overlay"></span> 
                                                <img  src="<?php echo $fetch2["images"]; ?>"   alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 1 end-->
									<?php
									}
									?>
                                 


								 </div>
                                <!-- end gallery items -->               
                                <div class="custom-inner-holder">
                                    <!-- 1 -->	
                                    <div class="custom-inner">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h3>Project details</h3>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <h4 style="font-size:20px;"><?php echo $fetch["name"]; ?></h4>
                                                <p style="text-align:justify;"><?php echo $fetch["details"]; ?></p>
												
                                                <div class="content-nav">
                                                   
												   <ul class="project-details">
                                            <li>
                                                <div class="pd-holder">
                                                    <h5>Category :  <a href="#"><?php echo $fetch['category']; ?></a></h5>
                                                </div>
                                            </li>
                                            
                                          <li>
                                                <div class="pd-holder">
                                                    <h5>Location :  <a href="#"><?php echo $fetch['location']; ?></a></h5>
                                                </div>
                                            </li>
											
											<li>
                                                <div class="pd-holder">
                                                    <h5>Date :  <a href="#"><?php echo $fetch['date']; ?></a></h5>
                                                </div>
                                            </li>
                                        </ul>
												   
												   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 1 -->
                                </div>
                                <!-- custom-link-holder  end -->
                            </div>
                        </section>
                    </div>
                    <!-- content end -->
                   
                   
                    <!--=============== Footer starts===============-->
 
 <?php include("include_pages/footer.html");?>
  <!--=============== Footer Ends  ===============-->


                   
                   
        </div>
        <!-- Main end -->
        <!--=============== scripts  ===============-->
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/plugins.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>
    </body>

<!-- Mirrored from monolit.kwst.net/site/portfolio-single.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 26 Sep 2020 07:35:13 GMT -->
</html>