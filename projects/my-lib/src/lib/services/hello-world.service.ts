import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  helloWorld () {
    const variable = 'Hello World';
    return variable;
  }
}
