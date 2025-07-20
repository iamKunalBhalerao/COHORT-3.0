import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { TiDocumentAdd } from "react-icons/ti";

const Documents = () => {
  return (
    <>
        <DashboardTBar btnLabel="Add Doc" heading="All Docs" startIcon={<TiDocumentAdd />} />
      <div className="">
      </div>
    </>
  );
};

export default Documents;
