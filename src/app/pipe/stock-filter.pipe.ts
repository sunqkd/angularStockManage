import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

	transform(list: any[], field: string, keyWord: string): any {
		// field 为属性  keyWord 为输入的文字
		if(!field || !keyWord){
			return list
		}
		return list.filter(item => {
			let itemFieldValue = item[field].toLowerCase();
			return itemFieldValue.indexOf(keyWord) >= 0;
		})
		
	}

}


