import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { store } from '../../sdk/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todoForm = new FormGroup({
    todo: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.todoForm.value.todo);

    const action = {type: 'ADD_TODO', payload: {
      todo: this.todoForm.value.todo,
      isDone: false
    }};
    store.dispatch(action);

    this.todoForm.reset();
  }

}
