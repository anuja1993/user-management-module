import { Injectable } from '@angular/core';
import { DataLoader } from '../data-loader.service';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { UserGroup } from '../../models/UserGroup';
import { AccessRule } from '../../models/AccessRule';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USERS_ENDPOINT_ID = 'users';
  private USERS_GROUPS_ENDPOINT_ID = 'userGroups';
  private ACCESS_RULES_ENDPOINT_ID = 'accessRules';

  constructor(private dataLoader: DataLoader) {}

  /**
   * load user list from API
   */
  public fetchUsers(): Observable<User[]> {
    return this.dataLoader.fetchData<User>(this.USERS_ENDPOINT_ID);
  }

  public fetchUserGroups(): Observable<UserGroup[]> {
    return this.dataLoader.fetchData<UserGroup>(this.USERS_GROUPS_ENDPOINT_ID);
  }

  public fetchAccessRules(): Observable<AccessRule[]> {
    return this.dataLoader.fetchData<AccessRule>(this.ACCESS_RULES_ENDPOINT_ID);
  }
}
