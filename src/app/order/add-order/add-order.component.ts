import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  private mode = 'create';
  private oid: any;
  iscustomer = false;
  isshipper = false;
  updatedOrder: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.iscustomer = this.authService.getactivecustomer();
    this.isshipper = this.authService.getactiveShipper();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('oid')) {
        this.mode = 'edit';
        this.oid = paramMap.get('oid');
        this.updatedOrder = this.authService
          .getOrderbyId(this.oid)
          .subscribe((response: any) => {
            const myupdatedOrder = response.updatedOrder;
            this.updatedOrder = {
              oid: myupdatedOrder.oid,
              productName: myupdatedOrder.productName,
              quantity: myupdatedOrder.quantity,
              address: myupdatedOrder.address,
              orderDate: myupdatedOrder.orderDate,
              deliveryDate: myupdatedOrder.deliveryDate,
              deliveryStatus: myupdatedOrder.deliveryStatus,
              shipperName: myupdatedOrder.shipperName,
            };
          });
      } else {
        this.mode = 'create';
        this.oid = null;
      }
    });
  }
  onaddOrder(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = {
      productName: form.value.productName,
      quantity: form.value.quantity,
      address: form.value.address,
      orderDate: form.value.orderDate,
      deliveryDate: form.value.deliveryDate,
      deliveryStatus: form.value.deliveryStatus,
      shipperName: form.value.shipperName,
    };
    if (this.mode === 'create') {
      this.authService.addOrder(authData).subscribe(
        () => {
          alert('order Registered!');
          this.authService.router.navigate(['/listProduct']);
        },
        (error): void => {
          alert('Error: order adding Failed!');
        }
      );
    } else if (this.mode === 'edit') {
      this.authService.updateOrder(this.oid, authData).subscribe((response) => {
        alert('updated');
      });
    }
  }
}
