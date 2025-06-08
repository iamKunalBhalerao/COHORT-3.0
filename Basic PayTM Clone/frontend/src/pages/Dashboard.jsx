import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import Users from "../components/Users";
import axios from "axios";

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/details", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((response) => {
        setFirstName(response.data.firstName);
        setBalance(response.data.balance);
      });
  }, []);
  return (
    <>
      <main className="bg-slate-100 h-screen">
        <Navbar firstName={firstName} />
        <BalanceCard balance={balance} />
        <Users />
      </main>
    </>
  );
};

export default Dashboard;
