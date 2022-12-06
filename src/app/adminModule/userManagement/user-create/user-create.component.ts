import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  public addUser!: FormGroup;
  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      Name: ['', Validators.required],
      Password: ['', Validators.required],
      Phone: ['', Validators.required],
      Email: ['', Validators.required],
    });
  }
}
