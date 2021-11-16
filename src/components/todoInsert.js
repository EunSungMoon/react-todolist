import React, { Component } from "react";

class TodoInsert extends Component {
  render() {
    return (
      <section>
        <form>
          <input placeholder="write to do"></input>
          <button>입력</button>
        </form>
      </section>
    )
  }
}

export default TodoInsert;