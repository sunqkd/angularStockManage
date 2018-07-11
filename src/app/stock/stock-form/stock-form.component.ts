import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';


@Component({
	selector: 'app-stock-form',
	templateUrl: './stock-form.component.html',
	styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
	stock: Stock = new Stock(0, "", 0, 0, "", []); // 初始值
	category = ["IT", "互联网", "金融"];  // 股票类型

	constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {

	}

	formModel: FormGroup // 接管form表单
	ngOnInit() {

		let stockId = this.routeInfo.snapshot.params['id']
		let fb = new FormBuilder()
		this.formModel = fb.group(
			{
				stockName: ['', [Validators.required, Validators.minLength(3)]], // 股票名称校验
				stockPrice: ['', [Validators.required]], // 股票价格
				stockdesc: [''], //股票描述
				stockcategory: fb.array([
					new FormControl(false),
					new FormControl(false),
					new FormControl(false)
				], this.categolary) // 股票类型
			}
		)
		this.stockService.getStock(stockId).subscribe(
			data => {
				this.stock = data
				this.formModel.reset({   // form 更新
					stockName:data.name,
					stockPrice:data.price,
					stockdesc:data.desc,
					stockcategory: [
						data.categories.indexOf(this.category[0]) != -1,
						data.categories.indexOf(this.category[1]) != -1,
						data.categories.indexOf(this.category[2]) != -1
					]
				})
			}

		)
		//formbuilder 初始化form表单数据结构
		// let fb = new FormBuilder()
		// this.formModel = fb.group(
		// 	{
		// 		stockName: [this.stock.name, [Validators.required, Validators.minLength(3)]], // 股票名称校验
		// 		stockPrice: [this.stock.price, [Validators.required]], // 股票价格
		// 		stockdesc: [this.stock.desc], //股票描述
		// 		stockcategory: fb.array([
		// 			new FormControl(this.stock.categories.indexOf(this.category[0]) != -1),
		// 			new FormControl(this.stock.categories.indexOf(this.category[1]) != -1),
		// 			new FormControl(this.stock.categories.indexOf(this.category[2]) != -1)
		// 		], this.categolary) // 股票类型
		// 	}
		// )
	}

	categolary(control: FormArray) {
		let valid = false;
		control.controls.forEach(control => {
			if (control.value) {
				valid = true
			}
		})

		if (valid) {  // 表示验证通过
			return null;
		} else {
			return { cate: true }  // 用于判断错误的名字 cate
		}

	}

	cancel() { // 取消
		this.router.navigateByUrl('/stock');
	}
	save() { // 保存
		// console.log(this.stock.rating)
		// this.router.navigateByUrl('/stock');

		let chncate = [];
		let index = 0
		for (let i = 0; i < 3; i++) {
			if (this.formModel.value.stockcategory[i]) {
				chncate[index++] = this.category[i]
			}
		}
		this.formModel.value.stockcategory = chncate;
		this.formModel.value.rating = this.stock.rating

		console.log(this.formModel.value)
	}

}
