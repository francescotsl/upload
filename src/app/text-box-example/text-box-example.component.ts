import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel support

@Component({
  selector: 'app-text-box-example',
  standalone: true,  // Mark this as standalone
  imports: [FormsModule],  // Import FormsModule here
  templateUrl: './text-box-example.component.html',
  styleUrls: ['./text-box-example.component.css'],
})
export class TextBoxExampleComponent {
  inputText: string = '';  // Two-way binding variable
}

//kjshjfjkshfkj