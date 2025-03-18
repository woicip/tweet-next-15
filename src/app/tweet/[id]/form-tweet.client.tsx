"use client";
import InputTweet from "@/common/components/Tweet/InputTweet";
import { ChangeEvent, use, useActionState, useEffect, useState } from "react";
import { TweetData, updateTweet } from "./actions";
import { config } from "@/config/config";

export function FormTweet({ fetchTweet }: { fetchTweet: Promise<TweetData> }) {
  const tweet = use(fetchTweet);
  const [_, action] = useActionState(updateTweet, null);

  const [textTweet, setTextTweet] = useState<string>();
  const onChangeTweet = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextTweet(e.target.value);
  };

  useEffect(() => {
    setTextTweet(tweet.text);
  }, [tweet]);

  return (
    <form action={action} className="w-full">
      <div className="px-[20px] py-[28px] border-b border-white/20">
        <h1 className="text-2xl font-semibold text-white">Create Tweet</h1>
      </div>

      <div>
        <div className="py-[10px] px-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] bg-white/20 rounded-full overflow-hidden">
              <img
                src={config.AVATAR}
                alt="avatar"
              />
            </div>
            <p className="font-semibold">Wvoyak Akne</p>
          </div>
        </div>

        <input type="hidden" name="id" value={tweet.id} />

        <InputTweet
          id="tweet"
          name="tweet"
          value={textTweet}
          placeholder="Write your thoughts ..."
          onChange={onChangeTweet}
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
