import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[calc(100vh-18rem)]">
      <h3 className="text-3xl opacity-90 dark:text-yellow-500 text-yellow-700">
        Error 404 | Page Not Found
      </h3>
      <h1 className="text-5xl dark:text-yellow-500 text-yellow-700">
        Sorry, this page doesnt exist {`:(`}
      </h1>
      <Link
        className="dark:text-yellow-500 text-yellow-700 underline opacity-80 hover:opacity-60 active:opacity-50 mt-5"
        href="/"
      >
        &larr; Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
