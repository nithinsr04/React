import React from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
const {userid} = useParams()
  return (
    <div className='bg-red-200  text-black font-medium text-center text-lg w-screen justify-center p-4'>
      <div> This is the userid: {userid} in page url  </div>
    </div>
  )
}

export default Blog