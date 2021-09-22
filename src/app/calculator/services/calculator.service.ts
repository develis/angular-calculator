/**
* Services: executes calculator operations.

* @author Elis Marcela <emarcelatfs@gmail.com>
* @since 1.0

*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  /* Constants used for operations input. */
  static readonly SUM: string = '+'
  static readonly SUB: string = '-'
  static readonly DIV: string = '/'
  static readonly MUL: string = '*'

  constructor() { }
  /**
   * Method to calculate a arithmetic operation (sum, subtraction, division and multiplication).
   * 
   * @param numA : number. First number inserted.
   * @param numB : number. Second number inserted.
   * @param key : string. Operation for both inserted numbers.
   * @returns : number. Operation result between numA and numB.
   */
  calc(numA: number, numB: number, key: string): number {
    var res: number

    switch (key) {
      case CalculatorService.SUM:
        res = numA + numB;
        break;

      case CalculatorService.SUB:
        res = numA - numB;
        break;

      case CalculatorService.DIV:
        res = numA / numB;
        break;

      case CalculatorService.MUL:
        res = numA * numB;
        break;

      default:
        res = 0;
        break;
    }
    return res;
  }
}
