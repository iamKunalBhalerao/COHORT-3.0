import React from "react";

const BalanceCard = ({ balance }) => {
  return (
    <>
      <div className="flex w-full p-4">
        <div className="rounded-xl gap-2 w-full flex flex-col py-4 px-10 border border-slate-300 justify-start text-black">
          <p className="text-2xl font-medium text-zinc-800 text-left">
            Total Balance
          </p>
          <p className="text-3xl font-bold">Rs. {balance}</p>
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
