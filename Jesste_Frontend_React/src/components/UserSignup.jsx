import React, {useState} from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function UserSignup() {

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


    const handleRegister = async (event) => {
        event.preventDefault();    
        let data = {
          fullname: fullname,
          email: email,
          password: password,
        };  
        let result = await fetch('http://localhost:6570/jesste/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        let value  = await result.json();
        console.warn(data);
        if(fullname || email || password){
          if(value.success){
            localStorage.setItem('token', value.token)
            toast.success('Login successful')
            navigate('/dashboard')
          }
          else{
            toast.error("Invalid email, password or secretcode");
            setFullname('');
            setEmail('');
            setPassword('');
          }
        }
        else{
          toast.error('Please fill all fields');
          return false;
        }
      }

  return (
    <Container>

        <form onSubmit={handleRegister}>
        <div className='info'>
            <label for='Fullname'>Fullname:</label>
            <br />
            <input type='text' name='fullname' id='username' placeholder='Enter fullname' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
        </div>
        <div className='info'>
            <label for='Username'>Email:</label>
            <br />
            <input type='email' name='email' id='password' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='info'>
            <label for='Username'>Password:</label>
            <br />
            <input type='password' name='password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='button'>
            <button type='submit'>Sign Up</button>
        </div>
        </form>
       
    </Container>
  )
}

const Container = styled.div`
  .info{
    padding: 2% 9%;
  }
  label{
    padding: 2% 0%;
  }
  input{
    width: 470px;
    height: 60px;
    border-radius: 10px;
    border: 3px solid rgba(154, 154, 154, 0.404);
    padding-left: 5%;
  }
  .button{
      padding: 6% 9%;
  }
  button{
    width: 500px;
    height: 60px;
    font-size: 15px;
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
`
export default UserSignup
