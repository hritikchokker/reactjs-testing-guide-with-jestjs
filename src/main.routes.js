import React from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import PrivateRoute from "./utils/auth/privateAuth";
import PublicRoute from "./utils/auth/publicAuth";
import NotFound from "./views/not-found/not-found";
const LoginComponent = React.lazy(() => import("./views/login/login"));
const RegisterComponent = React.lazy(() => import("./views/register/register"));
const DashboardComponent = React.lazy(() =>
  import("./views/dashboard/dashboard")
);
function MainRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <LoginComponent />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <React.Suspense fallback={<Loader />}>
            <PublicRoute>
              <RegisterComponent />
            </PublicRoute>
          </React.Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback={<Loader />}>
            <PrivateRoute>
              <DashboardComponent />
            </PrivateRoute>
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRouter;
