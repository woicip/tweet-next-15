'use server';
import { config } from "@/config/config";
import { redirect } from "next/navigation.js";

export type TweetData = {
  id: string;
  fullname: string;
  username: string;
  text: string;
  createdAt: string;
}

export async function getTweetById(props: { id: string }){
  const data = await fetch(`${config.API_BASE_URL}tweets/${props.id}`);
  const tweet = await data.json()
  return tweet.data as TweetData;
}

export async function updateTweet(_: any, formData: FormData){
  const payload = {
    id: formData.get('id'),
    fullname: 'Wvoyak Akne',
    username: 'wvakne',
    text: formData.get('tweet')
  }

  try {
    await fetch(`${config.API_BASE_URL}tweets/${payload.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    redirect('/home')
    
  } catch (error) {
    throw error
  }
}