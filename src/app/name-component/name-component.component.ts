import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'name-component',
  templateUrl: './name-component.component.html',
  styleUrls: ['./name-component.component.css']
})
export class NameComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("nama  kau")
  }

}
