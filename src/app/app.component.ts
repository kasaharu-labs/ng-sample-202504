import { TextFieldModule } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, TextFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-sample-202504';
  form = new FormGroup({
    text: new FormControl('', { nonNullable: true }),
  });
}
