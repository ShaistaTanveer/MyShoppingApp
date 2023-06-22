import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { AuthService } from '../manager/auth.service';
export class CommentNode {
  text: string = '';
  anwsers: CommentNode[] = [];
  isOpen!: false;
  constructor(text: string) {
    this.text = text;
  }

  addAnwser(newComment: CommentNode) {
    this.anwsers.push(newComment);
  }
}
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent {
  @Input()
  comments: CommentNode[] = [];
  text!: string;
  data: any = [];
  constructor(public service: AuthService) {}

  ngOnInit() {}

  addComment(comment: CommentNode) {
    this.data.push({ name: this.text });
    comment.addAnwser(new CommentNode(this.text));
  }
}
// export class ReplyComponent implements OnInit {
//   userForm!: FormGroup;
//   userArray2 = new FormArray([new FormControl('', Validators.required)]);
//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     // this.userForm = fb.group({
//     //   firstName: '',
//     //   age: '',
//     // });
//   }

//   ngOnInit(): void {
//     this.userForm = this.fb.group({
//       basicInfo: this.fb.group({
//         firstName: [],
//         // age: [],
//       }),
//     });
//   }
//   AddChild() {}

//   // addFormControl() {
//   //   console.log('hello');

//   //   let usersArray = this.usersForm.controls.users as FormArray;
//   //   let arraylen = usersArray.length;

//   //   let newUsergroup: FormGroup = this.fb.group({
//   //     firstName: ['', Validators.required],
//   //     age: ['', Validators.required],
//   //   });

//   //   usersArray.insert(arraylen, newUsergroup);
//   // }
//   // onSubmit() {}
// }
