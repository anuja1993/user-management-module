import { AccessRule } from './AccessRule';

export class UserGroup {
  id: number;
  groupName: string = '';
  accessRuleId: number;
  accessRule: AccessRule;

  constructor() {
    this.id = -1;
    this.accessRuleId = -1;
    this.accessRule = new AccessRule();
  }
}
