import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-library';

  constructor (private helloWorldService: HelloWorldService) {}

  ngOnInit () {
    console.log(this.helloWorldService.helloWorld());
  }
}
