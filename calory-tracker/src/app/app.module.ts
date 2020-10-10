import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfoodsComponent } from './myfoods/myfoods.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodsearchpipePipe } from './foodsearchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyfoodsComponent,
    FoodListComponent,
    FoodsearchpipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
