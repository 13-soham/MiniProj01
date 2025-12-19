import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-25 w-25 border-4 border-zinc-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
