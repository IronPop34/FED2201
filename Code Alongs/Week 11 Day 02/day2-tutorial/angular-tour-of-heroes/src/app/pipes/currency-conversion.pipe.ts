import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {


  transform(value: number, ...args: unknown[]): string {

    let convertedValue = value * .89
    let finalValue = `EUR€${convertedValue.toFixed(2)}`
    return finalValue //`EUR€{convertedValue.toString()}`;
  }

}
