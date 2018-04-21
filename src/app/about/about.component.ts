import { Component, OnInit } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders = LEADERS;
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders().then(leaders => this.leaders = leaders);
  }

}
