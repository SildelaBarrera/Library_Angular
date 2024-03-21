import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refBook'
})
export class RefBookPipe implements PipeTransform {

  transform(value: number): string {

      let refBook: string = "Ref - " + value;

    return refBook;
  }

}
