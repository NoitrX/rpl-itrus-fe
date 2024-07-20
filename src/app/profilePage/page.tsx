"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import PostDisplay from "../../components/PostDisplay";
import FixedDialog from "../../components/FixedDialog";
import Navbar from "../../components/navbar";
import feather from "feather-icons";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);

  const posts = [
    {
      displayName: "Yuna_1234",
      username: "Yuna",
      profilePicture: "/sample-pfp.png",
      caption: "IH. ITU ANAK TETANGGA KO GITU BGT. SOMBONG BELI LAPTOP  LANGSUNG DI PAMERIN. AKUSIH EWWW BGT YH. JYJYCK SM ORG KEA GTU. IHHHHH.",
      likeCount: 19000,
      commentCount: 19000,
      shareCount: 19000,
    },
    {
      displayName: "Yuna_1234",
      username: "Yuna",
      profilePicture: "/sample-pfp.png",
      caption: "canti nyoo pacar saya",
      likeCount: 19000,
      commentCount: 19000,
      shareCount: 19000,
    },
  ];

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="max-w-screen bg-white flex flex-col">
      <FixedDialog isOpen={open} outsideOnClick={() => setOpen(false)}>
        <div className="rounded bg-white">
          <div className="p-2 flex items-center gap-3">
            <button onClick={() => setOpen(false)}><i data-feather="x"></i></button>
            <h1 className="font-bold text-lg uppercase">Edit Profile</h1>
          </div>
          <hr className="w-full border-t border-black" />
          <div className="py-3 relative">
            <div className="w-[40rem] h-32 relative group overflow-hidden">
              <div className="collapse group-hover:visible flex justify-center items-center absolute w-full h-full bg-opacity-50 opacity-0 group-hover:opacity-100 duration-200 bg-black cursor-pointer">
                <i data-feather="image" className="text-white"></i>
              </div>
              <img src="/sample-pfp.png" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-28 group rounded-full overflow-hidden absolute top-16 left-10">
              <div className="collapse group-hover:visible flex justify-center items-center absolute w-full h-full bg-opacity-50 opacity-0 group-hover:opacity-100 duration-200 bg-black cursor-pointer">
                <i data-feather="edit" className="text-white"></i>
              </div>
              <img src="/sample-pfp.png" className="w-full h-full object-cover" />
            </div>
            <div className="mt-14 mb-5 ml-10">
              <p className="font-bold uppercase">Name</p>
              <input type="text" className="rounded shadow-slate-400 shadow-md w-96 py-1 px-3 text-sm placeholder:italic" placeholder="Lorem ipsum dolor sit amet consectetur" />
              <p className="font-bold uppercase mt-3">Username</p>
              <input type="text" className="rounded shadow-slate-400 shadow-md w-96 py-1 px-3 text-sm placeholder:italic" placeholder="Lorem ipsum dolor sit amet consectetur" />
              <p className="font-bold uppercase mt-3">Bio</p>
              <input type="text" className="rounded shadow-slate-400 shadow-md w-96 py-1 px-3 text-sm placeholder:italic" placeholder="Lorem ipsum dolor sit amet consectetur" />
            </div>
          </div>
          <hr className="w-full border-b border-emerald-900" />
          <div className="py-3 px-5">
            <button className="bg-emerald-900 p-2 flex items-center gap-2 text-white rounded">
              <i data-feather="save"></i>
              <p>SAVE</p>
            </button>
          </div>
        </div>
      </FixedDialog>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <ProfileHeader setOpen={setOpen} />
          <div className=" text-white flex justify-center px-4 space-x-80 py-2 bg-emerald-900 rounded-2xl">
            <button className="font-bold flex gap-2 py-1 my-2 mx-4 border-b-2 border-white">
              <i className="text-white" data-feather="plus-square"></i>POST
            </button>
            <button className="font-bold flex gap-2 py-1 my-2 mx-4">
              <i className="text-white " data-feather="heart"></i>LIKE
            </button>
          </div>
          <div className="post-section text-black p-4">
            {posts.map((post, index) => (
              <PostDisplay
                key={index}
                displayName={post.displayName}
                username={post.username}
                profilePicture={post.profilePicture}
                caption={post.caption}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                shareCount={post.shareCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileHeader = ({ setOpen }: { setOpen: (val: boolean) => void }) => (
  <div className="profile-header max-h-screen mb-2 bg-white p-4 shadow">
    <div className="relative">
      <img src="/sample-pfp.png" alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="profile-info absolute bottom-0 left-4 transform translate-y-1/2">
        <img src="/sample-pfp.png" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
      </div>
      <button className="absolute top-2 mt-32 mr-6 right-2 bg-emerald-900 text-white px-6 py-2 rounded flex items-center space-x-5" onClick={() => setOpen(true)}>
        <i className="text-white h-5" data-feather="edit"></i>
        EDIT
      </button>
    </div>
    <div className="mt-16 mb-7  ml-4 flex items-start justify-between">
      <div>
        <h1 className="text-2xl text-black font-bold">@Yuna</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="flex space-x-4  mr-6">
        <span className="text-black text-right">
          <div className="font-bold">Followers</div>
          <div className="text-sm text-center">999k</div>
        </span>
        <span className="text-black text-right">
          <div className="font-bold ">Following</div>
          <div className="text-sm text-center">1M</div>
        </span>
      </div>
    </div>
  </div>
);

export default ProfilePage;
