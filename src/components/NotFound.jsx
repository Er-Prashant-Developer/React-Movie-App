import React from 'react'
const NotFound = () => {
  return (
     <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img
        className="h-[50%] object-cover"
        src="/Error.gif"
        alt="Error..."
      />
    </div>
  )
}

export default NotFound