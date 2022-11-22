import React from 'react'

function FeedBox() {
  return (
    <div>
        <form>
            <p><label for="txtarea">Share your good thoughts to world.</label></p>
            <textarea id="txtarea" name="txtarea" rows="4" cols="50"></textarea>
            <input type="submit" value="Post"/>
        </form>
    </div>
  )
}

export default FeedBox