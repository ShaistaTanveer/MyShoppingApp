import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { AuthService } from '../manager/auth.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  TreeItems!: TreeviewItem[];
  values!: number[];
  items: any;
  data: any;
  course: any;
  action: any;
  courses: any;
  isedit: any;
  id: any;
  constructor(private service: AuthService) {}

  ngOnInit() {
    this.getData();
    this.getFields();
  }

  getFields() {
    this.items = [
      new TreeviewItem({
        text: 'PROGRAMMER',
        value: 91,
        children: [
          {
            text: 'FRONTED',
            value: 0,
            checked: false,
          },
          {
            text: 'BACKEND',
            value: 1,
            checked: false,
          },
          {
            text: 'FULLSTACK',
            value: 2,
            checked: false,
          },
        ],
      }),
      new TreeviewItem({
        text: 'NETWORKING',
        value: 100,
        children: [
          {
            text: 'BACKSTAGE',
            value: 4,
            checked: false,
          },
          {
            text: 'MARKETING',
            value: 5,
            checked: false,
          },
          {
            text: 'SALE',
            value: 6,
            checked: false,
          },
        ],
      }),
    ];
  }

  onClick(data: any) {
    let sendData: any[] = [];
    for (let i = 0; i < data.length; i++) {
      let check = data[i].internalChildren;
      console.log(check);
      check.forEach((el: { text: any; internalChecked: boolean }) => {
        console.log(el, 'eeeeeeeee');

        if (el.internalChecked === true) {
          sendData.push(el.text);
        }
      });
    }
    if (sendData.length <= 0) {
      alert('please select data');
    } else {
      let data = {
        course: sendData,
      };
      if (this.isedit === true) {
        let updated: any[] = [];
        let dataupdate = {
          coursedata: updated,
          id: this.id,
        };
        console.log(dataupdate);
        for (let i = 0; i < this.items.length; i++) {
          let editData = this.items[i].internalChildren;
          console.log(editData);

          editData.forEach((el: { text: any; internalChecked: boolean }) => {
            if (el.internalChecked === true) {
              updated.push(el.text);
            }
          });
        }
        console.log('UPDATE DATA', dataupdate);
        this.service.updateData(this.id, dataupdate).subscribe((response) => {
          this.getFields();
          this.getData();
          console.log('UPDATED');
        });
      } else {
        this.service.postdata(data).subscribe((response) => {
          this.getFields();
          this.getData();
          alert('DONE');
        });
      }
    }
  }

  edit(item: any) {
    this.isedit = true;

    this.getFields();
    this.service.getById(item).subscribe((response) => {
      this.id = response.tree;
      let getData = response.course;
      const str = getData;
      const arr = str.split(',');
      console.log(arr);
      let editData = this.items[0].internalChildren;
      console.log(editData);
      editData.forEach((el: { text: any; internalChecked: boolean }) => {
        console.log(el.text);
        if (arr.includes(el.text)) {
          el.internalChecked = true;
        }
      });
    });
  }

  getData() {
    this.service.getBooks().subscribe((response) => {
      this.courses = response.course;
      console.log(this.courses);
    });
  }
}
