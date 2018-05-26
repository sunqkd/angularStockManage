import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-starts',
	templateUrl: './starts.component.html',
	styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
    @Input() // 说明rating是从外部接受的 默认为0
	rating:number = 0;

	starts:boolean [];
	constructor() { }

	ngOnInit() {
		this.starts = [] // 初始化
		for(let i = 1;i<=5;i++){
			this.starts.push(i > this.rating)
		}
	}

}
