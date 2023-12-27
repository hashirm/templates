import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Sidebar from '../sidebar/Sidebar';
import $ from "jquery";



const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='clicktoshow' style={{ display: "block" }}>
                <Sidebar />
            </div>
            <nav className="nav">
                <div className="container menu-container">
                    <div className="menuContent">
                        <div className="logo">
                            <Link to="/">
                                <img style={{ width: "230px" }} src="BrewShop-logo.JPG" alt="" srcset="" />
                            </Link>
                        </div>
                        <div className="menuItems">
                            <ul className="menuItems-list">
                                <li>
                                    <Link className="brand" to="/arrival"> New Arrivals </Link>
                                    {/* <div className="subMenu">
                                <div>
                                    <ul>
                                        <li className="morningBrew logo"><Link className="text-decoration-none" to ="#">Morning
                                                Brew</Link></li>
                                        <li className="moneyScoop logo"><Link className="text-decoration-none" to="./pages/moneyScoope/moneyScoope.html">Money
                                                scope</Link></li>
                                        <li className="sidekick logo"><Link className="text-decoration-none" to="./pages/side-kick/sidekick.html">side kick
                                            </Link></li>
                                        <li className="moneywithkatie logo"><Link className="text-decoration-none"
                                                to="./pages/moneywithkatie/moneywithkatie.html">Money with katie</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                                </li>
                                <li>
                                    <Link to="#"> Apparel </Link>
                                    <div className="subMenu podcast" style={{ left: "-20rem" }}>
                                        <div className="d-flex justify-content-between">
                                            <ul>
                                                <li>
                                                    collections
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none"
                                                        to="./Best-seller">Best Sellers</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none" to="./pages/themoneywithcatie/themoneywithkatie.html">Morning Brew Brand</Link>
                                                </li>
                                            </ul>
                                            <ul>

                                                <li>Categories</li>

                                                <li>
                                                    <Link className="text-decoration-none"
                                                        to="./pages/businessCasual/businessCasual.html">Baby & kids</Link>
                                                </li>
                                                <li><Link className="text-decoration-none"
                                                    to="./pages/themoneywithcatie/themoneywithkatie.html">Hoodies & Sweatshirts</Link></li>
                                                <li><Link className="text-decoration-none"
                                                    to="./pages/founder-Journel/founder-Journel.html">T-Shirts</Link></li>
                                                <li>
                                                    <Link className="text-decoration-none"
                                                        to="./pages/imposter/imposter.html">All Apparel</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#"> Featured </Link>
                                    <div className="subMenu featured">
                                        <div>
                                            <ul>
                                                <li><Link className="text-decoration-none game"
                                                    to="./component/gameSection.html">Game </Link></li>
                                                <li><Link className="text-decoration-none"
                                                    to="./component/QuizezSection.html">Quizzes</Link></li>
                                                <li><Link className="text-decoration-none" to="./component/taxGuide.html">Tax
                                                    guide</Link></li>
                                                <li><Link className="text-decoration-none"
                                                    to="https://www.morningbrew.com/series/crypto">Crypto Crash course</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#"> Shop </Link>
                                    <div className="subMenu">
                                        <div>
                                            <ul>
                                                <li><Link className="text-decoration-none"
                                                    to="https://shop.morningbrew.com/?utm_source=mb_main_site&utm_medium=website&utm_campaign=main_site_top_nav">All
                                                    product</Link></li>
                                                <li><Link className="text-decoration-none"
                                                    to="https://shop.morningbrew.com/collections/apparel?utm_source=mb_main_site&utm_medium=website&utm_campaign=main_site_top_nav&utm_content=apparel">Appearal</Link>
                                                </li>
                                                <li><Link className="text-decoration-none"
                                                    to="https://shop.morningbrew.com/collections/accessories?utm_source=mb_main_site&utm_medium=website&utm_campaign=main_site_top_nav&utm_content=accessories">Accessories</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#" className='courses'> Courses </Link>
                                    <div className="subMenu courses">
                                        <div>
                                            <ul>
                                                <li id="courses"><Link className="text-decoration-none"
                                                    to="https://learning.morningbrew.com/">Learning at Morning Brew</Link>
                                                </li>
                                                <li><Link className="text-decoration-none"
                                                    to="https://learning.morningbrew.com/career">Accelarator</Link></li>
                                                <li><Link className="text-decoration-none"
                                                    to="https://learning.morningbrew.com/skills">sprints</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div className="subscribe-width">
                            <div className="d-flex align-items-center">
                                <div className="align-items-center EnterEmail">
                                    {/* <form className="d-flex align-items-center" action="">
                                <input type="email" name="" id="" required placeholder="Email"
                                    className="p-2 mx-2 form-control"/>

                                <button className="btn border-0 bg-primary p-2 text-white rounded"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        style={{marginRight:"0.45rem", fontSize:"1.7rem"}} height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </form> */}
                                </div>

                                <Link className="subscribe px-3" to="#"><svg stroke="currentColor" fill="none" stroke-width="2"
                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                    style={{ marginRight: "0.45rem", fontSize: "1.7rem" }} height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg> Subscribe
                                </Link>
                            </div>
                        </div>

                                </li>
                            </ul>
                        </div>
                       

                        <Link className="menuIcon" to="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                            viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                        </Link>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
