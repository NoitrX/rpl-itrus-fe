// LastActiveUser.tsx
import React, { useEffect } from 'react';
import feather from 'feather-icons';

interface LastActiveUserProps {
  username: string;
  displayName: string;
  profilePicture: string;
}

const LastActiveUser: React.FC<LastActiveUserProps> = ({ username, displayName, profilePicture }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="flex items-center  space-x-2">
    <img src={profilePicture} alt="Last Active User" className="h-8 w-8 rounded-full" />
    <div>
      <h4 className="font-bold text-black">{displayName}</h4>
      <span className="text-gray-500">@{username}</span>
    </div>
  </div>
  );
};

export default LastActiveUser;
