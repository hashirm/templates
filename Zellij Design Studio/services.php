<?php
session_start();
?>
<!DOCTYPE HTML>
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
            <!--=============== header start===============-->	
            <?php include("include_pages/header.php")?>
			<!--=============== header ends ===============-->	
            
<!--=============== wrapper ===============-->	
            <div id="wrapper">
                <!-- content-holder  -->
                <div class="content-holder">
                    <!-- Page title -->
                    <div class="dynamic-title">Services</div>
                    <!-- Page title  end--> 
                    <!-- content  -->
                    <div class="content">
                        <section class="parallax-section">
                            <div class="parallax-inner">
                                <div class="bg" data-bg="images/bg/2.jpg" data-top-bottom="transform: translateY(300px);" data-bottom-top="transform: translateY(-300px);"></div>
                                <div class="overlay"></div>
                            </div>
                            <div class="container">
                                <div class="page-title">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h2> Our <strong> Services</strong></h2>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="creat-list">
                                                <li><a href="index.php">Home</a></li>
                                                <li><a href="services.php">Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!-- content end -->
                    <!-- content  -->
                    <div class="content">
                        <section>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <h2 class="section-title">What <strong>We  Do </strong></h2>
                                    </div>
                                </div>
                                <div class="services-holder">
                                    <!-- 1 -->
                                    <a class="serv-item" href="#ser1">
                                        <div class="serv-item-inner">
                                            <img  src="images/folio/thumbs/3.jpg"   alt="">
                                            <div class="ser-title">
                                                <h3>3D Animation & Visualization</h3>
												</div>
                                        </div>
                                    </a>
                                    <!-- 1 end-->
                                    <!-- 2 -->
                                    <a class="serv-item" href="#ser2">
                                        <div class="serv-item-inner">
                                            <img  src="images/folio/thumbs/4.jpg"   alt="">
                                            <div class="ser-title">
                                                <h3>Interior Design</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <!-- 2 end -->
                                    <!-- 3 -->
                                    <a class="serv-item" href="#ser3">
                                        <div class="serv-item-inner">
                                            <img  src="images/folio/thumbs/5.jpg"   alt="">
                                            <div class="ser-title">
                                                <h3>Architecture Design</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <!-- 3 end -->
                                    
                                    <!-- 4 -->
                                    <a class="serv-item" href="#ser4">
                                        <div class="serv-item-inner">
                                            <img  src="images/folio/thumbs/6.jpg"   alt="">
                                            <div class="ser-title">
                                                <h3>Urban Planning</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <!-- 4 end-->
                                    
                                    
                                    
                                    <!-- 5 -->
                                    <a class="serv-item" href="#ser1">
                                        <div class="serv-item-inner">
                                            <img  src="images/folio/thumbs/6.jpg"   alt="">
                                            <div class="ser-title">
                                                <h3>Landscape Design</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <!-- 5 end-->
                                    
                                    
                                    
                                    
                                    
                                </div>
                              
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

<!-- Mirrored from monolit.kwst.net/site/index2.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 26 Sep 2020 07:30:17 GMT -->
</html>