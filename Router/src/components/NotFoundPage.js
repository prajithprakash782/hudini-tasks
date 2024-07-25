import React from 'react'
import error_image from "../assests/error.png"

function ErrorPage() {
  return (
    <div style={{ height: "100vh",backgroundColor:"#2ecc71"}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src={error_image} alt="error" />
      <h1>404 Page Not Found</h1>
    </div>
  )
}

export default ErrorPage