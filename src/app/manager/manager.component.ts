import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  showLoginSignup: boolean = false;
  showSignup: boolean = false;

  toggleLoginSignup() {
    if (this.showLoginSignup && this.showSignup) {
      this.showLoginSignup = false; // Close the signup component
    } else {
      this.showLoginSignup = true; // Toggle the login component
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
