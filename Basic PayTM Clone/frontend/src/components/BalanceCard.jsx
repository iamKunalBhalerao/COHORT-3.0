import React from "react";

const BalanceCard = ({ balance }) => {
  return (
    <>
      <div className="flex p-4">
        <div className="rounded-xl flex flex-col py-4 px-10 shadow-md justify-start bg-zinc-900 text-white">
          <p className="text-md font-normal text-zinc-200 text-left">
            Your Balance
          </p>
          <p className="text-2xl font-semibold">Rs. {balance}</p>
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
