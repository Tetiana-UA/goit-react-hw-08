import { NavLink } from "react-router-dom";

import css from "./auth-nav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
