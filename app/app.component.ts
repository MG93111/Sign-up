import { Component } from '@angular/core';
import { FormsComponent } from '../app/forms/forms.component';
import { SaveComponent } from './save/save.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign up form';
  FormsComponent
}
