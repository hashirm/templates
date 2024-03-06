  <header>
                <!-- header-inner  -->
                <div class="header-inner">
                    <!-- header logo -->
                    <div class="logo-holder">
                        <a href="index.html"><img src="images/logoz.png" alt=""></a>
                    </div>
                    <!-- header logo end -->
                    <!-- mobile nav button -->
                    <div class="nav-button-holder">
                        <div class="nav-button vis-m"><span></span><span></span><span></span></div>
                    </div>
                    <!-- mobile nav button end -->
                    <!-- navigation  -->
                    <div class="nav-holder">
                        <nav>
                            <ul>
                                <li>
                                    <a href="./index.php" class="act-link">Home</a>
                                </li>
                                <li>
                                    <a href="./about.php">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Portfolio</a>
                                    <!-- Scroll navigation  -->
                                
								<ul>
                                    <li><a href="portfolio.php?res">Resedential Buildings</a></li>
                                    <li><a href="portfolio.php?edu">Educational Buildings</a></li>
                                    <li><a href="portfolio.php?health">Health Buildings</a></li>
                                    <li><a href="portfolio.php?assem">Assembly Buildings</a></li>
                                    <li><a href="portfolio.php?bus">Buisness Buildings</a></li>
                                    <li><a href="portfolio.php?shops">Shops Buildings</a></li>
                                </ul>
								</li>
								
                                <li><a href="./services.php">Our Services</a></li>
                                <li><a href="contact.php">Contact Us</a></li>
                                <?php if($_SESSION['admin']) { ?>
                                <li><a href="./projects.php">Gallery</a></li>
                                <li><a href="./add_project.php">Projects</a></li>
                                <li><a href="./logout.php">Logout</a></li>
                                <?php } ?>
                                
                                </ul>
                        </nav>
                    </div>
                    <!-- navigation  end -->
                </div>
                <!-- header-inner  end -->
            </header>