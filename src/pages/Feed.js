import React from 'react'
import FeedBody from '../components/FeedBody'
import FeedLeftBar from '../components/FeedLeftBar'
import FeedTopBar from '../components/FeedTopBar'
import FeedRightBar from '../components/FeedRightBar'
import Gallery from '../components/Gallery'
import EditAccountDetails from '../components/EditAccountDetails'
import AccountDetails from '../components/AccountDetails'
import SendSMS from '../components/SendSMS'
import Message from '../components/Message'
import ChangePassword from '../components/ChangePassword'

function feed() {
  return (
    <div>
    
            <FeedTopBar/>
            <table className='tb'>
                <td><FeedLeftBar/></td>
                <td><ChangePassword/></td>
                <td><FeedRightBar/></td>
            </table>
    </div>
  )
}

export default feed