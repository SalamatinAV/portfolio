import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { MyWorksComponent } from 'src/app/components/my-works/my-works.component';
import { ClockAngularComponent } from 'src/app/components/my-works-components/clock-angular/clock-angular.component';
import { ClockJsComponent } from 'src/app/components/my-works-components/clock-js/clock-js.component';
import { ImageFinderComponent } from 'src/app/components/my-works-components/image-finder/image-finder.component';
import { TodoAngularComponent } from 'src/app/components/my-works-components/todo-angular/todo-angular.component';
import { CalculatorComponent } from 'src/app/components/my-works-components/calculator/calculator.component';
import { ExchangeRateComponent } from 'src/app/components/my-works-components/exchange-rate/exchange-rate.component';
import { DictionaryComponent } from 'src/app/components/my-works-components/dictionary/dictionary.component';

@NgModule({
  exports: [MyWorksComponent],
  declarations: [
    MyWorksComponent,
    ClockAngularComponent,
    ClockJsComponent,
    ImageFinderComponent,
    TodoAngularComponent,
    CalculatorComponent,
    ExchangeRateComponent,
    DictionaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatRippleModule,
    BrowserModule,
    MatIconModule,
  ],
})
export class MyWorksModule {}
