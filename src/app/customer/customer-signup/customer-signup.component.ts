import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
})
export class CustomerSignupComponent implements OnInit {
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit(): void {}
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = {
      firstName: form.value.firstName,
      email: form.value.email,
      password: form.value.password,
      mobile: form.value.mobile,
    };
    this.authService.registerCustomer(authData).subscribe(
      (response) => {
        const token = response.token;
        const id = response.id;
        this.authService.saveAuth(token, id);
        alert('customer Registered!');
        this.authService.router.navigate(['/customerLogin']);
      },
      (error): void => {
        alert('Error: register Failed!');
      }
    );
  }
}
