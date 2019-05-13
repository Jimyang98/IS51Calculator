import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';
// import { isNumber } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  answer: any = ('0');
  numberArray: String[] = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.'];
  clearArray: string[] = ['CE'];
  equals: string[] = ['='];
  historyArray: Array<any> = [];

  operator = null;
  previous = null;
  operatorClicked = false;

  constructor() { }


  ngOnInit() {
    this.numberArray = [
      '6', '7', '8', '9',
      '2', '3', '4', '5',
      '1', '0', '.'];
    this.answer = ('');
    this.equals = ['='];
    this.historyArray = [
      {
        id: this.answer = '',
        edit: false
      }
    ];
  }

  showNumbers(num: string) {
    console.log('', num);
    if (this.operatorClicked) {
      this.answer = '';
      this.operatorClicked = false;
    }
    this.answer = this.answer + num;

  }


  setPrevious() {
    this.operatorClicked = true;
    this.previous = this.answer;
  }

  add() {
    this.operator = (a, b) => a + b;
    this.setPrevious();

  }

  subtract() {
    this.operator = (a, b) => a - b;
    this.setPrevious();

  }

  divide() {
    this.operator = (a, b) => a / b;
    this.setPrevious();

  }

  multiply() {
    this.operator = (a, b) => a * b;
    this.setPrevious();

  }

  clearNumbers(num: string) {
    console.log('', num);
    if (num = 'CE') {
      this.answer = '';
    }
  }

  solve(result: string) {
    console.log('', result);
    this.answer = this.operator(
      parseFloat(this.previous),
      parseFloat(this.answer));
  }

  random() {
    this.answer = Math.floor(Math.random() * 13);
  }

  saveAnswer() {
    this.historyArray.unshift({
      id: this.answer,
      edit: false
    });
    this.historyArray[''] = false;
  }
}
