import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/services/user/user.service';
import { User } from '../../../../core/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})

/**
 * component that display user list
 */
export class UserListComponent implements OnInit {
  // user list observable
  // use list will be capture using async operator in HTML template
  public userList$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // load user list from API
    this.userList$ = this.userService.searchUsers();
  }
}
