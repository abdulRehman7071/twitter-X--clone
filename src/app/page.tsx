'use client'
import FeedCard from "@/components/FeedCard";
import React from "react";
import { BsPeopleFill, BsSlashSquare } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaRegBookmark, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import UserCard from "@/components/UserCard";


interface TwitterSideButton {
  title: string,
  icon: React.ReactNode
}


const SideBarMenuItems: TwitterSideButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill className=" text-2xl" />
  },
  {
    title: "Search",
    icon: <IoSearch className=" text-2xl" />
  },
  {
    title: "Notification",
    icon: <GrNotification className=" text-2xl" />
  },
  {
    title: "Messages",
    icon: <HiOutlineMail className=" text-2xl" />
  },
  {
    title: "Grok",
    icon: <BsSlashSquare className=" text-2xl" />

  },
  {
    title: "Lists",
    icon: <RiFileListLine className=" text-2xl" />

  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark className=" text-2xl" />

  },
  {
    title: "Communities",
    icon: <BsPeopleFill className=" text-2xl" />

  },
  {
    title: "Premium",
    icon: <FaXTwitter className=" text-2xl" />

  },
  {
    title: "Profile",
    icon: <HiOutlineUser className=" text-2xl" />

  },
  {
    title: "More",
    icon: <CiCircleMore className=" text-2xl" />

  }
]
export default function Home() {
  const { user } = useCurrentUser();
  return (
    <div>
      <div className=" grid grid-cols-12 h-screen w-screen px-24">
        <div className="col-span-3 flex flex-col justify-start pt-4 pl-8 relative">
          <div className=" text-3xl hover:bg-[#181818] cursor-pointer rounded-full transition-all delay-75 ease-in-out p-2 object-fit h-fit w-fit">
            <FaXTwitter />
          </div>
          <div className=" mt-2">
            {SideBarMenuItems.map(item => (
              <div key={item.title} className=" flex items-center gap-4 mb-1 pr-6 py-2  text-xl hover:bg-[#181818] cursor-pointer rounded-full transition-all ease-in-out p-2 object-fit h-fit w-fit ">
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
          <div className=" mr-4 mt-2">
            <button className=" bg-[#1d9bf0] py-3 px-4 rounded-full w-full font-bold text-lg">Post</button>
          </div>
          {
            user?.firstName && user.profileImageUrl && <UserCard name={user?.firstName} userName={user?.firstName + user?.lastName} profileImageUrl={user?.profileImageUrl} />
          }
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-[#2f3336] h-screen overflow-scroll ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className=" col-span-3 w-fit">
          {!user && <LoginWithGoogle />}
        </div>
      </div>
    </div>
  )
}
