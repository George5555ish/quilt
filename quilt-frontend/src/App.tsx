import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/NavBar";
import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Mainpage } from "./components/pages/Mainpage";
import { Messages } from "./components/pages/Messages";
import { AddFriends } from "./components/pages/Addfriends";
import { Settings } from "./components/pages/Settings";

import "react-toastify/dist/ReactToastify.css";

import { useStoredFriendsList } from "./hooks/useStoredFriendsList";
import { useInitializeModules } from "./hooks/useInitializeModules";

function App() {
  useStoredFriendsList();
  useInitializeModules();

  return (
    <>
    <NavBar/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
        <Route path='/' element={<AddFriends />} />
        <Route path='/' element={<Settings />} />
        </Routes>
    </>
  );
}

export default App;
