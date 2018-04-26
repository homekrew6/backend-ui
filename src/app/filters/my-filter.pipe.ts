import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        console.log(filter);
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.name.indexOf(filter) !== -1);
    }
}