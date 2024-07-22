import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Log In</h2>
      </div>
      <form>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
