import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
  Error,
} from "./pages";

import {
  loader as registerLoader,
  action as registerAction,
} from "./pages/register";
import { loader as loginLoader, action as loginAction } from "./pages/login";
import { action as addJobAction } from "./pages/add-job";
import { action as editJobAction } from "./pages/edit-job";
import { action as deleteJobAction } from "./pages/delete-job";
import { action as updateProfileAction } from "./pages/profile";

import { loader as dashboardLoader } from "./pages/layouts/dashboard-layout";
import { loader as allJobsLoader } from "./pages/all-jobs";
import { loader as editJobLoader } from "./pages/edit-job";
import { loader as adminLoader } from "./pages/admin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        loader: registerLoader,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction(queryClient),
        loader: loginLoader,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "stats",
            element: <Stats />,
          },
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
          { path: "delete-job/:id", action: deleteJobAction },
          {
            path: "profile",
            element: <Profile />,
            action: updateProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
        ],
      },
    ],
  },
]);
