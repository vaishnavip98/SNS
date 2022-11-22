import React from 'react'

function ChangePassword() {
  return (
    <div>
        <h1>Change Password Form</h1>
        <tr><label for="opassword">Enter Current Password :</label>
            <input type="password" id="opassword" /></tr>
          <tr><label for="npassword">Enter New Password :</label>
            <input type="text" id="npassword" /></tr>
            <tr><label for="cpassword">Confirm Password :</label>
            <input type="text" id="cpassword" /></tr>
            <button>Change Password</button>
    </div>
  )
}

export default ChangePassword