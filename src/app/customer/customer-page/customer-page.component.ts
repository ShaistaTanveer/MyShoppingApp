import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent implements OnInit {
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
