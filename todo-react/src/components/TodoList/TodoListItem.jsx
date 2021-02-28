/* eslint-disable react/prop-types,jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-noninteractive-element-interactions */

export const TodoListItem = (props) => {
  const {
    isDone, label, id, onRemove, onToggle,
  } = props;

  return (
    <li className="list-group-item">
      <span
        onClick={() => onToggle(id)}
        className="pointer list-group-item-content"
        data-done={isDone}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn-remove btn btn-sm btn-primary"
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </li>
  );
};
