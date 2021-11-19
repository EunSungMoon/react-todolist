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

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="list" placeholder="write to do" onChange={e => setTodo(e.target.value)} value={todo} />
          <button className="addBtn" type="submit">입력</button>
        </form>
      </section>
      <section>
        <div className="todoList">
          <ul>
            {todos.map((todo) =>
              <li key={todo.id}>
                <div className="label"></div>
                <span className="todoText">{todo.text}</span>
                <div className="delBtn" onClick={(deleteTodo(todo.id))}></div>
              </li>)}
          </ul>
        </div>
      </section>
    </React.Fragment>
  )

}

export default TodoInsert;