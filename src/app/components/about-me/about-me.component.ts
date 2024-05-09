import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  skills: string[] = [
    'Angular',
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular CLI',
    'Git',
    'Angular Material',
    'PrimeNG',
    'VSCode',
  ];
}
