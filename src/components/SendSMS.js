import React from 'react'

function SendSMS() {
  return (
    <div>
        <h1>Create Album</h1>
        <label for="mobile">Enter Mobile :</label>
        <input type="text" id="albumname" /><br></br>
        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="4" cols="50">
            </textarea><br></br>
            <button>Send</button>
    </div>
  )
}

export default SendSMS