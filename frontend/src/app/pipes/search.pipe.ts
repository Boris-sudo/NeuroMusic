import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: string) {
    if (!value) return null;
    if (!search) return value;

    search = search.toLowerCase();
    return value.filter((x: any) => x.name.toLowerCase().search(search) != -1);
  }

}
