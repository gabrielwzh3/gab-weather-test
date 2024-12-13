import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import NotFound from "./components/NotFound";

const App = () => {
  const routeMap = [
    {
      path: "/",
      element: <Navigate to="/weather" />,
    },
    {
      path: "/weather",
      element: <Weather />,
    },
  ];
  return (
    <Routes>
      {routeMap.map((item, index) => {
        const { path, element } = item;
        return <Route key={index} path={path} element={element} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
