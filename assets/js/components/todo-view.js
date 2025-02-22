import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../app-state/store.js';

class TodoView extends connect(store)(LitElement) {
  static get properties() {
    return {
      todos: { type: Array },
      task: { type: String },
    };
  }

  stateChanged(state) {
    this.todos = state.todos;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <style>
        :host {
          display: block;
          max-width: 360px;
          margin: 1rem auto;
        }
        :host .input-layout {
          width: 100%;
          gap: 1rem;
          display: flex;
        }
        :host .todos-list .complete {
          text-decoration: line-through;
        }

        :host .todos-list {
          margin-top: var(--spacing, 1rem);
        }
      </style>
      <div class="input-layout" @keyup="${this.shortcutListener}">
        <input
          placeholder="Task"
          id="todoInput"
          .value="${this.task || ''}"
          @change="${this.updateTask}"
        />
        <button class="button primary" @click="${this.addTodo}">
          Add
        </button>
      </div>
      <div class="todos-list">
        ${this.todos.map(
    (todo) => html`
      <div class="todo-item">
        <input 
          type="checkbox"
          id="${(todo.id)}"
          name="${todo.id}"
          ?checked="${todo.isComplete}"
          @change="${() => this.updateTodoStatus(todo, !todo.isComplete)}"
          >
        <label class="${todo.isComplete ? 'complete' : ''}" for="${(todo.id)}">${todo.task}</label>
      </div>
            `,
  )
}
      </div>
    `;
  }

  addTodo() {
    if (this.task) {
      store.dispatch(addTodo(this.task));
      this.task = '';
    }
  }

  shortcutListener(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  updateTask(e) {
    this.task = e.target.value;
  }

  updateTodoStatus(updatedTodo, isComplete) {
    this.store.dispatch(updateTodoStatus(updatedTodo, isComplete));
  }
}

customElements.define('todo-view', TodoView);
