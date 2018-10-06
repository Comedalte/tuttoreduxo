import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  todo: string = "";

  constructor() { }

  ngOnInit() {
  }

  add() {
    console.log(this.todo);
    this.todo = "";
  }

}
