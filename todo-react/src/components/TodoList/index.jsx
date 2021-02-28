/* eslint-disable react/prop-types */
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const { items, onItemToggle, onItemRemove } = props;

  return (
    <>
      <div className="row mb-2">
        <h3 className="text-center">To-do List</h3>
      </div>
      <div className="row mb-2">
        <hr />
      </div>
      <div className="row">
        <ul id="todo-list" className="list-group">
          {items.map((item) => (
            <TodoListItem
              key={item.id}
              onToggle={onItemToggle}
              onRemove={onItemRemove}
              {...item}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
