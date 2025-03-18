import { getTweetById } from "./actions";
import { FormTweet } from "./form-tweet.client";

export default async function DetailTweet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fetchTweet = getTweetById({ id: id });
  return <FormTweet fetchTweet={fetchTweet} />;
}
