import React from 'react'

function EditAccountDetails() {
  return (
    <div>
        <h1>My Account Details</h1>
        <table>
            <td>
           <tr><label for="firstname">First Name :</label>
            <input type="text" id="firstname" /></tr>
          <tr><label for="lastname">Last Name :</label>
            <input type="text" id="lastname" /></tr>
          <tr><label for="email">Email :</label>
            <input type="email" id="email" readOnly/></tr>
           <tr><label for="mobile">Mobile :</label>
            <input type="phone" id="mobile" /></tr>
            </td>
            <td>
          <tr><label for="city">City :</label>
            <input type="text" id="city" /></tr>
            <tr><label for="pincode">Pincode :</label>
            <input type="number" id="pincode" /></tr>
           <tr><label for="gender">Gender :</label>
           <input type="radio" id="m" name="gender" value="male"/>
            <label for="male">Male</label>
            <input type="radio" id="f" name="gender" value="female"/>
            <label for="female">Female</label>
            </tr>
            <tr><label for="website">Website :</label>
            <input type="text" id="website" /></tr>
            </td>
            
            <tr>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
            </textarea>
            </tr>
        </table>
        <button>Update</button>
    </div>
  )
}

export default EditAccountDetails