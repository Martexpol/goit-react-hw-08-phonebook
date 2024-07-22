import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/auth.operation";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = (ev) => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const { email, password } = form.elements;
    const userData = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(userData));
    form.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Log In</h2>
      </div>
      <form action="/login" onSubmit={handleLogin}>
        <div className={styles.formDiv}>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="E-mail"
          />
        </div>
        <div className={styles.formDiv}>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Password"
          />
        </div>
        <div className={styles.formDiv}>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
