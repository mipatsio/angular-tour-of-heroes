import { Component, OnInit } from '@angular/core';
import { Supervillain } from '../supervillain';

@Component({
  selector: 'app-supervillains',
  templateUrl: './supervillains.component.html',
  styleUrls: ['./supervillains.component.css']
})
export class SupervillainsComponent implements OnInit {

  greet : string = 'Hello';
  supervillain : Supervillain = {
      id : 1,
      name : 'Joker'
  };

  constructor() { }

  ngOnInit() {
  }

}
