import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { AiFillGift } from "react-icons/ai"; //It is usefull to call icons directly from react icons site
import { useAuth } from '../context/auth';
import toast from "react-hot-toast";



const Header=()=>{
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
    </button> 
    <Link to='/' className="navbar-brand" href="#"><AiFillGift/><label>Freshly</label></Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      {/* <Link to='/' className="navbar-brand" href="#"><AiFillGift/><label>Freshly</label></Link> */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category' className="nav-link" aria-current="page">Category</NavLink>
        </li>
        {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login" onClick={handleLogout}
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="/cart">cart (0)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Header;