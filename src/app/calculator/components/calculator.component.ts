import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private numA!: string
  private numB!: string
  private res!: string
  private key!: string

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clean()
  }

  /*
  * Initializing all arithmetic operators to standarts values.
  */
  clean(): void {
    this.numA = '0'
    this.numB = 'null'
    this.res = 'null'
    this.key = 'null'
  }


  /**
   * Returns a concatenated value. Treats the decimal separator.
   * 
   * @param currentNumber : string
   * @param nextNumber : string
   * @returns string
   */
  numbersConcantenation(currentNumber: string, nextNumber: string): string {
    // if current number equals zero or null, the value is reinitialized
    if (currentNumber === '0' || currentNumber == 'null') currentNumber = ''
    // if first digit is a dot, concatenates zero before the dot
    if (nextNumber === '.' && currentNumber === ' ') return '0.'
    // if a dot is inserted and it already has one, it just returns the current number
    if (nextNumber === '.' && currentNumber.indexOf('.') > -1) return currentNumber
    return currentNumber + nextNumber
  }

  /**
   * Adds the selected number in the arithmetic operation.
   * @param num : string
   * @returns void
   */
  addNumber(num: string): void {
    if (this.key == 'null') this.numA = this.numbersConcantenation(this.numA, num)
    else this.numB = this.numbersConcantenation(this.numB, num)
  }

  defineOperation(key: string): void {
    if (this.key == 'null') {
      this.key = key
      return
    }
    if (this.numB != 'null') {
      this.res = this.calculatorService.calc(parseFloat(this.numA), parseFloat(this.numB), this.key).toString()
      this.key = key
      this.numA = this.res.toString()
      this.numB = 'null'
      this.res = 'null'
    }
  }


  /**
   * Performs calculus of an arithmetic operation
   * @returns void
   */
  calc(): void {
    if (this.numB == 'null' && this.key == 'sqrt') {
      this.res = Math.sqrt(parseFloat(this.numA)).toString()
      this.numA = this.res
      this.numB = 'null'
      this.key = 'null'
    }
    if (this.numB == 'null' && this.key == 'pwtwo') {
      this.res = Math.pow(parseFloat(this.numA), 2).toString()
      this.numA = this.res
      this.numB = 'null'
      this.key = 'null'
    }
    if (this.numB == 'null' && this.key == 'pwthree') {
      this.res = Math.pow(parseFloat(this.numA), 3).toString()
      this.numA = this.res
      this.numB = 'null'
      this.key = 'null'
    }
    if (this.numB == 'null') return
    this.res = this.calculatorService.calc(parseFloat(this.numA), parseFloat(this.numB), this.key).toString()

    this.numA = this.res
    this.numB = 'null'
    this.key = 'null'
  }

  get display(): string {
    if (this.res != 'null') return this.res.toString()
    if (this.numB != 'null') return this.numB.toString()
    return this.numA.toString()
  }

}
