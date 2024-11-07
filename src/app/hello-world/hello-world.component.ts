import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,  // Ensure it's a standalone component
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {}
