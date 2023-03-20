import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  passwordDisplay = false;
  buttonClickCount = [];

  updatePasswordDisplay() {
    this.passwordDisplay = !this.passwordDisplay;
    this.buttonClickCount.push(this.buttonClickCount.length + 1);
  }

  // blueIfGreaterThanFive(buttonClickCount) {
  //   if(this.buttonClickCount.length < 5){
  //     return
  //   }
  // }
}
