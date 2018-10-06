import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { addTodo } from '../../sdk/store';

@Component({
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
    console.log(this.todoForm.value)
    addTodo(this.todoForm.value.todo);
    this.todoForm.reset();
  }

}
