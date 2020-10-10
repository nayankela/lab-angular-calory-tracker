import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodsearchpipe',
})
export class FoodsearchpipePipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    return items.filter((item) => item[field].match(new RegExp(value, 'i')));
  }
}
