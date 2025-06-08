import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  const navigate = useNavigate();

  async function sendMoneyHandler() {
    await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      {
        to: id,
        amount: amount,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      }
    );
    navigate("/dashboard");
  }

  return (
    <>
      <div className="flex justify-center h-screen bg-slate-200">
        <div className="h-full flex flex-col justify-center">
          <div className="border border-slate-200 h-min max-w-md p-4 space-y-2 w-96 bg-white shadow-lg rounded-4xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">
                    {name[0].toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2 pt-4">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Amount (in Rs)
                  </label>
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Enter Amount"
                    className="flex h-10 w-full rounded-md border border-slate-200 focus:outline focus:outline-green-300 bg-background px-3 py-2 text-sm"
                  />
                </div>
                <button
                  onClick={sendMoneyHandler}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background cursor-pointer transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                >
                  Send Money
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMoney;
