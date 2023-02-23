import React from 'react';
import './form.css'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import {crud} from '../../firebase/config'


const Form = () => {
   
   const [name, setName] = useState(null)
   const [skills, setSkills] = useState(null)
   const [email, setEmail] = useState(null)
   
  const handleClick = () => {

    const doc = { name, skills, email}

    try{
    crud.collection('user-data').add(doc)
        
    }catch(err)
    {
    console.log(err.message)
    }


   }
   
    return (
        <div className='form'>
            <div className='form-bg'>
            <form>
                <label>Name</label>
                <input className='form-control' type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <label>Skills</label>
                <input className='form-control' type="text" name="skills" onChange={(e) => setSkills(e.target.value)} />
                <label>Email</label>
                <input  className='form-control' type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <Button className="btn btn-primary" onClick={() => handleClick()}>Submit</Button>
            </form>
            </div>
        </div>
    );
}

export default Form;
