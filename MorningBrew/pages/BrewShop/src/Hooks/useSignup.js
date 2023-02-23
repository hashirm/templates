import {useState} from 'react'
import { projectAuth } from "../firebase/config"


export const useSignup = () => {

    const [error, setError] = useState(null)    
    const [ispending, setIspending] = useState(false)

    const signup = async (email, password, name) => {

        setError(null)
        setIspending(true)
        try{
            
       const res = await projectAuth.createUserWithEmailAndPassword(email, password)
       console.log(res.user)
       
            if(!res){
              throw new Error("could not complete signup")
            }
            await res.user.updateProfile({name});
            setIspending(false)
            setError(null)

        } catch(err){
            console.log(err.message)
            setError(err.message)
            setIspending(false)
        }


    }


    return {signup, error, ispending}

}