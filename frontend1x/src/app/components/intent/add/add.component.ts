import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title;
  examples;
  param1 = [];
  param2 = []; 
  constructor() { }

  ngOnInit(): void {
  }

  saveIntent() {
    let data = {
      "title" : this.title,
      "examples" : this.examples,
      "param1" : this.param1,
      "param2" : this.param2
    };

    console.log(data);

  }

}
