import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	constructor(public router:Router) { }
    title = environment.appTitle;
	menus:Array<Menu>;
	currentMenuId:number = 1; // 当前选中 menu
	nav (url:Menu) { // 路由跳转
		this.router.navigateByUrl(url.link);
		this.currentMenuId = url.id // 点击ID
	}
	ngOnInit() {
		this.menus = [
			new Menu(1,'首页','dashboard'),
			new Menu(2,'股票管理','stock'),
		]
	}

}

export class Menu {
	constructor(
		public id:number,
		public name:string,
		public link:string
	){}
}
