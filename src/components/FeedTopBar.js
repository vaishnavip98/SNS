import React from 'react'

function FeedTopBar() {
  return (
    <div>
        <table className='table'>
            <tr>
                <td><h1>Welcome</h1></td>
                <td><input type="text"/></td>
                <td><button>Search</button></td>
                <td><button>Logout</button></td>
            </tr>
        </table>            
        </div>
  )
}

export default FeedTopBar