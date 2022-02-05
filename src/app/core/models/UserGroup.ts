import {AccessRule} from "./AccessRule";

export class UserGroup {
  id: number;
  groupName: string = '';
  accessRule: AccessRule;

  constructor() {
    this.id = -1;
    this.accessRule = new AccessRule();
  }
}
