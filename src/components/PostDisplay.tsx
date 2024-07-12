import { useEffect } from "react";
import feather from "feather-icons";

export default function PostDisplay(
    data: {
        displayName: string,
        username: string,
        profilePicture: string,
        caption?: string,
        image?: string,
        likeCount: number,
        commentCount: number,
        shareCount: number
    }
) {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="w-full relative bg-white rounded-xl px-4 flex gap-3">
            <div className="object-cover overflow-hidden my-4 w-11 h-11 rounded-full">
                <img src={data.profilePicture} />
            </div>
            <div className="flex flex-col">
                <div className="mt-2">
                    <p className="text-xl font-bold">{data.displayName}</p>
                    <p className="text-xs text-gray-500">@{data.username}</p>
                </div>
                <div className="mt-2 flex flex-col gap-3">
                    {data.caption && <p className="text-xs">{data.caption}</p>}
                    {data.image && <div className="object-contain max-w-36"><img src={data.image} /></div>}
                </div>
                <div className="my-4 font-extrabold flex gap-7">
                    <div className="flex gap-3">
                        <i data-feather="heart"></i>
                        <p>{data.likeCount}</p>
                    </div>
                    <div className="flex gap-3">
                        <i data-feather="message-square"></i>
                        <p>{data.commentCount}</p>
                    </div>
                    <div className="flex gap-3">
                        <i data-feather="share-2"></i>
                        <p>{data.shareCount}</p>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-4">
                <i data-feather="more-vertical"></i>
            </div>
        </div>
    )    
}