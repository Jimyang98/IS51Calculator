import { Component } from '@angular/core';
import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { AppData } from './AppData';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IS51Calculator';
  data = new AppData('');


  constructor() {
  }
}
