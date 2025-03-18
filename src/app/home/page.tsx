import Tweet from "@/common/components/Tweet/Tweet";
import { config } from "@/config/config";

export type TweetData = {
  status: string;
  message: string;
  data: Array<{
    id: string;
    fullname: string;
    username: string;
    text: string;
    createdAt: string;
  }>;
};

export default async function Home() {
  const tweets = await fetch(`${config.API_BASE_URL}tweets`, { cache: 'no-store' });
  const data = (await tweets.json()) as TweetData;

  return (
    <div className="w-full">
      <div className="px-[20px] py-[28px] border-b border-white/20 sticky top-0 overflow-hidden bg-black/50 backdrop-blur-2xl z-40">
        <h1 className="text-2xl font-semibold text-white">Explore</h1>
      </div>

      <div id="tweets-container">
        {data.data.map((t, i: number) => (
          <Tweet
            key={i}
            id={t.id}
            fullname={t.fullname}
            username={t.username}
            text={t.text}
            createdAt={t.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
