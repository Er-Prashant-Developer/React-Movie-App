import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img
        className="h-[50%] object-cover"
        src="/Loader.gif"
        alt="Loading..."
      />
    </div>
  );
}

export default Loading;
