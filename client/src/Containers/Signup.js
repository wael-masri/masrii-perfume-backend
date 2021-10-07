import React,{useEffect} from 'react';
import axios from "axios";
import Formsignup from '../Components/Formsignup/Index';

const Signup = () => {

  // useEffect(() => {
  //   const fetch = async () =>{
  //     const res = await axios.get("http://localhost:5000/api/users/");
  //     console.log("hello",res);
  //   }
  //   fetch()
  //  }, [])


    return (
        <>
          <div style={{height:'238px',background:'#a07d5a'}}></div>
          <Formsignup />
            
        </>
    )
}

export default Signup