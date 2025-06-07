import React from "react";
import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <>
      <main className="bg-slate-100 h-screen">
        <Navbar />
        <BalanceCard balance={"10000"} />
        <Users />
      </main>
    </>
  );
};

export default Dashboard;
