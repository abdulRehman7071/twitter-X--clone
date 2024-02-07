import Image from 'next/image'
import React from 'react'


interface UserCardProps {
    profileImageUrl: string;
    name: string;
    userName: string;

}

const UserCard: React.FC<UserCardProps> = ({ name, userName, profileImageUrl }) => {
    return (
        <div className='grid absolute bottom-5 grid-cols-12 gap-2 hover:bg-[#181818] cursor-pointer rounded-full transition-all ease-in-out p-2 px-4 mt-4 w-fit'>
            <div className='col-span-2 flex items-center'>
                <Image src={profileImageUrl} height={80} width={80} alt={name} className=' rounded-full' />
            </div>
            <div className='col-span-10 flex flex-col items-start '>
                <h2 className=' font-bold text-nowrap'>
                    {name}
                </h2>
                <h4 className=' text-md text-[#71767B]'>
                    {userName}
                </h4>
            </div>
        </div>
    )
}

export default UserCard