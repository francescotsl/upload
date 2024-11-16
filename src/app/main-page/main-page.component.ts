// src/app/main-page/main-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],  // Change .css to .scss
  standalone: true,
  imports: [CommonModule]
})
export class MainPageComponent {}