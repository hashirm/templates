import React from 'react';
import './css/style.css';


const Bestseller = () => {

    const image = "assets/main-img.webp";

    console.log(image);

    return (
        <div className='new-arrivals'>
            <div className='container'>
                <div className='main-image'>
                    <img className='w-100' src = "Best-seller-image.webp" alt="image" />
                </div>
                <div className='productsGrid my-5'>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img src="" alt=""  />
                                <img className='w-100' src="/mug.webp" alt="mug" />
                                <p className='fa-2x'>Excel Mug</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>
                        <div className="item shadow p-2">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/excel-function-guide.webp" alt=""  />
                                
                                <p className='fa-2x'>Excel Banner Pen</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Best Seller</p>
                                </div>
                                <img className='w-100' src="/excel-function-guide-02.webp" alt=""  />
                                <p className='fa-2x'>Excel functional Mouse pad</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/excel-function-guide-02.webp" alt=""  />
                                <p className='fa-2x'>Mac google sheet guide</p>
                                <p className='fa-2x'>$20</p>
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/mug.webp" alt=""  />
                                <p className='fa-2x'>Excel Mug</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/mug.webp" alt=""  />
                                <p className='fa-2x'>Excel Mug</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/mug.webp" alt=""  />
                                <p className='fa-2x'>Excel Mug</p>
                                <p className='fa-2x'>$20</p> 
                                <br />  
                        </div>
                        <div className="item shadow">
                                <div className="tag text-white position-relative d-flex justify-content-center align-items-center">
                                    <p className='tagtext'>Back in Stock</p>
                                </div>
                                <img className='w-100' src="/mug.webp" alt=""  />
                                <p className='fa-2x'>Excel Mug</p>
                                <p className='fa-2x'>$20</p>
                                <br />
                        </div>            


                </div>
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn btn-lg btn-primary'>Load more</button>
                </div>


            </div>
            <div className='w-100 bg-primary position-absolute'>

                <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                        <li>about</li>
                        <li>Services</li>
                </ul>


            </div>

        </div>
    );
}

export default Bestseller;
