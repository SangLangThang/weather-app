import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * 
   *
   */

  transform(items: any, term: string): any {
    if (!term || !items) return items;

    return FilterSearchPipe.filter(items, term);
  }

  static filter(
    items: Array<{ [key: string]: any }>,
    term: string,
  ): Array<{ [key: string]: any }> {

    const toCompare = term.toLowerCase();

    function checkInside(item: any, term: string) {
      if (
        typeof item.name === 'string' &&
        item.name.toString().toLowerCase().includes(toCompare)
      ) {
        return true;
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }
}
