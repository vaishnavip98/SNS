import React from 'react'

function Gallery() {
  return (
    <div>
        <h1>Create Album</h1>
        <form>
        <label for="albumname">Album Name :</label>
        <input type="text" id="albumname" /><br></br>
        <label for="coverimage">Cover Image :</label>
        <input class="file-upload-input" type='file' accept="image/*" /><br></br>
        <input type="submit" value="Create Album"/>
        </form>
        
    </div>
  )
}

export default Gallery