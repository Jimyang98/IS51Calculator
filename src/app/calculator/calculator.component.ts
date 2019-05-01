import { Component, OnInit } from '@angular/core';
// import { isNumber } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  answer = ('0');
  numberArray: String[] = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.'];
  clearArray: string[] = ['CE'];
  equals: string[] = ['='];
  operators: string[] = ['+', '-', '*', '/'];

  private previous: string[] = [''];
  private current: string[] = [''];

  constructor() { }


  ngOnInit() {
    this.numberArray = [
      '6', '7', '8', '9',
     '2', '3', '4', '5',
      '1', '0', '.'];
    this.answer = ('');
    this.equals = ['='];
    this.operators = ['+', '-', '*', '/'];
  }

  showNumbers(num: string) {
    console.log('', num);
    if (this.answer === '') {
      this.answer = '' + num;
    } else {
      this.answer = this.answer + num;
    }
  }

  clearNumbers(num: string) {
    console.log('', num);
    if (num = 'CE') {
      this.answer = '';
    }
  }

  solve(result: string) {
    console.log('', result);
  }


}
