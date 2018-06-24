import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-starts',
	templateUrl: './starts.component.html',
	styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit, OnChanges {
	@Input() // 说明rating是从外部接受的 默认为0
	rating: number = 0;

	starts: boolean[];
	
	@Input()
	readonly:boolean = true; // 只有详情可以修改星级组件

	@Output()
	ratingChange:EventEmitter<number> = new EventEmitter();

	constructor() { }
   
	ngOnInit() {
		// this.starts = [] // 初始化
		// for (let i = 1; i <= 5; i++) {
		// 	this.starts.push(i > this.rating)
		// }
	}

	// 输入属性发生变化  （此函数在ngOnInit之前执行）
    ngOnChanges(changes:SimpleChanges) :void{
		this.starts = [] // 初始化
		for (let i = 1; i <= 5; i++) {
			this.starts.push(i > this.rating)
		}
	}

	clickStar(index:number) {

		if(!this.readonly){
			this.rating = index + 1;
			this.ratingChange.emit(this.rating) // 发射
		}

	}

}
