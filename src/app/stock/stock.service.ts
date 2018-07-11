import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class StockService {

	constructor(public http: Http) {

	}

	// private stocks:Stock [] = [
	// 	new Stock(1,"第一支股票",1.8,3.0,"这是第一支股票",["IT","金融"]),
	// 	new Stock(2,"第二支股票",1.7,4.5,"这是第二支股票",["IT","互联网"]),
	// 	new Stock(3,"第三支股票",1.6,5.5,"这是第三支股票",["互联网","金融"]),
	// 	new Stock(4,"第四支股票",1.9,3.8,"这是第四支股票",["IT","互联网","金融"]),
	// 	new Stock(5,"第五支股票",1.4,7.5,"这是第五支股票",["IT","互联网","金融"]),
	// 	new Stock(6,"第六支股票",1.5,4.8,"这是第六支股票",["IT","互联网","金融"]),
	// 	new Stock(7,"第六支股票",1.5,4.8,"这是第qi支股票",["IT","互联网","金融"])
	// ];

	getStocks(): Observable<Stock[]> {
		return this.http.get('/api/stock').map( response => response.json())
	}

	getStock(id: number): Observable<any> {
		return this.http.get('/api/stock/'+ id).map( response => response.json())
	}
}

// stock 类 声明  此处移动到服务端请求获取

export class Stock {
	constructor(
		public id :number, // id
		public name:string, // 名称 
		public price:number, // 价格
		public rating:number, // 评级
		public desc:string, // 描述
		public categories:Array<string>){
  	}
}