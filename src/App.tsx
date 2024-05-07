import cn from 'classnames';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './views/main';
import MainIndex from './views/main-index';
import Squad from './views/squad';
import SquadAdmin from './views/squad-admin';
import Frens from './views/frens';
import Earn from './views/earn';
// import SquadAdmin from './views/squad-admin';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainIndex/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/squad",
    element: <Squad/>,
  },
  {
    path: "/squad-admin",
    element: <SquadAdmin/>,
  },
  {
    path: "/frens",
    element: <Frens/>,
  },
  {
    path: "/earn",
    element: <Earn/>,
  },
]);

function App() {
  return (
    <>
      <div className={cn("flex flex-col min-h-full p-4")}>
        <RouterProvider router={router} />
      </div>
    </>
);
}

export default App;