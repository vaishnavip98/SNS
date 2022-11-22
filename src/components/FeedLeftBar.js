import React from 'react'
import FeedProfile from './FeedProfile'
import FeedProfileBtns from './FeedProfileBtns'

function FeedLeftBar() {
  return (
    <div>
        <table className='tbl'>
            <tr><FeedProfile/></tr>
            <tr><FeedProfileBtns/></tr>
        </table>
       
        
    </div>
  )
}

export default FeedLeftBar