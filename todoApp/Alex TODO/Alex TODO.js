const input = document.getElementById('todo-input');
const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

const createNewTodo = (text) => {
  // создаем элемент span
  const label = document.createElement('span');
  label.classList.add('pointer', 'list-group-item-content');
  label.dataset.done = 'false';
  label.textContent = text;

  // создаем элемент li
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');

  // создаем элемент button
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn-remove', 'btn', 'btn-sm', 'btn-primary');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    listItem.remove();
  })

    // добавляем элементы span и button внутрь li
  listItem.appendChild(label);
  listItem.appendChild(removeButton);

  return listItem;
}

form.addEventListener('submit', (ev) => {
  // предотвратить действие по-умолчанию (для события submit - это перезагрузка страницы)
  ev.preventDefault();
  // извлекаем значение из input (текст)
  const currentValue = input.value;
  document.getElementById('todo-input').value = "";
    // создаем новый элемент TODO
  const newTodoItem = createNewTodo(currentValue);
  // добавляем созданный элемент внутрь списка
  list.appendChild(newTodoItem);

});








// <li className="list-group-item">
//   <span className="pointer list-group-item-content" data-done="true"> Some todo item </span>
//   <button className="btn-remove btn btn-sm btn-primary"> Remove</button>
// </li>

// const TodoListItem = (props) => {
//   const { label, onRemove } = props;
//
//   const [isDone, setIsDone] = React.useState(false);
//
//   return (
//     <li className="list-group-item" onClick={() => setIsDone(!isDone)}>
//       <span className="pointer list-group-item-content" data-done={isDone}>
//         {label}
//       </span>
//       <button onClick={onRemove} className="btn-remove btn btn-sm btn-primary">Remove</button>
//     </li>
//   )
// };

// const TodoList = (props) => {
//   const { items, onRemove } = props;
//
//   return (
//     <ul>
//       {items.map((item) => (
//         <TodoListItem
//           key={item.id}
//           label={item.text}
//           onRemove={onRemove}
//         />
//       ))}
//     </ul>
//   );
// }

// React.createElement('li', { className: 'list-group-item' })
