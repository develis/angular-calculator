import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should garantee that 12 + 8 = 20',
    inject([CalculatorService], (service: CalculatorService) => {
      var sum = service.calc(12, 8, CalculatorService.SUM);
      expect(sum).toEqual(20);
    })
  );

  it('should garantee that 12 - 8 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      var sub = service.calc(12, 8, CalculatorService.SUB);
      expect(sub).toEqual(4);
    })
  );

  it('should garantee that 12 / 3 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      var div = service.calc(12, 3, CalculatorService.DIV);
      expect(div).toEqual(4);
    })
  );

  it('should garantee that 12 * 3 = 36',
    inject([CalculatorService], (service: CalculatorService) => {
      var mul = service.calc(12, 3, CalculatorService.MUL);
      expect(mul).toEqual(36);
    })
  );

  it('should garantee that if key isnt valid return 0',
    inject([CalculatorService], (service: CalculatorService) => {
      var invalidOP = service.calc(12, 3, '$');
      expect(invalidOP).toEqual(0);
    })
  );

});
