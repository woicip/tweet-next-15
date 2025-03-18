'use server';
import { config } from "@/config/config";
import { redirect } from "next/navigation.js";

export async function postTweet(_: any, formData: FormData): Promise<void> {
  const payload = {
    fullname: 'Wvoyak Akne',
    username: 'wvakne',
    text: formData.get('tweet')
  }

  try {
    await fetch(`${config.API_BASE_URL}tweets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

  } catch (error) {
    throw error
  }

  redirect('/home')
}