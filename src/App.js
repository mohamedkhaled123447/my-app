import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import CoursePage from "./components/CoursePage/CoursePage";
import NotFound from "./components/NotFound";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.npoint.io/efe20d19e15f0491fb25")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CoursePage/:id" element={<CoursePage data={data} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
