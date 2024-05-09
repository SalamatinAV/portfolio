import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyWorksComponent } from './components/my-works/my-works.component';

const routes: Routes = [
  { path: '', redirectTo: 'aboutMe', pathMatch: 'full' },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'myWorks', component: MyWorksComponent },
  { path: '**', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
