'use server';
import { config } from "@/config/config";
import { revalidatePath } from "next/cache.js";

export async function deleteTweet(props: { id: string }){
  await fetch(`${config.API_BASE_URL}tweets/${props.id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  revalidatePath('/home')
}