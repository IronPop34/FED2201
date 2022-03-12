import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {


  transform(value: number, ...args: unknown[]): number {

    let convertedValue = value * .89
    return convertedValue//`EUR${convertedValue.toString()}`;
  }

}
