import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/gamePage/GamePage";
import { RankingsPage } from "./pages/rankingsPage/RankingsPage";
import { RecordPage } from "./pages/RecordPage";
import { NavigationBar } from "./navigationBar/NavigationBar";
import { BASE_ROUTE, RANKINGS_ROUTE, RECORD_ROUTE } from "./shared/RoutesConstants";

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path={BASE_ROUTE} element={<GamePage />} />
      <Route path={RANKINGS_ROUTE} element={<RankingsPage />} />
      <Route path={`${RECORD_ROUTE}/:id`} element={<RecordPage />} />
      <Route path="*" element={<Navigate to={BASE_ROUTE} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
