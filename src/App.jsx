import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/main/Main";

export const App = () => {
  return (
    <div className="body">
      <Header />
      <Main />
    </div>
  );
};
