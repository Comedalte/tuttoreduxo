import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: string = "";

  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.todo)
  }

}
