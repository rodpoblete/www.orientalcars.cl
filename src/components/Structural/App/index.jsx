import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/detalle" element={<Main />} />
    </Routes>
  );
}
