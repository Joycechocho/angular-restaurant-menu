import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => id === leader.id)[0]);
  }

  getFeaturedLeaders(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

}
