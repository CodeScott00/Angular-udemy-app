import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent {
  passwordDisplay = false;
  buttonClickCount = [];
  buttonClickNumber = 0;

  updatePasswordDisplay() {
    this.passwordDisplay = !this.passwordDisplay;
    this.buttonClickCount.push(this.buttonClickCount.length + 1);
  }

  incrementButtonClick() {
    if (this.passwordDisplay) {
      return (this.buttonClickNumber += 1);
    }
  }
}
