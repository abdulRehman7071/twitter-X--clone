import React from 'react'
import Avatar from './Avatar'
import { BiMessageRounded } from 'react-icons/bi'
import { FaRegHeart, FaRetweet } from 'react-icons/fa6'
import { IoIosStats } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'
import { LuShare } from 'react-icons/lu'

const FeedCard = () => {
  return (
    <div className=' grid grid-cols-12 border-t border-t-[#2f3336] p-5 cursor-pointer '>
        <div className='col-span-1'>
            <Avatar/>
        </div>
        <div className=' col-span-11'>
           <h4>
            Abdul Rehman
            </h4> 
            <p>
                Over the last 2 weekends, I made our 12yr old (last weekend) and Ma (today) watch 12th Fail. 

                It’s the 4th time I saw it and I still wasn’t bored. 

                The movie hits and how. 

                Vidur (our 12yr old) remarked:
                “I wonder how would his life have turned out if he didn’t clear the exam on the last attempt?”

                Ma on the other hand remarked: 
                “Insaan ek baar thaan le, bhagwaan bhi nahi rok sakta”

                Opposite end of the spectrum reactions.
            </p>
            <div className=' flex justify-between items-center mt-5 text-[#71767b] text-xl p-4'>
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <FaRegHeart/>
                </div>
                <div>
                    <IoIosStats/>
                </div>
                <div className=' flex gap-4'>
                    <IoBookmarkOutline/>
                    <LuShare/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedCard