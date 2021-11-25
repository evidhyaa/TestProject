import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

 
  name:string="Vidhya";
  greet(){
    alert("Hello" + this.name);
  }

  // private _userName: string = "bill gates";

  // get userName(): string {
  //   return this._userName;
  // }
  // set userName(val: string) {
  //   //do some extra work here
  //   this._userName = val;
  // }

  ngOnInit(): void {
  } 
}
