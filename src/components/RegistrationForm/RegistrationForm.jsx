import styles from "./RegistrationForm.module.scss";
import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operation";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleRegistration = (ev) => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const { name, email, password } = form.elements;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(userData));
    form.reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>New User</h2>
      </div>
      <form action="/register" onSubmit={handleRegistration}>
        <div className={styles.formDiv}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Name"
          />
        </div>
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
