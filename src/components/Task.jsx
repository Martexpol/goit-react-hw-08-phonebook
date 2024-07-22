import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../redux/slices/tasks.slice";

export default function Task({ id, completed, title }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div id={id}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <span>{title}</span>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  title: PropTypes.string,
};
