"use client";

import { useEffect } from "react";
import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import PostDisplay from "../../components/PostDisplay";
import LastActiveUser from "../../components/ListActiveUser";
import feather from "feather-icons"; 


const DetailPage: React.FC = () => {
   useEffect(() => {
      feather.replace();
    }, []);

   const posts = [
      {
        displayName: "Yuna_1234",
        username: "Yuna",
        profilePicture: "/sample-pfp.png",
        caption: "IH. ITU ANAK TETANGGA KO GITU BGT. SOMBONG BELI BARANG BARU LANGSUNG DI PAMERIN. AKUSIH EWWW BGT YH. JYJYCK SM ORG KEA GTU. IHHHHH.",
        likeCount: 19000,
        commentCount: 19000,
        shareCount: 19000,
      }
    ];
  
    const ListactiveUsers = [
      {
        username: "rajablits",
        displayName: "NoitrX",
        profilePicture: "/sample-pfp.png",
      },
      {
          username: "expectik2045",
          displayName: "kalengregal",
          profilePicture: "/sample-pfp.png",
      }
    ];

   return(
      <div className="max-w-screen bg-[#F8F8F8] flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-12 border border-gray-400 m-3 rounded-lg bg-white shadow-lg">
          <div className=" text-black border-b border-emerald-500 ">
          <div className="font-bold flex"><i data-feather="chevron-left"></i><a href="#">BACK</a></div>
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
          <p className="font-bold text-2xl mt-3 ml-5">Comments</p>
          <div className="flex items-center mb-2 border-b border-emerald-500 py-4 pl-3.5">
              <img src="/sample-pfp.png" alt="Profile" className="h-10 w-10 rounded-full " />
              <input type="text" placeholder="Post A Comment" className="outline-0 h-20 px-4 py-2 flex-grow "/>
              <div className="mr-2">
                <i data-feather="paperclip"></i>
              </div>
              <button className="bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                <i className="text-white" data-feather="edit"></i>
                <span>Create Comment</span>
            </button>
          </div>
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

        <div className="p-2 mt-1">
          <div className="w-64 h-screen bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold text-center mr-4 text-green-900 mb-4">LIST ACTIVE USER</h2>
            <div className="space-y-3 bg-[#F8F8F8] p-2">
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
   )
}
export default DetailPage;
