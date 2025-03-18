"use client";
import { postTweet } from "./actions";
import { useActionState } from "react";
import InputTweet from "@/common/components/Tweet/InputTweet";
import { config } from "@/config/config";

export default function TweetPage() {
  const [_, action] = useActionState(postTweet, null);

  return (
    <form action={action} className="w-full h-screen">
      <div className="px-[20px] py-[28px] border-b border-white/20">
        <h1 className="text-2xl font-semibold text-white">Create Tweet</h1>
      </div>

      <div>
        <div className="py-[10px] px-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] bg-white/20 rounded-full overflow-hidden">
              <img src={config.AVATAR} alt="avatar" />
            </div>
            <p className="font-semibold">Wvoyak Akne</p>
          </div>
        </div>
        <InputTweet
          id="tweet"
          name="tweet"
          placeholder="Write your thoughts ..."
        />
        <div className="p-[20px]">
          <button
            type="submit"
            className="w-fit py-[10px] px-[15px] bg-blue-400 text-white font-bold rounded-full flex items-center gap-[10px] cursor-pointer"
          >
            Post Tweet
          </button>
        </div>
      </div>
    </form>
  );
}
