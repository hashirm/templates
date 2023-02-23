import React from 'react';
import { useState, useEffect } from "react";
import $ from "jquery";


import './css/style.css';


const Arrival = () => {


        const [jacket, setJacket] = useState("hoodie.webp")
        
        const hoverShow = useEffect(() => {
                const description = document.querySelectorAll(".new-arrivals .productsGrid .Add-to-bag");
        
                description.forEach(
                        element => {
                                element.style.bottom = `${-1 * element.offsetHeight}px`;

                        })

                

        }, []);

       
     
        const blueBorder = (e) => {

                const sizes = document.querySelectorAll("#sizes");
                
                   sizes.forEach(element => { 
                         
                        console.log(element)
                        let borderColor = element.classList.contains("addColor")
                        const parentDiv = element.closest("div").parentElement.classList.contains("product-sizes");

                        console.log(parentDiv);
                        const changeHoodie = e.target.parentElement.classList.contains("child1");
                        const changeDiv = element.closest("div").parentElement.classList.contains("colors");
                        const changetowhite = e.target.parentElement.classList.contains("child2");

                    

                        if(borderColor && parentDiv){
                        let elemen = element.classList;
                        elemen.remove('addColor');
                           }else if(changeHoodie && changeDiv){

                                let elemen = element.classList;
                                console.log(elemen);
                                elemen.remove('addColor');
                                setJacket("blackHoodie.webp");
                           }else if(changetowhite){
                                let elemen = element.classList;
                              elemen.remove('addColor');
                                setJacket("hoodie.webp")

                           }
                   })

                   let elem = e.target;
                   elem.closest('div').parentElement.classList.add("addColor");  
                   console.log(e.target.parentElement.classList.contains("child1"));
                   console.log(setJacket) 
           }

       
        return (
                <div className='new-arrivals'>
                        <div className='container'>
                                <div className='main-image'>

                                        <img className='w-100' src="main-img.webp" alt="image" />
                                
                                </div>
                                <div className='productsGrid my-5'>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img src="" alt="" />
                                                <img className='w-100' src="/mug.webp" alt="" />
                                                <p className='fa-2x'>Excel Mug</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/excel-function-guide.webp" alt="" />

                                                <p className='fa-2x'>Excel Banner Pen</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/excel-function-guide-02.webp" alt="" />
                                                <p className='fa-2x'>Excel functional Mouse pad</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/excel-function-guide-02.webp" alt="" />
                                                <p className='fa-2x'>Mac google sheet guide</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/mug.webp" alt="" />
                                                <p className='fa-2x'>Excel Mug</p>
                                                <p className='fa-2x'>$20</p>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img src={jacket} className='w-100 mt-5' alt="" />
                                                <p className='fa-2x'>Excel Mug</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <div className='variaties-desc'>
                                                                <p>Select</p>
                                                                <div className='d-flex justify-content-between product-sizes border-0' style ={{width:"180px"}}>
                                                                        <div onClick = {blueBorder} id = "sizes">
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>S</div>
                                                                        </div>
                                                                        <div onClick = {blueBorder} id = "sizes">
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>M</div>
                                                                        </div>
                                                                        <div onClick = {blueBorder} id = "sizes">
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>L</div>
                                                                        </div>
                                                                        <div onClick = {blueBorder} id = "sizes">
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>XL</div>
                                                                        </div>
                                                                </div>
                                                                <p className='my-4'>Select</p>
                                                                <div className='colors d-flex my-2'>
                                                                        <div onClick = {blueBorder} id = "sizes" className='d-flex justify-content-center align-items-center child1'>
                                                                                <div style={{ backgroundColor: "black" }}>
                                                                                </div>
                                                                        </div>
                                                                        <div onClick = {blueBorder} id = "sizes" className='d-flex justify-content-center align-items-center child2'>
                                                                                <div className='bg-light'>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/mug.webp" alt="" />
                                                <p className='fa-2x'>Excel Mug</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <div className='variaties-desc'>
                                                                <p>Select</p>
                                                                <div className='d-flex justify-content-between product-sizes'>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>S</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>M</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>L</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>XL</div>
                                                                        </div>
                                                                </div>
                                                                <p className='my-4'>Select</p>
                                                                <div className='colors d-flex my-2'>
                                                                        <div>
                                                                                <div className='' style={{ backgroundColor: "black" }}>

                                                                                </div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light'>

                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>
                                        <div className="item shadow">
                                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                                        <p className='tagtext'>New</p>
                                                </div>
                                                <img className='w-100' src="/mug.webp" alt="" />
                                                <p className='fa-2x'>Excel Mug</p>
                                                <p className='fa-2x'>$20</p>
                                                <div className='w-100 p-3 Add-to-bag'>
                                                        <div className='variaties-desc'>
                                                                <p>Select</p>
                                                                <div className='d-flex justify-content-evenly product-sizes'>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>S</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>M</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>L</div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light d-flex justify-content-center align-items-center'>XL</div>
                                                                        </div>
                                                                </div>
                                                                <p className='my-4'>Select</p>
                                                                <div className='colors d-flex my-2'>
                                                                        <div>
                                                                                <div className='' style={{ backgroundColor: "black" }}>

                                                                                </div>
                                                                        </div>
                                                                        <div>
                                                                                <div className='bg-light'>

                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <button className='w-100 btn btn-primary btn-lg btn-block py-3'> Add to bag </button>
                                                </div>
                                        </div>


                                </div>
                                <div className='d-flex justify-content-center my-5'>
                                        <button className='btn btn-lg btn-primary'>Load more</button>
                                </div>


                        </div>

                </div>
        );
}

export default Arrival;
