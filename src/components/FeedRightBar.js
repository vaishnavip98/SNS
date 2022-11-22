import React from 'react'

function FeedRightBar() {
  return (
    <div>
        <table className='tbr'>
            <p>
            People You May Know
            </p>
            <tr>
              <p><img width='40' height='40' src='https://drscdn.500px.org/photo/144561689/m%3D900/v2?sig=8a0cceeb218125ceb3ee743b8e3c55ac70aa405493f8c831e944a9f918aba407'/> Meera</p>  
              <button>Add Friend</button>
           </tr>
           <tr>
               <p><img width='40' height='40' src='https://drscdn.500px.org/photo/144561689/m%3D900/v2?sig=8a0cceeb218125ceb3ee743b8e3c55ac70aa405493f8c831e944a9f918aba407'/> Pooja</p>
               <button>Add Friend</button>
           </tr>
        
        </table>

    </div>
  )
}

export default FeedRightBar