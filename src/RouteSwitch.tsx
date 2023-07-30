import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_Page from "./features/Login_Page/LoginPage";
import Page_Search from "./features/Page_Search/Page_Search";

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path={`/DiscJockey/`} element={<Page_Search />} />
        <Route path={`/DiscJockey/Login`} element={<Login_Page />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
