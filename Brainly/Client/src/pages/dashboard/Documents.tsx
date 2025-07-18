import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { TiDocumentAdd } from "react-icons/ti";

const Documents = () => {
  return (
    <>
      <div className="">
        <DashboardTBar btnLabel="Add Doc" heading="All Docs" startIcon={<TiDocumentAdd />} />
      </div>
    </>
  );
};

export default Documents;
