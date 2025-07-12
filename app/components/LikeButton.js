"use client";

import { useState } from "react";

export default function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      ❤️ Like ({likes})
    </button>
  );
}
