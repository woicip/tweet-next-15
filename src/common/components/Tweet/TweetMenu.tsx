"use client";
import Link from "next/link.js";
import { deleteTweet } from "@/app/home/actions";
import { EllipsisVerticalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TweetMenu(props: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handler = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const onMenuClick = () => setIsOpen(!isOpen);

  const onDelete = () => {
    setIsOpen(false);
    deleteTweet({ id: props.id });
  };

  useEffect(() => {
    if(typeof window !== undefined){
      document.body.addEventListener("click", handler);
      return () => document.body.removeEventListener("click", handler);
    }
  }, []);

  return (
    <div className="relative">
      <div
        className="w-[32px] h-[32px] hover:bg-white/20 rounded-full transition-all flex items-center justify-center cursor-pointer"
        onClick={onMenuClick}
      >
        <EllipsisVerticalIcon />
      </div>

      {isOpen ? (
        <div
          ref={ref}
          className="w-[120px] bg-white/10  rounded-[15px] border border-white/10 backdrop-blur-lg overflow-hidden absolute right-[10px]"
        >
          <Link
            href={`/tweet/${props.id}`}
            className="w-full inline-block py-[6px] px-[15px] hover:bg-white/10 transition-all cursor-pointer"
          >
            Edit
          </Link>
          <button
            className="w-full text-left py-[6px] px-[15px] hover:bg-white/10 transition-all cursor-pointer"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
