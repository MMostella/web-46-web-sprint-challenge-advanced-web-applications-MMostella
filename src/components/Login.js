import React,{ useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState({
    username: 'Lambda',
    password: 'School'
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault();
    return axios
      .post(`http://localhost:5000/api/login`)
      .then(res => {
        console.log(res)
        // localStorage.setItem('token', res.data)
        // setError('');
        // push('/bubbles')
      })
      .catch(err => {
        // if (err.response.status === 403){
        //   setError('Username or Password Incorrect!!!')
        // }
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <input
            id='username'
            type='text'
            name='username'
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            id='password'
            type='password'
            name='password'
            value={formValues.password}
            onChange={handleChange}
          />

          <p id="error" className="error">{error}</p>

          <button id='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"