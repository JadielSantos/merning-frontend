// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./user/pages/Users";
import NotFound from "./pages/NotFound";
import NewPlace from "./places/pages/NewPlace";
import Places from "./places/pages/Places";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            {/* <Route path=":teamId" element={<Team />} /> */}
            {/* <Route path="new" element={<NewTeamForm />} /> */}
            {/* <Route index element={<LeagueStandings />} /> */}
          </Route>
          <Route path="places">
            <Route index element={<Places />} />
            <Route path="new" element={<NewPlace />} />
            {/* <Route path=":teamId" element={<Team />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
