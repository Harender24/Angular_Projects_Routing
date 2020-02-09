import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-hone',
  templateUrl: './collections-hone.component.html',
  styleUrls: ['./collections-hone.component.css']
})
export class CollectionsHoneComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 25, job: 'Engineer' }
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
