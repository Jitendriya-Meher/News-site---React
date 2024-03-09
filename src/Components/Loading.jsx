import React from 'react';
import "./Loading.css"

const Loading = () => {
  return (
    <div className='flex flex-col gap-3 mt-20 items-center justify-center'>
      <div class="custom-loader"></div>
      <div className=" text-5xl text-gray-700 font-semibold">Loading</div>
    </div>
  )
}

export default Loading
