const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello! </h1>
    </div>
  );
}
