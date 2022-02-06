import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../../core/services/user/user.service';
import { User } from '../../../../core/models/User';
import { UserGroup } from '../../../../core/models/UserGroup';
import { AccessRule } from '../../../../core/models/AccessRule';

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

  public userGroups: UserGroup[] = [];
  public userGroupsMap: Map<number, string> = new Map<number, string>();

  public accessRules: AccessRule[] = [];
  public accessRulesMap: Map<number, string> = new Map<number, string>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // load master data and create maps
    this.loadAccessRulesAndGenerateMap();
    this.loadUserGroupsAndGenerateMap();

    // load user list from API
    this.userList$ = this.userService.fetchUsers();
  }

  /**
   * load user groups and generate user group map
   */
  private loadUserGroupsAndGenerateMap() {
    this.userService.fetchUserGroups().subscribe((data) => {
      this.userGroups = data;

      for (let i = 0; i < data.length; i++) {
        this.userGroupsMap.set(
          this.userGroups[i].id,
          this.userGroups[i].groupName
        );
      }
    });
  }

  /**
   * load access rules and generate access rule map
   */
  private loadAccessRulesAndGenerateMap() {
    this.userService.fetchAccessRules().subscribe((data) => {
      this.accessRules = data;

      for (let i = 0; i < data.length; i++) {
        this.accessRulesMap.set(
          this.accessRules[i].id,
          this.accessRules[i].ruleName
        );
      }
    });
  }
}
