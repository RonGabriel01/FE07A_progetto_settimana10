import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import * as Services from 'src/app/todos.service';

@Component({
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completedes!: Todo[];

  constructor() {
    Services.getCompleted().then((res: Todo[]) => {
      this.completedes = res;
    });
  }

  ngOnInit(): void {
  }

}