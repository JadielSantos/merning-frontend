import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Auth from "./user/pages/Auth";
import Home from "./shared/pages/Home";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePalce";
import { AuthContext } from "./shared/context/auth-context";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users" exact>
            <Route index element={<Users />} />
          </Route>
          <Route path="places">
            <Route path="new" element={<NewPlace />} />
            <Route path=":placeId" element={<UpdatePlace />} />
          </Route>
          <Route path=":userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/">
          <Route index element={<Auth />} />
          <Route path="users" exact>
            <Route index element={<Users />} />
          </Route>
          <Route path=":userId/places" element={<UserPlaces />} />
          <Route path="auth" index element={<Auth />} />
          <Route path="*" element={<Navigate to="auth" replace />} />
        </Route>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
