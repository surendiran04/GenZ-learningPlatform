import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "../src/Contexts/AuthContext";
import { ROUTES, PrivateRoutes } from "./Routes/Routes"
import Home from "../src/Pages/Home"
import NotFound from "../src/Pages/NotFound";
import Sidebar from "./Components/sidebar.jsx";
import NavBar from "./Components/NavBar.jsx";
import CourseCard from "./Components/CourseCard.jsx";

function App() {
  // const { isLoggedIn, } = useAuthContext();
  const isLoggedIn = false;
  const { open, setOpen } = useAuthContext();

  // const userRoles = decodedToken?.roles || [];  //for role based routes
  function renderRoutes() {
    return ROUTES.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={route.path}
      />
    ));
  }
  function renderPrivateRoutes() {
    return PrivateRoutes.map((route, index) => (
      <Route
        key={`${route.title}-${index}`}
        Component={route.Component}
        path={route.path}
      />
    ));
  }

  return (
    <div className="w-screen h-screen flex">
      <div className={`${open ? "w-40" : "w-20"} `}>
        <Sidebar />
      </div>
      <div className={` ${open ? "w-full mx-0" : "w-full"}`}>
        <NavBar />
        <Routes>
          {renderRoutes()}
          {renderPrivateRoutes()}
          {/* {isLoggedIn && renderRoutes()} */}
          {/* {isLoggedIn && renderPrivateRoutes()} */}
          <Route Component={NotFound} path="*" />;
        </Routes>
      </div>
    </div>
  );
}

export default App;