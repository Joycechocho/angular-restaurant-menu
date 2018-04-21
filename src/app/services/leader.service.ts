import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: number): Leader {
    return LEADERS.filter((leader) => id === leader.id)[0];
  }

  getFeaturedLeaders(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

}
