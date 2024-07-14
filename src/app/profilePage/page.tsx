"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import PostDisplay from "../../components/PostDisplay";
import feather from "feather-icons";
import Navbar from "../../components/navbar";

const ProfilePage = () => {
  const posts = [
    {
      displayName: "Yuna_1234",
      username: "Yuna",
      profilePicture: "/sample-pfp.png",
      caption: "IH. ITU ANAK TETANGGA KO GITU BGT. SOMBONG BELI BARANG BARU LANGSUNG DI PAMERIN. AKUSIH EWWW BGT YH. JYJYCK SM ORG KEA GTU. IHHHHH.",
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

  return (
    <div className="flex max-h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <div className="profile-header max-h-screen bg-white p-4 shadow">
          <div className="relative">
            <img src="/sample-pfp.png" alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="profile-info absolute bottom-0 left-4 transform translate-y-1/2">
              <img src="/sample-pfp.png" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
            </div>
            <button className="absolute top-2 mt-32 mr-6 right-2 bg-green-900 text-white px-6 py-2 rounded flex items-center  space-x-5 ">
            <i className="text-white h-5" data-feather="edit"></i>
              EDIT
            </button>
          </div>
          <div className="mt-16  ml-4 flex items-center justify-between ">
            <div>
              <h1 className="text-2xl text-black font-bold">@Yuna</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur</p>
              <div className="flex space-x-4 mt-2">
                <span className="text-black">Followers <br>
                </br> 999K</span>
                <span className="text-black">Following <br>
                </br> 1M</span>
              </div>
            </div>
            <div className="mr-4">
              <i data-feather="more-vertical"></i>
            </div>
          </div>
        </div>
        <div className="post-like-section bg-green-700 text-white p-4 flex justify-around">
          <button className=" hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          <i className="text-white h-5" data-feather="post"></i>
            POST
          </button>
          <button className=" hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          <i className="text-white h-5" data-feather="like"></i>
            LIKE
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
  );
};

export default ProfilePage;