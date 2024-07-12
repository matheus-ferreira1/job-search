import { createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from "./pages";

import { action as registerAction } from "./pages/register";
import { action as loginAction } from "./pages/login";
import { action as addJobAction } from "./pages/add-job";
import { action as editJobAction } from "./pages/edit-job";

import { loader as dashboardLoader } from "./pages/layouts/dashboard-layout";
import { loader as allJobsLoader } from "./pages/all-jobs";
import { loader as editJobLoader } from "./pages/edit-job";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          { path: "stats", element: <Stats /> },
          {
            path: "add-job",
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
