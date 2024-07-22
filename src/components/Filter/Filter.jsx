import styles from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/contact.slice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>Contacts</h2>
      </div>
      <div className={styles.filterContainer}>
        <input
          className={styles.input}
          type="text"
          value={filter}
          placeholder="Search contact"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
