import { NavLink } from "react-router-dom";

function Layout(props) {
  function determineActive({ isActive }) {
    let cn = `App-link `;
    return isActive ? cn + `active` : cn;
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink className={determineActive} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={determineActive} to="/to-do">
              To Do
            </NavLink>
          </li>
          <li>
            <NavLink className={determineActive} to="/codewars-compare">
              Codewars Compare
            </NavLink>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>{props.pageTitle}</h1>
        {props.children}
      </header>
    </div>
  );
}

export default Layout;
