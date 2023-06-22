import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
})
export class ManagerLoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = { email: form.value.email, password: form.value.password };
    this.authService.login(authData).subscribe(
      (response) => {
        const token = response.token;
        const id = response.id;
        this.authService.saveAuth(token, id);
        this.authService.isactivemanager = true;
        this.authService.activeshipper = false;
        this.authService.isactivecustomer = false;
        this.authService.isactiveshipper = false;
        this.authService.ispublic = false;
        alert('Logged In!');
        this.authService.router.navigate(['/managerRights']);
      },
      (error): void => {
        alert('Error: Login Failed!');
      }
    );
  }
}
