import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common'; // Explicitly import JsonPipe

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Add JsonPipe explicitly
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  // Handle the file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', this.selectedFile.name);
    }
  }

  // Handle the drop event
  onFileDropped(event: any): void {
    event.preventDefault();
    const file: File = event.dataTransfer.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File dropped:', this.selectedFile.name);
    }
  }

  // Prevent the default behavior of the browser
  onDragOver(event: any): void {
    event.preventDefault();
  }

  // Optionally, upload the file to a server
  uploadFile(): void {
    if (this.selectedFile) {
      console.log('Uploading file:', this.selectedFile.name);
      // You can add your upload logic here
    }
  }
}
