import React from 'react'

function Form() {
  return (
    <div>
        <h1>Create New Account</h1> 
        <form> 
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" />
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" />
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="mobile">Mobile</label>
        <input type="phone" id="mobile" />
        <label for="city">City</label>
        <input type="text" id="city" />
        <label for="dob">Date Of Birth</label>
        <input type="date" id="dob" />
        <label for="username">User Name</label>
        <input type="text" id="username" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <label for="cpassword">Conf-Password</label>
        <input type="cpassword" id="cpassword" />
        <input type="submit" value="Register"/>
    </form>
   
    </div>
  )
}

export default Form