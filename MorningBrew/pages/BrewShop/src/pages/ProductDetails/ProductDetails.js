import React from 'react';
import { useState, useReducer } from 'react';
import './productdetails.css';
import $, { type } from "jquery";

const ProductDetails = () => {

const shirtimg = $(".shirtGrid .zoomview img");
console.log(shirtimg)

const initialState = {backgroundColor:""};


const reducer = (state, action) => {

    switch(action.type){

        case "increment":
            return {backgroundColor:"black"};

        case "":
            return 
        default:
            return

    }


}




const [state, dispatch] = useReducer(reducer, initialState);

const [source, setSource] = useState("hoodie.webp");

shirtimg.mousemove(function (event){

      console.log(event.offsetX - 40)
       const cssAdd = $(".shirtGrid .zoomview img").css({
        "right": (event.offsetX - 550)/2 + "px",
        "top": (event.offsetY - 300)/2*-1 + "px"
       
    })

    console.log(cssAdd)

    }

)



const blueBorder = (e) => {

        const sizes = document.querySelectorAll("#sizes");
        
           sizes.forEach(element => { 
                 
                console.log(element)
                let borderColor = element.classList.contains("addColor");
        
                if(borderColor){
                let elemen = element.classList;
                elemen.remove('addColor');
                   }
           })

           let elem = e.target;

           setSource(elem.src);

           elem.classList.add("addColor");  
         
   }

    return (
        <div className='ProductDetails mt-5 pt-5'>
            <div className="container">
            <div className='productDetailsGrid mt-5 pt-5'> 
                <div className='shirtGrid'>
                    <div className='shirts'>
                            <img id = "sizes" onClick = {blueBorder} className="w-100" src="./shirt-icons-01.webp" alt="" srcset="" />   
                            <img id = "sizes" onClick = {blueBorder} className="w-100" src="./blackHoodie.webp" alt="" srcset="" /> 
                            <img id = "sizes" onClick = {blueBorder} className="w-100" src="./shirt-icons-01.webp" alt="" srcset="" />    
                            <img id = "sizes" onClick = {blueBorder} className="w-100" src="./blackHoodie.webp" alt="" srcset="" />          
                    </div>
                    
                    <div className='zoomview'>
                        <div className='image'>
                        <img className='w-100' src={source} alt="" srcset="" /> 
                        </div>
                    </div>
                
                </div>
                <div>

                </div>
            </div>
            </div>
        </div>
    );
}

export default ProductDetails;
