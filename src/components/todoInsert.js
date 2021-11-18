import React from "react";

function TodoInsert() {

  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="list" placeholder="write to do" onChange={e => setTodo(e.target.value)} value={todo} />
          <button type="submit">Add Todo</button>
        </form>
      </section>
      <section>
        <div>
          {todos.map((todo) => <div>{todo.text}</div>)}
        </div>
      </section>
    </React.Fragment>
  )

}

export default TodoInsert;