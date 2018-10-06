import { Component, OnInit } from '@angular/core';
import { store, Todo, todoToggleDone, toggleSelectTodo } from '../../sdk/store';

@Component({
	selector: 'todo-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	todoList: Array<Todo>;
	selected: Todo;

	constructor() { }

	ngOnInit() {
		this.todoList = store.getState().todos;
		this.selected = store.getState().selected;
		store.subscribe(() => {
			this.todoList = store.getState().todos;
			this.selected = store.getState().selected;
		})
	}

	toggleSelectTodo(todo: Todo) {
		toggleSelectTodo(todo);
	}

	isSelected(todo: Todo) {
		console.log(this.selected, todo, this.selected === todo);
		return this.selected === todo;
	}
}
