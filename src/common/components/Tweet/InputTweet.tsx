"use client";
import classNames from "classnames";
import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useRef } from "react";

export default function InputTweet(props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  const inputRef = useRef<any>(null);

  const calcHeight = (value: string) => {
    const lineBreakAmount = value.match(/\n/g)?.length as number || 0
    const height = 60 + (lineBreakAmount * 24) + 10 + 10;
    // min-height + lines x line-height + padding + border
    return height
  }

  const onLocalInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const height = calcHeight(e.target.value);
    e.target.style.height = `${height}px`
  };

  useEffect(() => {
    const height = calcHeight(String(props.value))
    inputRef.current.style.height = `${height}px`
  }, [props.value])

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <textarea
      ref={inputRef}
      onInput={onLocalInput}
      className={classNames(
        "w-full h-[80px] py-[10px] px-[20px] leading-6 flex items-start text-xl focus:outline-none border-b border-white/20 resize-none"
      )}
      {...props}
    />
  );
}
