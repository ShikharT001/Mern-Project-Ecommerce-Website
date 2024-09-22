import React,{useState} from "react";
import Layout from "../../components/layout/layout";
import "../../styles/authstyle.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = ()=>{
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  // const [error,setError] = useState("");
const navigate = useNavigate()
// Submit Function
const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const res = await axios.post("api/v1/auth/register",{name,email,password,phone,address})
    if (res && res.data.success){
      toast.success(res.data.message);
      navigate('/login')
    }
    else{
      toast.error(res.data.message);
      }
  }
  catch(error){
    toast.error("Something Went Wrong");
  }
};


    return(
        <>
        <Layout>
          <div className="Form-container">
          <div className="Form">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>             
              <div className="mb-3">
                <input type="name" value={name} 
                onChange={(e)=>{setName(e.target.value)}}
                 className="form-control" 
                 id="InputName" 
                 placeholder="FullName"
                 required/>
              </div>
                <div className="mb-3">
                  <input type="email" value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                   className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
                  
                </div>
                <div className="mb-3">
                  <input type="password" value={password} 
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  className="form-control" id="InputPassword1" placeholder="Password" required/>
                </div>  
              <div className="mb-3">
                <input type="number" value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
                className="form-control" id="InputPhone" placeholder="Phone no." required/>
              </div>
                
              <div className="mb-3">
                <input type="text" value={address}
                onChange={(e)=>{
                  setAddress(e.target.value)
                }}
                className="form-control" id="InputPhone" placeholder="Address" required/>
              </div>
                <button type="submit" className="Form-btn">Submit</button>
            </form>
          </div>
          </div>
        </Layout>
        </>
    )
}

export default Register;