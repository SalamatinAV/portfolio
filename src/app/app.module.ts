import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyWorksModule } from './modules/my-works/my-works.module';

@NgModule({
  declarations: [AppComponent, AboutMeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyWorksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
