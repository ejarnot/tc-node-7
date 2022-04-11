import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { routes } from "./utils/data";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <NavLink key={route.path} to={route.path}>
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
