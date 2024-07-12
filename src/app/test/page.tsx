"use client"

import PostDisplay from "../../components/PostDisplay";

export default function TestPage() {
    return (
        <div className="w-screen h-screen bg-slate-400 py-36 px-64">
            <PostDisplay profilePicture="/sample-pfp.png" displayName="Ahmad Yaqdhan" username="Mednoob" caption="IH. ITU ANAK TETANGGA KO GITU BGT. SOMBONG BELI BARANG BARU
LANGSUNG DI PAMERIN. AKUSIH EWWW BGT YH. JYJYCK SM ORG KEA GTU.
IHHHHH." likeCount={19} commentCount={19} shareCount={19} image="/sample-pfp.png"/>
        </div>
    )
}
