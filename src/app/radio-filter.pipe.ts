/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './TodoItem';

@Pipe({
	name: 'radioFilter'
})
export class RadioFilterPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if(!value)return null;
		if(!args)return value;

		args = args.toLowerCase();

		return value.filter(function(data: TodoItem[]){
			return JSON.stringify(data).toLowerCase().includes(args);
		});
	}
}
