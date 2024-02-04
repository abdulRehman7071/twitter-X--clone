import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div className='h-8 w-8 overflow-hidden relative'>
        <Image fill className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&usqp=CAU" alt="Rounded avatar" />
    </div>
  )
}

export default Avatar