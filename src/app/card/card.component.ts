import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  numberOnly(event) {

    // tslint:disable-next-line: prefer-const
    let code = event.keyCode;
    if (code > 47 && code < 57) {
      return true;
    }
    return false;

  }
}
