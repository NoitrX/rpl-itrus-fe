"use client";

import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar";
import PostDisplay from "../../components/PostDisplay";
import Navbar from "../../components/navbar";
import feather from "feather-icons";

const ProfilePage = () => {
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
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <ProfileHeader />
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

const ProfileHeader = () => (
  <div className="profile-header max-h-screen mb-2 bg-white p-4 shadow">
    <div className="relative">
      <img src="/sample-pfp.png" alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="profile-info absolute bottom-0 left-4 transform translate-y-1/2">
        <img src="/sample-pfp.png" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
      </div>
      <button className="absolute top-2 mt-32 mr-6 right-2 bg-emerald-900 text-white px-6 py-2 rounded flex items-center space-x-5">
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
