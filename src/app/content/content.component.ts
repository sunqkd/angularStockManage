import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter'

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	pageTitle:string =  '这里是首页'; // 标题
	constructor(public router: Router) {

		router.events
		.filter(event => event instanceof NavigationEnd)
		.subscribe( (event:NavigationEnd) =>{
			if(event.url == '/dashboard'){
				this.pageTitle = '这里是首页';
			} else if( event.url.startsWith('/stock')) {
				this.pageTitle = '这里是股票管理';
			}
		})

	}

	ngOnInit() {

	}

}
