import { Component, OnInit, Input, Output } from '@angular/core';
import { CommentNode } from '../reply/reply.component';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
  FormArray,
} from '@angular/forms';
import { AuthService } from '../manager/auth.service';
@Component({
  selector: 'app-mytree-data',
  templateUrl: './mytree-data.component.html',
  styleUrls: ['./mytree-data.component.css'],
})
export class MytreeDataComponent {
  comments: Array<CommentNode> = [];
  constructor(public service: AuthService) {
    this.comments = [new CommentNode('First')];
  }
  onSave(value: any) {
    let items = value;
    let data = {
      course: items,
    };
    this.service.savemydata(data).subscribe(
      (response) => {
        alert('entered');
      },
      (error) => {
        alert('error');
      }
    );
  }
}
//   @Input() formGroupName!: string;

//   userArray2 = new FormArray([new FormControl('', Validators.required)]);
//   form!: FormGroup;
//   constructor(
//     private rootFormGroup: FormGroupDirective,
//     private authService: AuthService
//   ) {}

//   ngOnInit(): void {
//     this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
//     // this.form.reset();
//   }

//   AddChild() {
//     // console.log(form);

//     let data = {
//       a: this.userArray2,
//     };
//     console.log(data);
//     this.authService.savemydata(data).subscribe(
//       (response) => {
//         alert('entered');
//         // this.authService.router.navigate(['/Login']);
//       },
//       (error) => {
//         alert('error');
//       }
//     );
//   }
//   addInputControl() {
//     // this.userArray2.push({
//     //   firstName: form.value.firstName,
//     //   age: form.value.age,
//     // });
//     // console.log(this.userArray2);

//     this.userArray2.push(new FormControl('', Validators.required));
//   }
// }
