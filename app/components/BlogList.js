import LikeButton from "./LikeButton";
import { Suspense } from "react";

async function getPosts() {
  await new Promise((res) => setTimeout(res, 500)); // Simulate delay

  return [
    {
      id: 1,
      title: "What is RSC?",
      content: "React Server Components explained simply.",
    },
    { id: 2, title: "Why It Matters", content: "Speed, security, and sanity." },
    {
      id: 3,
      title: "Client vs Server Components",
      content: "When to use each, and why it matters for performance.",
    },
    {
      id: 4,
      title: "Tailwind in RSC Apps",
      content: "Build beautiful UIs without writing a line of CSS.",
    },
    {
      id: 5,
      title: "Deploying to Vercel",
      content: "Push your RSC app to production in minutes.",
    },
    {
      id: 6,
      title: "Common Mistakes with RSC",
      content: "Avoid hydration errors, props mismatches, and bad patterns.",
    },
  ];
}

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded bg-white shadow hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <Suspense fallback={<div>Loading Like button...</div>}>
            <LikeButton postId={post.id} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
