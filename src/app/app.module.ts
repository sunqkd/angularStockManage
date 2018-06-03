import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartsComponent } from './starts/starts.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 路由配置
import { Routes, RouterModule } from '@angular/router';
import { StockService } from './stock/stock.service';
import { StockFilterPipe } from './pipe/stock-filter.pipe';


const routerconfig: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // 路由重定向
	{path: 'dashboard', component: DashboardComponent}, // 主页
	{path: 'stock', component: StockManageComponent}, // 股票管理
	{path: 'stock/:id', component:StockFormComponent} // form 表单
]

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		ContentComponent,
		SidebarComponent,
		FooterComponent,
		StockManageComponent,
		StockFormComponent,
		DashboardComponent,
		StockFilterPipe,
		StartsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routerconfig) // 引入routerModule模块
	],
	providers: [StockService],
	bootstrap: [AppComponent]
})
export class AppModule { }
