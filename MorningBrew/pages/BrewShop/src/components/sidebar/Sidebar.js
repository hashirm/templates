import React from 'react';
import './sidebar.css'
import $ from "jquery";


const Sidebar = () => {

    const sideBar = () => {

        $(".sidebar").css("display","none")


    }


    return (
        <div className='sidebar w-25 p-5' style={{ backgroundColor: "white" }}>
            <h1>Cart2</h1>

            <svg onClick={sideBar} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

            <hr />
            <h3>I Don't Need This Crew</h3>
            <p>Size: S</p>
            <p>Color: Charcoal</p>
            <hr />
        </div>
    );
}

export default Sidebar;
