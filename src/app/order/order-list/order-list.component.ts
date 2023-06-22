import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/manager/auth.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  isaManager = false;
  isashipper = false;
  isacustomer = false;
  orderList: any;
  costumerId: any = localStorage.getItem('id');

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.isaManager = this.authService.getActiveManager();
    this.isacustomer = this.authService.getactivecustomer();
    this.isashipper = this.authService.getactiveShipper();
    this.fetchData();
  }

  fetchData() {
    this.authService.getOrder().subscribe((response: any) => {
      const token = response.token;
      this.orderList = response.orderList;
      return { orderList: response.orderList };
    });
  }
  onDelete(oid: string) {
    this.authService.deleteOrder(oid).subscribe(() => {
      alert('deleted');
      this.fetchData();
    });
  }
}
