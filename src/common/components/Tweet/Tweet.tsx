"use client";
import moment from "moment/moment.js";
import { TweetMenu } from "./TweetMenu";
import { config } from "@/config/config";
import { Suspense } from "react";

export interface TweetProps {
  id: string;
  fullname: string;
  username: string;
  text: string;
  createdAt: string;
}

export default function Tweet(props: TweetProps) {
  return (
    <div className="p-[20px] flex flex-col gap-[10px] border-b border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="w-[46px] h-[46px] bg-white/20 rounded-full overflow-hidden">
            <img
              src={config.AVATAR}
              alt="avatar"
            />
          </div>
          <div>
            <h1 className="font-semibold leading-none">{props.fullname}</h1>
            <span className="text-[#919191]">@{props.username}</span>
          </div>
        </div>

        <Suspense>
          <TweetMenu id={props.id} />
        </Suspense>
      </div>

      <div>
        <pre className="text-xl font-sans">
          {props.text}
        </pre>
      </div>

      <div className="flex items-center gap-[8px]">
        <span className="text-[#919191]">
          {moment(props.createdAt).format("DD MMM YYYY")}
        </span>
        <div className="w-[3px] h-[3px] bg-white/30 rounded-full"></div>
        <span className="text-[#919191]">
          {moment(props.createdAt).format("HH:mm")}
        </span>
      </div>
    </div>
  );
}
