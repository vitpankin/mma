import React from 'react';
import cn from 'classnames';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

import { useIntegration } from '@tma.js/react-router-integration';
import { initNavigator } from '@tma.js/sdk-react';
import { useEffect, useMemo } from 'react';


const Main = React.lazy(() => import("./views/Main_"));
const MainIndex = React.lazy(() => import("./views/MainIndex_"));
const Squad = React.lazy(() => import("./views/Squad_"));
const SquadAdmin = React.lazy(() => import("./views/SquadAdmin_"));
const Frens = React.lazy(() => import("./views/Frens_"));
const Earn = React.lazy(() => import("./views/Earn_"));
const Splash = React.lazy(() => import("./views/Splash_"));

export function App() {
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);
  
  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Splash />}>
                <Splash />
              </React.Suspense>
          }
          />
          <Route
            path="frens"
            element={
              <React.Suspense fallback={<Splash />}>
                <Frens />
              </React.Suspense>
            }
          />
          <Route
            path="earn"
            element={
              <React.Suspense fallback={<>...</>}>
                <Earn />
              </React.Suspense>
            }
          />
          <Route
            path="squad/my"
            element={
              <React.Suspense fallback={<>...</>}>
                <SquadAdmin />
              </React.Suspense>
            }
          />
          <Route
            path="squad/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Squad />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
);
}


function Layout() {
  return (
    <div className={cn("flex flex-col min-h-full p-4")}>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
    </div>
  );
}

export default App;

// import cn from 'classnames';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Main from './views/main';
// import MainIndex from './views/main-index';
// import Squad from './views/squad';
// import SquadAdmin from './views/squad-admin';
// import Frens from './views/frens';
// import Earn from './views/earn';
// // import SquadAdmin from './views/squad-admin';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainIndex/>,
//   },
//   {
//     path: "/main",
//     element: <Main/>,
//   },
//   {
//     path: "/squad",
//     element: <Squad/>,
//   },
//   {
//     path: "/squad-admin",
//     element: <SquadAdmin/>,
//   },
//   {
//     path: "/frens",
//     element: <Frens/>,
//   },
//   {
//     path: "/earn",
//     element: <Earn/>,
//   },
// ]);