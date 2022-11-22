import React from 'react'

function TopBar() {
  return (
    <div>
      <table className='table'>
        <tr>
          <td rowSpan='3'><h1>SNS Site</h1></td>
          <td>Username</td>
          <td>Password</td>
          <td rowSpan='3'><button>Login</button></td>
        </tr>
        <tr>

        <td>
           <div>
                <input type="text"/>
            </div>         
        </td>
        <td>
           <div>
                <input type="text"/>
            </div>         
        </td>
        </tr>
        <tr>
        </tr>
      </table>
    </div>
    
    
  )
}

export default TopBar