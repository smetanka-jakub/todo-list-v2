import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './TodoItem';

@Pipe({
    name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (!value) return null;
        if (!args) return value;

        args = args.toLowerCase();

        return value.filter(function (data: TodoItem[]) {
            return JSON.stringify(data).toLowerCase().includes(args);
        });
    }
}
