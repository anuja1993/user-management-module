import { Injectable } from '@angular/core';
import { DataLoader } from '../data-loader.service';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersServiceUrl = 'users';

  constructor(private dataLoader: DataLoader) {}

  /**
   * load user list from API
   */
  public searchUsers(): Observable<User[]> {
    return this.dataLoader.searchData<User>(this.usersServiceUrl);
  }
}
