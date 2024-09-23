import React from "react";
import Layout from "../../components/layout/layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../components/context/auth";

const Login = ()=>{
    const navigate = useNavigate();
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [auth,setauth] = useAuth();

    // Submit Function
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("api/v1/auth/login",{email,password})
      if (res && res.data.success){
        toast.success(res.data.message);
        setauth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });
        localStorage.setItem("auth",JSON.stringify(res.data));
        navigate('/')

      }
      else{
        toast.error(res.data.message);
        }
    }
    catch(error){
      toast.error("Something Went Wrong");
    }
  };


    return (
        <>
            <Layout>
            <div className="Form-container">
          <div className="Form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>             
              
                <div className="mb-3">
                  <input type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
             
                </div>
                <div className="mb-3">
                  <input type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control" id="InputPassword1" placeholder="Password" required/>
                </div>  
              
                <button type="submit" className="Form-btn">Submit</button>
            </form>
          </div>
          </div>
            </Layout>
        </>
    )
}

export default Login;