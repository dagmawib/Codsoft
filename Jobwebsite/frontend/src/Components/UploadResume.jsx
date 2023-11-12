import React, { useState } from 'react'

function UploadResume() {
  const [file, setFile] = useState();

  function handleFile(event){
      setFile(event.target.files[0])
  }
  function handleUpload(){
    const formData = new FormData()
    formData.append('file',file)
    fetch(
      'url',
      {
        method:"POST",
        body:formData
      }
    ).then((response) => response.json()).then(
      (result) =>{
        console.log('Success',result)
      }
    ).catch(error => {
      console.error("Error:",error)
    })
  }
  return (
    <>
      <div className='wholeUplaod'>
        <div className='UploadText'>
            <form onSubmit={handleUpload}>
              <h2>Upload Your Resume</h2>
              <div className='inputBox'>
                <input type="text" name="Fname" />
                <span>First Name</span>
              </div>
              <div className='inputBox'>
                <input type="text" name="Lname" />
                <span>Last Name</span>
              </div>
              <div className='inputBox'>
                <input type="email" name='email' />
                <span>Email</span>
              </div>
              <div className='inputBox'>
              <input type="file" name="file" onChange={handleFile}/>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
    </>
  )
}

export default UploadResume