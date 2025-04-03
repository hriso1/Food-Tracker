import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfilePage from './pages/ProfilePage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalculatorPage from './pages/CalculatorPage';
import WorkoutPage from './pages/WorkoutPage';
import NutritionPage from './pages/NutritionPage';
import TrackerPage from './pages/TrackerPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "calculator",
    element: <CalculatorPage />,
  },
  {
    path: "workouts",
    element: <WorkoutPage />,
  },
  {
    path: "nutrition",
    element: <NutritionPage />,
  },
  {
    path: "tracker",
    element: <TrackerPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


