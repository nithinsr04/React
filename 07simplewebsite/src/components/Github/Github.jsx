import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState({})
  // useEffect(() => {
  //     fetch('https://api.github.com/users/nithinsr04')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)})  
  //   }
  // , [])
  
  return (
    <div className='bg-red-200  text-black font-medium text-lg w-screen justify-center p-4'>
      <div> Github Followers:  {data.followers} </div>
      <img src={data.avatar_url} alt="image"  width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/nithinsr04')
    return response.json()
}