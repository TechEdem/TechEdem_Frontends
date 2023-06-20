import React, {useState} from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import UserSignup from './UserSignup';

function Registration() {

  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const handleClick = () => {
    return setClick(true);
  };
  const handleLeaveClick = () => {
    setClick(false);
  };

    const handleLogin = async(event)=>{
      event.preventDefault()
      let data = {
        email: email,
        password: password
      };
      let result = await fetch('http://localhost:6570/jesste/api/users/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      let value = await result.json(); 

    if(email || password){
        if(value.success){
          localStorage.setItem('token', value.token)
          toast.success('Login successful')
          navigate('/registered')
        }
        else{
          toast.error("Invalid email or password")
        }
      }
      else{
        setError(true);
        toast.error("Email or password must be provided")
        return false;
      }
    }

  return (
    <Container>
      <Fade>
        <div className='login_details'>
        <Typed strings={["Login"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
        </div> 

        <form onSubmit={handleLogin}>
        <div className='info'>
            <label for='Username'>Username:</label>
            <br />
            <input type='email' name='Email' id='username' placeholder='Enter username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='info'>
            <label for='Username'>Password:</label>
            <br />
            <input type='password' name='Password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='button'>
            <button>Sign In</button>
        </div>

        <div className='sign'>
          <div className='main_sign'>
            <p>New to Jesste Construction? </p>
            <div className='link' onClick={handleClick}>Sign Up</div>

            {click && (
              
              <div className='signup_details'>

                  <div className='login_details'>
                  <Typed strings={["Register"]} typeSpeed = {80} backSpeed={80} loop  className='typed_sign'/>
                  </div> 

                      <UserSignup />
                      
                  <div className='sign'>
                    <div className='main_signup_sign'>
                      <p>Already in Jesste construction? </p>
                      <div className='link' onClick={handleLeaveClick}>Sign In</div>
                      </div>
                    <a href='https://stackoverflow.com/' className='sign_help'>Need help?</a>
                  </div>

              </div>
            )

            }
          </div>
          <a href='https://stackoverflow.com/' className='help'>Need help?</a>
        </div>

        <div className='admin_link'>
          <Link to='/admin'className='admin_main_link'>Click this link to login, if you are an admin</Link>
        </div>
        <div className='admin_link'>
          <a href='/'className='admin_main_link'>Go Home</a>
        </div>
        </form>  
      </Fade>
    </Container>
  )
}

const Container = styled.div`
position: relative;

.login_details{
  padding: 5% 30%;
  width: 100%;
}
.typed{
    padding: 5% ;
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent; 
}
.info{
  padding: 2% 9%;
}
label{
  padding: 2% 0%;
  font-family: "Rubik";
  font-size: 14px;
}
input{
  width: 470px;
  height: 60px;
  border-radius: 10px;
  border: 3px solid rgba(154, 154, 154, 0.404);
  padding-left: 5%;
  outline: none;
}
.button{
    padding: 6% 9%;
}
button{
  width: 500px;
  height: 60px;
  font-size: 25px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 228, 196, 0.866);
}
button:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
}
.sign{
  padding: 0% 9%;
  display: flex;
  justify-content: space-between;
}
.main_sign{
  display: flex;
  justify-content: space-between;
  width: 48%;
  font-family: "Rubik";
  font-size: 13px;
}
.link{
  color: #f4ca98 ;
}
.link:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
a{
  text-align: center;
  color: #f4ca99;
  text-decoration: none;
}
a:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.admin_link{
  padding: 5% 9% 2% 9%;
  text-align: center;
  color: #f4ca99;
}
.admin_link: hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.admin_main_link{
  color: #f4ca98;
  text-decoration: none;
}
.admin_main_link: hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.signup_details{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
}
.typed_sign{
  background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent; 
  font-size: 50px;
  font-weight: bold;
}
.main_signup_sign{
  display: flex;
  justify-content: space-between;
  width: 50%;
}
@media (max-width: 760px){
  padding-top: 20%;

  .login_details{
    padding: 5% 0%;
    width: 100%;
  }
  .typed{
    padding: 5% 29%;
    font-size: 60px;
  }
  input{
    width: 300px;
  }
  button{
    width: 320px;
    height: 60px;
    font-size: 25px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 228, 196, 0.866);
  }
  .main_sign{
    padding-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .help{
    display: none;
  }
  .typed_sign{
    padding: 5% 18%;
    font-size: 60px;
  }
  .main_signup_sign{
    display: flex;
    justify-content: space-around;
    width: 80%;
    font-family: "Rubik";
    font-size: 13px;
  }
  .sign_help{
    display: none;
  }
  .signup_details{
    padding: 30% 0%;
  }
}
`
export default Registration
