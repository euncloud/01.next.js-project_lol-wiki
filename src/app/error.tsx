"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900">
      <div className="text-red-600 text-3xl font-bold mb-4">{`Something went wrong! :(`}</div>
      <p className="text-lg text-white mb-4">{error.message}</p>
      <button
        className="px-6 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-800 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
