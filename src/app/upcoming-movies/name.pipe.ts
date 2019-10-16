import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, args): any {
    if(!value)return [];
    if(!args)return value;
    args = args.toLowerCase();
    return value.filter(item => {
      return item.title.toLowerCase().includes(args)||item.release_date.toLowerCase().includes(args);
    });
  }

}
