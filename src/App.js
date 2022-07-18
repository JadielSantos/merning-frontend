import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./user/pages/Auth";
import Home from "./shared/pages/Home";
import Users from "./user/pages/Users";
import NotFound from "./shared/pages/NotFound";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePalce";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users" exact>
              <Route index element={<Users />} />
            </Route>
            <Route path=":userId/places" element={<UserPlaces />} />
            <Route path="places">
              <Route path="new" element={<NewPlace />} />
              <Route path=":placeId" element={<UpdatePlace />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
