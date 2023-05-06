import { useState } from "react";
import "./App.css";
import "./components/Home/Home";
import "./components/Library/LibraryDashboard";
import "./components/Attendance/AttendanceDashboard";
import "./components/Footer/Footer";
import "./components/Inventory/InventoryDashboard";

import Home from "./components/Home/Home";
import LoginForm from "./components/login_form/LoginForm";

function App() {
  return (
    <>
      <Home />
      {/* <LoginForm/> */}
    </>
  );
}

export default App;
