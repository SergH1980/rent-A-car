import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../MainLayout/MainLayout";

const HomePage = lazy(() => import(`../../pages/HomePage`));
const CatalogPage = lazy(() => import(`../../pages/CatalogPage`));
const FavoritePage = lazy(() => import(`../../pages/FavoritePage`));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
      <Route path="*" redirectTo="/" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
