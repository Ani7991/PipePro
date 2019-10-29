import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'pipe'
})
export class CardPipe implements PipeTransform {
  transform(value: string , input: string) {
      if (value) {
        for (let i = 0; i + 4 <= input.toString().length; i +=  4) {
          value = value + input.toString().slice(i, i + 4) +  ' ';
      }
        return value;
  }
  }
}
