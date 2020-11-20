import React,{ useEffect, useState} from "react";
import DashboardHeader from "../global/DashboardHeader";

import Sidebar from "./Sidebar";

const Dashboard = () => {


  return (
    <>
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <Sidebar />
        <div className="dashboard__content">
          <DashboardHeader />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
