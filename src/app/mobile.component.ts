import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
    secretCode: String = '';

  constructor() { }

  ngOnInit() {

  }
  ngSendRequest(){
    console.log('supposed to be sending request over here....');
    console.log('the value is:'+this.secretCode);
  }

}
