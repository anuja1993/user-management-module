import {Person} from "./Person";
import {UserGroup} from "./UserGroup";

export class User extends Person {
  customerId: number;
  userGroup: UserGroup;

  constructor() {
    super();
    this.customerId = -1;
    this.userGroup = new UserGroup();
  }
}
