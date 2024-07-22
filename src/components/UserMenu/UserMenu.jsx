import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operations/auth.operation";
import style from "./UserMenu.module.scss";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, {user.name}</p>
      <button
        className={style.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
