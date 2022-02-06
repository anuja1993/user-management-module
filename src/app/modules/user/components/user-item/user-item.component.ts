import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../../core/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserItemComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      user: User;
    }
  ) {}

  ngOnInit(): void {}
}
