"use client";

import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import PostDisplay from "../../components/PostDisplay";
import LastActiveUser from "../../components/ListActiveUser";
import feather from "feather-icons"; // Ensure you've imported feather-icons properly

const TestPage: React.FC = () => {
  const posts = [
    {
      displayName: "Yuna_1234",
      username: "Yuna",
      profilePicture: "/sample-pfp.png",
      caption: "canti nyoo pacar saya",
      image: "/sample-pfp.png",
      likeCount: 19000,
      commentCount: 19000,
      shareCount: 19000,
    },
    {
      displayName: "Yuna_1234",
      username: "Yuna",
      profilePicture: "/sample-pfp.png",
      caption: "IH. ITU ANAK TETANGGA KO GITU BGT. SOMBONG BELI BARANG BARU LANGSUNG DI PAMERIN. AKUSIH EWWW BGT YH. JYJYCK SM ORG KEA GTU. IHHHHH.",
      likeCount: 19000,
      commentCount: 19000,
      shareCount: 19000,
    },
  ];

  const ListactiveUsers = [
    {
      username: "rajablits",
      displayName: "NoitrX",
      profilePicture: "/sample-pfp.png",
    },
    {
        username: "rajablits",
        displayName: "NoitrX",
        profilePicture: "/sample-pfp.png",
    }
  ];

  return (
    <div className="max-w-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <img src="/sample-pfp.png" alt="Profile" className="h-10 w-10 rounded-full" />
              <input type="text" placeholder="Gamau CRT Nih ?..." className="border border-gray-300 rounded-full px-4 py-2 flex-grow" />
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <label htmlFor="file-upload" className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                <i data-feather="image"></i>
                <span>Pictures</span>
                <input id="file-upload" type="file" className="hidden" accept="image/*" />
              </label>
              <label htmlFor="video-upload" className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                <i data-feather="video"></i>
                <span>Video</span>
                <input id="video-upload" type="file" className="hidden" accept="video/*" />
              </label>
              <button className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                <i className="text-white" data-feather="edit"></i>
                <span>Create A Post</span>
              </button>
            </div>
          </div>

          <div className="space-y-4 text-black">
            {posts.map((post, index) => (
              <PostDisplay
                key={index}
                displayName={post.displayName}
                username={post.username}
                profilePicture={post.profilePicture}
                caption={post.caption}
                image={post.image}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                shareCount={post.shareCount}
              />
            ))}
          </div>
        </div>

        <div className="flex-grow p-2 ">
          <div className="max-w-screen bg-white  p-4 shadow-md">
            <h2 className="text-xl font-bold mr-10 text-green-900 mb-4">LIST ACTIVE USER</h2>
            <div className="space-y-3">
              {ListactiveUsers.map((user, index) => (
                <LastActiveUser
                  key={index}
                  username={user.username}
                  displayName={user.displayName}
                  profilePicture={user.profilePicture}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
