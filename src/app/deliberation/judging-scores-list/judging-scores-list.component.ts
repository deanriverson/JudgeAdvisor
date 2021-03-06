import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";

@Component({
  selector: 'judging-scores-list',
  templateUrl: './judging-scores-list.component.html',
  styleUrls: ['./judging-scores-list.component.css']
})
export class JudgingScoresListComponent implements OnInit {
  private teams: Team[];

  constructor(store: AppStoreService) {
    store.teamsObservable.subscribe(teams => {
      this.teams = teams
        .map(t => new Team(t))
        .sort((a, b) => a.judgingScore - b.judgingScore)
    });
  }

  ngOnInit() {
  }
}
