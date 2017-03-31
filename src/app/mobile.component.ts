import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
    secretCode: String = '';

  constructor( private http: Http) { }

  ngOnInit() {

  }
  ngSendRequest(){
    var data = {'sc': this.secretCode};
    this.http.post('http://localhost:8000/slr', data);
    console.log('supposed to be sending request over here....');
    console.log('the value is:' + this.secretCode);
  }

}
