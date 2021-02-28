/* eslint-disable jsx-a11y/label-has-associated-control,react/prop-types */
export const TodoForm = (props) => {
  const { onSubmit } = props;

  return (
    <form id="todo-form" onSubmit={onSubmit}>
      <div className="row">
        <h2 className="text-center"> TODO</h2>
      </div>
      <div className="row form-floating mb-2">
        <input
          id="todo-input"
          className="form-control"
          placeholder="впиши"
          required="required"
        />
        <label htmlFor="todo-input">
          New todo
        </label>
      </div>
      <div className="row mb-4">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};
