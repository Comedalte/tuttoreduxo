import { Component, OnInit } from '@angular/core';
import { store, Todo, todoToggleDone } from '../../sdk/store';

@Component({
	selector: 'todo-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	selected: Todo;

	constructor() { }

	ngOnInit() {
		store.subscribe(() => {
			this.selected = store.getState().selected;
		});
	}

	toggleDone(todo: Todo) {
		todoToggleDone(todo);
	}
}
