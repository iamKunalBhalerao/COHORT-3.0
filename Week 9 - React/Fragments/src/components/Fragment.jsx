import React from "react";

const Fragment = () => {
  return (
    // React js cannot return tow or mare child when returning from a component
    // So we use Fragments to wrap the child elements (<></>)
    <>
      <h1>This is About Fragments in React js</h1>
    </>
  );
};

export default Fragment;
