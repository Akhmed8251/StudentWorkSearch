import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      {
        isAuth &&
        privateRoutes.map((route) => (
            <Route
              element={route.element}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          ))
      }
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route element={<Navigate to="/" />} path="*" exact={true} />
    </Routes>
  )
};

export default AppRouter;
