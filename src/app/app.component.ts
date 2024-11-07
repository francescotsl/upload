import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';  // Your HelloWorld component
import { FileUploadComponent } from './file-upload/file-upload.component';  // Your FileUpload component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent, FileUploadComponent],  // Import your components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-app';
}