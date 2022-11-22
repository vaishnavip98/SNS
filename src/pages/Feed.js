import React from 'react'
import FeedBody from '../components/FeedBody'
import FeedLeftBar from '../components/FeedLeftBar'
import FeedTopBar from '../components/FeedTopBar'
import FeedRightBar from '../components/FeedRightBar'
import Gallery from '../components/Gallery'

function feed() {
  return (
    <div>
    
            <FeedTopBar/>
            <table className='tb'>
                <td><FeedLeftBar/></td>
                <td><Gallery/></td>
                <td><FeedRightBar/></td>
            </table>
            
            
       
       
        
        
    </div>
  )
}

export default feed