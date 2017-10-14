import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://via.placeholder.com/350x150";

  inputVal: string = "hello angular";

  size: number = 3;

  divClass: string;

  isBig: boolean;

  isDev: boolean = true;

  divClazz: any = {
    a: false,
    b: false,
    c: false
  };

  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  name: string;

  age: number = 1;

  searchInput: FormControl = new FormControl();

  birthday: Date = new Date();

  pi:number = 3.141592

  constructor() {

    setTimeout(() => {
      this.divClass = "a b c";
      this.isBig = true;
      this.divClazz = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
    }, 2000);
    setInterval(() => {
      this.name = 'TOM';
    }, 3000);

    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(code => this.getStockInfo(code))
  }

  ngOnInit() {
  }

  doClick(event: any) {
    console.log(event)
  }

  doOnInput(event: any) {
    console.log('dom 属性：' + event.target.value);
    console.log('html 属性：' + event.target.getAttribute('value'));
  }

  doOnChange(event: any) {
    this.name = event.target.value;
  }

  getStockInfo(code: string) {
    console.log(code)
  }
}
