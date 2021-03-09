import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor() { }


  firstName = ''
  lastName = ''
  email = ''
  password = ''

  dataCombined = [this.firstName, this.lastName, this.email]


  checkData() {
    if (
      this.password.length > 8
    ) {
      if (this.password != this.firstName) {
        if (this.password != this.lastName) {
          console.log("success")
        }
      }
    }
    else {
      console.log("error")
    }
  }



}
