import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Andrick Silva',
      email: 'andrick@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 2,
      name: 'Shweta Silva',
      email: 'shweta@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 3,
      name: 'Shika Silva',
      email: 'shika@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 4,
      name: 'Prashant Silva',
      email: 'prashant@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 5,
      name: 'Rajlaxmi Silva',
      email: 'rajlaxmi@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 6,
      name: 'Gavin Silva',
      email: 'gavin@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 7,
      name: 'Blaze Silva',
      email: 'blaze@test.com',
      role: 'user',
      contact: '1234567890',
    },
    {
      id: 8,
      name: 'Sai Silva',
      email: 'sai@test.com',
      role: 'user',
      contact: '1234567890',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
