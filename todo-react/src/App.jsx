import * as React from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todoItems, setTodoItems] = React.useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const currentValue = ev.target.elements['todo-input'].value;

    const newTodoItem = {
      id: new Date().getTime(),
      label: currentValue,
      isDone: false,
    };

    setTodoItems([...todoItems, newTodoItem]);
  };

  const handleItemToggle = (id) => {
    setTodoItems(todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }

      return item;
    }));
  };

  const handleItemRemove = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        items={todoItems}
        onItemToggle={handleItemToggle}
        onItemRemove={handleItemRemove}
      />
    </div>
  );
};

export default App;
