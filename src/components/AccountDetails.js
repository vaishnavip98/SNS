import React from 'react'

function AccountDetails() {
  return (
    <div>
         <h1>My Account Details</h1>
        <table>
            <td>
           <tr><label for="firstname">First Name :</label>
           <label>Parth</label></tr>
          <tr><label for="lastname">Last Name :</label>
            <label>Samthaan</label></tr>
          <tr><label for="email">Email :</label>
            <label>ps@gmail.com</label>
            </tr>
           <tr><label for="mobile">Mobile :</label>
            <label>9988776655</label></tr>
            </td>
            <td>
          <tr><label for="city">City :</label>
            <label></label>Surat</tr>
            <tr><label for="pincode">Pincode :</label>
            <label></label></tr>
           <tr><label for="gender">Gender :</label>
            <label></label>
            </tr>
            <tr><label for="website">Website :</label>
           <label></label></tr>
            </td>    
            <tr>
            <label>About Us:</label>
            </tr>
        </table>
        <button>Edit Details</button>
    </div>
  )
}

export default AccountDetails