import React from "react";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-2">Hi This is Sidebar</div>
        <div className="bg-yellow-500 col-span-4">
          Hi This is main Conetent.
        </div>
        <div className="bg-blue-500 col-span-4">
          Hi This is Side bar of main Content.
        </div>
      </div>

      <div className="flex">
        <div className="bg-red-500 w-[20%]">Hi This is Sidebar</div>
        <div className="bg-yellow-500 w-[40%]">Hi This is main Conetent.</div>
        <div className="bg-blue-500 w-[40%]">
          Hi This is Side bar of main Content.
        </div>
      </div>
    </>
  );
};

export default App;
