import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
// import { MyWorksComponent } from './components/my-works/my-works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatRippleModule } from '@angular/material/core';
import { MyWorksModule } from './modules/my-works/my-works.module';

@NgModule({
  declarations: [AppComponent, AboutMeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatTabsModule,
    // MatRippleModule,
    MyWorksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
